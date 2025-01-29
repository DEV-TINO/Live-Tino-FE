import { create } from "zustand";

interface ILiveRoomStore {
  title: string;
  setTitle: (title: string) => void;
  mode: string;
  setMode: (mode: string) => void;
  roomSetting: string;
  setRoomSetting: (setting: string) => void;
  password: string;
  setPassword: (password: string) => void;
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
}));

export default useLiveRoomStore;