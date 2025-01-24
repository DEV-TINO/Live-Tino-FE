import { create } from 'zustand';

interface ILiveRoomStore {
  mode: string;
  setMode: (mode: string) => void;
}

export const useLiveRoomStore = create<ILiveRoomStore>((set) => ({
  mode: 'board',
  setMode: (mode) => set({ mode }),
}));

export default useLiveRoomStore;