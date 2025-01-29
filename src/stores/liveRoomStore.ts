import { create } from "zustand";

interface ILiveRoomStore {
  mode: string;
  setMode: (mode: string) => void;
  roomSetting: string;
  setRoomSetting: (setting: string) => void;
}

export const useLiveRoomStore = create<ILiveRoomStore>((set) => ({
  mode: "board",
  setMode: (mode) => set({ mode }),
  roomSetting: "public",
  setRoomSetting: (setting) => set({ roomSetting: setting }),
}));

export default useLiveRoomStore;