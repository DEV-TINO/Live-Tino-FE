import { create } from 'zustand';

interface liveRoomStore {
  mode: string;
  setMode: (mode: string) => void;
}

export const useLiveRoomStore = create<liveRoomStore>((set) => ({
  mode: 'board',
  setMode: (mode) => set({ mode }),
}));

export default useLiveRoomStore;