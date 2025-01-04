import { create } from "zustand"; 

interface ViewerModal {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useSelectionModal = create<ViewerModal>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export default useSelectionModal;