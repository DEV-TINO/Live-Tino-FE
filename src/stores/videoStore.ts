import { create } from "zustand";
import axios from "axios";

type TVideo = {
  id: string;
  title: string;
  date: string;
  duration: string;
  thumbnail: string;
};

interface IVideoStore {
  videos: TVideo[];
  currentPage: number;
  itemsPerPage: number;
  searchQuery: string;
  selectedVideoId: string;
  fetchVideos: (userId: string) => Promise<void>;
  setCurrentPage: (page: number) => void;
  setSearchQuery: (query: string) => void;
  setSelectedVideoId: (id: string) => void;
  deleteVideo: (videoId: string, userId:string) => Promise<void>;
}

const useVideoStore = create<IVideoStore>((set, get) => ({
  videos: [],
  currentPage: 1,
  itemsPerPage: 6,
  searchQuery: "",
  selectedVideoId: "",
  setCurrentPage: (page) => set({ currentPage: page }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedVideoId: (id) => set({ selectedVideoId: id }),

  fetchVideos: async (userId) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/broadcast/all${userId}`);      
      if (response.data.success) {
        const fetchedVideos = response.data.broadcastList.map((video: any) => ({
          id: video.broadcastId,
          title: video.title,
          date: video.saveDate,
          duration: video.totalTime,
          thumbnail: video.thumbnail || "",
        }));
        set({ videos: fetchedVideos });
      }
    } catch (error) {
      console.error("Failed to fetch videos: ", error);
    }
  },

  deleteVideo: async (videoId, userId) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_URL}/broadcast`, {
        data: { broadcastId: videoId },
      });

      if (response.data.success) {
        await get().fetchVideos(userId)
      } else {
        console.error("Remove Video Fail: ", response.data.message);
      }
    } catch (error) {
      console.error("Remove Video Fail: ", error);
    }
  },
}));

export default useVideoStore;