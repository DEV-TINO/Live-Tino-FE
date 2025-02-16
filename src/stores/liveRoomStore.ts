import { create } from "zustand";
import axios from "axios";

interface ILiveRoomStore {
  title: string;
  setTitle: (title: string) => void;
  mode: string;
  setMode: (mode: string) => void;
  roomSetting: string;
  setRoomSetting: (setting: string) => void;
  password: string;
  setPassword: (password: string) => void;
  liveRoomMode: string;
  setLiveRoomMode: (liveRoomMode: string) => void;
  isMute: boolean;
  setMute: (isMute: boolean) => void;
  joinBroadcast: (userId:string, nickname:string) => Promise<boolean>;
}

export const useLiveRoomStore = create<ILiveRoomStore>((set) => ({
  title: "",
  setTitle: (title) => set({ title }),
  mode: "board",
  setMode: (mode) => set({ mode }),
  roomSetting: "public",
  setRoomSetting: (setting) => set({ roomSetting: setting }),
  password: "",
  setPassword: (password) => set({ password }),
  liveRoomMode: "",
  setLiveRoomMode: (liveRoomMode) => set({ liveRoomMode }),
  isMute: false,
  setMute: (isMute) => set({ isMute }),

  joinBroadcast: async (userId, nickname) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/broadcast/join`, {
        userId,
        nickname,
      });

      if (response.data.success) {
        return true;
      } else {
        console.error("Fail to Join Live: ", response.data.message);
        return false;
      }
    } catch (error) {
      console.error("Fail to Join Live: ", error);
      return false;
    }
  },

}));

export default useLiveRoomStore;