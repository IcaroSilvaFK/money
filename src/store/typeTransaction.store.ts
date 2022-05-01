import create from "zustand";

interface ITypeTransaction {
  type: string | null;
  setTranscation: (type: string) => void;
}

export const useTypeTransaction = create<ITypeTransaction>()((set) => ({
  type: null,
  setTranscation(type) {
    set({ type: type });
  },
}));
