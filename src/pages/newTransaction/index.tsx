import { useEffect } from "react";
import type { NextPage } from "next";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";

import { Modal } from "../../components/Modal";

import { Container } from "../../styles/NewTransaction.module";

const NewTransaction: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const { token } = parseCookies();

    if (!token) {
      router.push("/");
    }
  }, []);

  return (
    <Container>
      <Modal />
    </Container>
  );
};

export default NewTransaction;
