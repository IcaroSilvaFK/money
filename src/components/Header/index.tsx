import { useRouter } from "next/router";

import { FaMoneyCheckAlt } from "react-icons/fa";

import { Buttons } from "../Buttons";

import { Container } from "./styles";

export function Header() {
  const router = useRouter();
  return (
    <Container>
      <div>
        <FaMoneyCheckAlt size={25} />
        <h2>Lorem ipsum</h2>
      </div>
      <div className="container__button">
        <Buttons
          text="Nova transação"
          style="Primary"
          onClick={() => router.push("/newTransaction")}
        />
      </div>
    </Container>
  );
}
