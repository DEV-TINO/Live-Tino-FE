import { create } from "zustand";

type TVideo = {
  id: number;
  title: string;
  date: string;
  duration: string;
};

interface IVideoStore {
  videos: TVideo[];
  currentPage: number;
  itemsPerPage: number;
  searchQuery: string;
  selectedVideoId: number;
  setVideos: (videos: TVideo[]) => void;
  setCurrentPage: (page: number) => void;
  setSearchQuery: (query: string) => void;
  setSelectedVideoId: (id: number) => void;
}

const useVideoStore = create<IVideoStore>((set) => ({
  videos: [
    { id: 1, title: "첫 번째 동영상", date: "24.11.12", duration: "00:27:12" },
    { id: 2, title: "두 번째 동영상", date: "24.11.13", duration: "00:30:45" },
    { id: 3, title: "세 번째 동영상", date: "24.11.14", duration: "00:25:38" },
    { id: 4, title: "네 번째 동영상", date: "24.11.12", duration: "00:27:12" },
    { id: 5, title: "다섯 번째 동영상", date: "24.11.13", duration: "00:30:45" },
    { id: 6, title: "여섯 번째 동영상", date: "24.11.14", duration: "00:25:38" },
    { id: 7, title: "일곱 번째 동영상", date: "24.11.12", duration: "00:27:12" },
    { id: 8, title: "아기다리 고기다리던 제목이 엄청 긴 여덟 번째 동영상", date: "24.11.13", duration: "00:30:45" },
    { id: 9, title: "아홉 번째 동영상", date: "24.11.14", duration: "00:25:38" },
    { id: 10, title: "열 번째 동영상", date: "24.11.12", duration: "00:27:12" },
  ],
  currentPage: 1,
  itemsPerPage: 6,
  searchQuery: "",
  selectedVideoId: 0,
  setVideos: (videos) => set({ videos }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedVideoId: (id) => set({ selectedVideoId: id }),
}));

export default useVideoStore;