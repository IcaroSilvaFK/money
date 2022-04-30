import create from "zustand";

interface IModalProps {
  modalIsOpen: boolean;
  handleToogleModal: () => void;
}

export const useModal = create<IModalProps>()((set) => ({
  modalIsOpen: false,
  handleToogleModal() {
    set((state) => ({ modalIsOpen: !state.modalIsOpen }));
  },
}));
