import create from "zustand";

interface IHomeProps {
  description: string;
  value: string;
  type: "whitdraw" | "entry";
  id: number;
}
interface IUseTransaction {
  transactions: IHomeProps[];
  newTransction: (transaction: any) => void;
}

export const useTransaction = create<IUseTransaction>()((set) => ({
  transactions: [],
  newTransction: (transaction: IHomeProps) => {
    set((state) => ({ transactions: [...state.transactions, transaction] }));
  },
}));
