import { ReactNode } from "react";

import { Container, Header, Body, Footer } from "./style";

interface IcardsProps {
  title: string;
  typeTransactionIcon?: ReactNode;
  money: string;
  date?: string;
  timeIcon?: ReactNode;
  type: "whitdraw" | "entry";
}

export function Card({
  date,
  money,
  timeIcon,
  title,
  typeTransactionIcon,
  type,
}: IcardsProps) {
  return (
    <Container>
      <Header typeTransaction={type}>
        <strong>{title}</strong>
      </Header>
      <Body typeTransaction={type}>
        {typeTransactionIcon}
        <span>{money}</span>
      </Body>
      <Footer>
        {timeIcon}
        <span>{date}</span>
      </Footer>
    </Container>
  );
}
