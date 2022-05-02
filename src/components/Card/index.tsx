import { ReactNode } from "react";

import { MoneyFormatter } from "../../util/moneyFormat";

import { Container, Header, Body } from "./style";

interface IcardsProps {
  title: string;
  typeTransactionIcon?: ReactNode;
  money: number;
  type: "whitdraw" | "entry";
  typeCard: "whitdraw" | "entry" | "result";
}

export function Card({
  money,
  title,
  typeTransactionIcon,
  type,
  typeCard,
}: IcardsProps) {
  return (
    <Container>
      <Header
        typeTransaction={typeCard}
        className={money > 0 ? "positive" : "negative"}
      >
        <strong>{title}</strong>
      </Header>
      <Body typeTransaction={typeCard}>
        {typeTransactionIcon}
        <span className={money > 0 ? "positive" : "negative"}>
          {MoneyFormatter(money)}
        </span>
      </Body>
    </Container>
  );
}
