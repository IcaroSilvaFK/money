import { useRouter } from "next/router";
import { HiTrash } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { MoneyFormatter } from "../../util/moneyFormat";

import { toast } from "react-toastify";
import { api } from "../../configs/axios";

import {
  Container,
  ContainerButtontrash,
  Header,
  Body,
  ButtonDelete,
  Separator,
} from "./styles";

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
      <button className="return" onClick={() => router.push("/")}>
        <AiOutlineClose size={15} />
      </button>
      <Header>
        <label htmlFor="">Titulo da transação :</label>
        <strong>{title}</strong>
      </Header>
      <Body>
        <label htmlFor="">Descrição da Transação :</label>
        <p>{description}</p>
      </Body>
      <ButtonDelete
        title="Apagar transação"
        onClick={() => deleteTransaction(id)}
        typeTransaction={type}
      >
        <span>{MoneyFormatter(value)}</span>
        <Separator />
        <ContainerButtontrash>
          <HiTrash size={15} />
        </ContainerButtontrash>
      </ButtonDelete>
    </Container>
  );
}
