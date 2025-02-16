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
  broadcastId: string;
  setBroadcastId: (broadcastId: string) => void;
  joinBroadcast: (userId: string, nickname: string) => Promise<boolean>;
  createLive: (userId: string, title: string, roomSetting: string, password: string) => Promise<boolean>;
  updateLive: (broadcastId: string, roomSetting: string, password: string) => Promise<boolean>;
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
  broadcastId: "",
  setBroadcastId: (broadcastId) => set({ broadcastId }),

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

  createLive: async (userId, title, roomSetting, password) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/broadcast`, {
        userId,
        title,
        roomSetting: roomSetting === "public" ? "0" : "1",
        broadcastPassword: roomSetting === "private" ? password : "",
      });

      if (response.data.success) {
        return true;
      } else {
        console.error("Fail to Create Live: ", response.data.message);
        return false;
      }
    } catch (error) {
      console.error("Fail to Create Live: ", error);
      return false;
    }
  },

  updateLive: async (broadcastId, roomSetting, password) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/broadcast`, {
        broadcastId,
        roomSetting: roomSetting === "public" ? "0" : "1",
        broadcastPassword: roomSetting === "private" ? password : "",
      });

      if (response.data.success) {
        return true;
      } else {
        console.error("Fail to Update Live: ", response.data.message);
        return false;
      }
    } catch (error) {
      console.error("Fail to Update Live: ", error);
      return false;
    }
  },
}));

export default useLiveRoomStore;