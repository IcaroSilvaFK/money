import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";
import { HiTrash } from "react-icons/hi";

import { Container } from "./styles";
import { MoneyFormatter } from "../../util/moneyFormat";

interface IListItemProps {
  description: string;
  value: string;
  type: "whitdraw" | "entry";
  id: number;
}

export function ListItem({ description, type, value }: IListItemProps) {
  return (
    <Container>
      <strong className={type === "entry" ? "entry" : "whitdraw"}>
        {type === "entry" ? <HiArrowSmUp /> : <HiArrowSmDown />}
        {type === "entry" ? "Entrada" : "Saida"}
      </strong>
      <span>{description}</span>
      <div>
        <span className={type === "entry" ? "entry" : "whitdraw"}>
          {MoneyFormatter(value)}
        </span>
        <button>
          <HiTrash />
        </button>
      </div>
    </Container>
  );
}
