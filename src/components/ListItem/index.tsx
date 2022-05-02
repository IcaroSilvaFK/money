import { useRouter } from "next/router";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";
import { HiTrash } from "react-icons/hi";

import { Container } from "./styles";
import { MoneyFormatter } from "../../util/moneyFormat";

interface IListItemProps {
  title: string;
  value: string;
  type: "whitdraw" | "entry";
  id: number;
}

export function ListItem({ title, type, value, id }: IListItemProps) {
  const router = useRouter();

  return (
    <Container>
      <strong className={type === "entry" ? "entry" : "whitdraw"}>
        {type === "entry" ? <HiArrowSmUp /> : <HiArrowSmDown />}
        {type === "entry" ? "Entrada" : "Saida"}
      </strong>
      <span>{title}</span>
      <div>
        <span className={type === "entry" ? "entry" : "whitdraw"}>
          {MoneyFormatter(Number(value))}
        </span>
        <button
          onClick={() => router.push(`/transaction/${id}`)}
          className={type === "entry" ? "entry" : "whitdraw"}
        >
          <HiTrash />
        </button>
      </div>
    </Container>
  );
}
