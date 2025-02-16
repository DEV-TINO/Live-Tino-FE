import { create } from "zustand";
import axios from "axios";

interface Participant {
  userId: string;
  nickname: string;
}

interface IViewerModal {
  participantList: Participant[];
  viewer: number;
  streamerId: string;
  setStreamerId: (streamerId: string) => void;
  fetchParticipants: (broadcastId: string) => Promise<void>;
}

const useViewerModal = create<IViewerModal>((set) => ({
  participantList: [],
  viewer: 0,
  streamerId: "",

  setStreamerId: (Id) => set({ streamerId: Id }),
  fetchParticipants: async (broadcastId) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/braodcast/user/${broadcastId}`);
      
      if (response.data.success) {
        set({
          participantList: response.data.participantList,
          viewer: response.data.participantList.length,
        });
      } else {
        console.error("Failed to fetch participants: ", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching participants: ", error);
    }
  },
}));

export default useViewerModal;