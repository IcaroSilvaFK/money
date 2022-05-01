import { ReactNode } from "react";

import { Container, Header, Body } from "./style";

interface IcardsProps {
  title: string;
  typeTransactionIcon?: ReactNode;
  money: string;
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
      <Header typeTransaction={type}>
        <strong>{title}</strong>
      </Header>
      <Body typeTransaction={typeCard}>
        {typeTransactionIcon}
        <span className={Number(money) > 0 ? "postive" : "negative"}>
          {money}
        </span>
      </Body>
    </Container>
  );
}
