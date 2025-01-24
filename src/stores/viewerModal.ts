import { create } from "zustand"; 

interface IViewerModal {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useViewerModal = create<IViewerModal>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export default useViewerModal;