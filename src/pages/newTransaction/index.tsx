import type { NextPage } from "next";

import { Modal } from "../../components/Modal";

import { Container } from "../../styles/NewTransaction.module";

const newTransaction: NextPage = () => {
  return (
    <Container>
      <Modal />
    </Container>
  );
};

export default newTransaction;
