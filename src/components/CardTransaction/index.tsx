import { useRouter } from "next/router";
import { HiTrash } from "react-icons/hi";

import { MoneyFormatter } from "../../util/moneyFormat";

import { toast } from "react-toastify";
import { api } from "../../configs/axios";

import { Container, ContainerButtontrash } from "./styles";

interface ICardTransactionProps {
  description: string;
  id: number;
  type: "whitdraw" | "entry";
  value: number;
  title: string;
}

export function CardTransaction({
  description,
  id,
  type,
  value,
  title,
}: ICardTransactionProps) {
  const router = useRouter();

  async function deleteTransaction(id: number) {
    try {
      await api.delete(`transactions/${id}`);
      toast("transação deletada com sucesso", {
        position: "top-center",
        draggable: true,
        theme: "light",
      });
      router.push("/");
    } catch (e) {
      toast.error("Tivemos um problema por favor tente novamente", {
        position: "top-center",
        draggable: true,
        theme: "light",
      });
    }
  }

  return (
    <Container type={type}>
      <ContainerButtontrash onClick={() => deleteTransaction(id)}>
        <HiTrash size={20} />
      </ContainerButtontrash>
      <h1>{title}</h1>
      <h1>{description}</h1>
      <h2>{MoneyFormatter(value)}</h2>
    </Container>
  );
}
