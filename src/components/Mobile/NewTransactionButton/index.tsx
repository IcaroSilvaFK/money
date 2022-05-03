import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";

import { Container } from "./styles";

export function NewTrasactionButton() {
  const router = useRouter();

  return (
    <Container onClick={() => router.push("/newTransaction")}>
      <AiOutlinePlus size={15} />
    </Container>
  );
}
