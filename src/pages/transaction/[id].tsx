import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";

import { api } from "../../configs/axios";
import { CardTransaction } from "../../components/CardTransaction";

import { Container } from "../../styles/Transaction.module";

interface ITransactionProps {
  data: {
    description: string;
    id: number;
    type: "whitdraw" | "entry";
    value: number;
    title: string;
  };
}

const Transaction: NextPage<ITransactionProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Transaction</title>
      </Head>
      <Container>
        <CardTransaction
          title={data.title}
          description={data.description}
          id={data.id}
          type={data.type}
          value={data.value}
        />
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const {
    query: { id },
  } = ctx;
  try {
    const { data } = await api.get(`transactions/${id}`);

    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default Transaction;
