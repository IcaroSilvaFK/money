import { FaMoneyCheckAlt } from "react-icons/fa";

import { Buttons } from "../Buttons";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div>
        <FaMoneyCheckAlt size={25} />
        <h2>Lorem ipsum</h2>
      </div>
      <div>
        <Buttons text='Nova transação' style='Primary' />
      </div>
    </Container>
  );
}
