import { create } from "zustand"; 

interface DrawingStore {
  color: string;
  thickness: number;
  transparency: number;
  tool: string;
  setTool: (tool: string) => void,
  setColor: (color: string) => void;
  setThickness: (thickness: number) => void;
  setTransparency: (transparency: number) => void;
}

export const useDrawingStore = create<DrawingStore>((set) => ({
  color: "#000000",
  thickness: 4,
  transparency: 100,
  tool: "Pencil",
  setTool: (tool) => set({ tool }),
  setColor: (color) => set({ color }),
  setThickness: (thickness) => set({ thickness }),
  setTransparency: (transparency) => set({ transparency }),
}));

export default useDrawingStore;