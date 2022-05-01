import { useEffect } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";

import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { ListItem } from "../components/ListItem";
import { MoneyFormatter } from "../util/moneyFormat";
import { useTransaction } from "../store/transaction.store";

import { Container, ContainerCards, Ul } from "../styles/Home.module";
import { api } from "../configs/axios";
import { AxiosResponse } from "axios";

interface IHomeProps {
  data: [
    {
      description: string;
      value: string;
      type: "whitdraw" | "entry";
      id: number;
    }
  ];
}

const Home = ({ data }: IHomeProps) => {
  const values = data.reduce(
    (acc, currentValue) => {
      if (currentValue.type === "entry") {
        acc.entry += +currentValue.value;
        acc.total += +currentValue.value;
      }
      if (currentValue.type === "whitdraw") {
        acc.whitdraw += +currentValue.value;
        acc.total -= +currentValue.value;
      }
      return acc;
    },
    {
      entry: 0,
      whitdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <Head>
        <title></title>
      </Head>
      <Header />
      <ContainerCards>
        <Card
          money={MoneyFormatter(String(values.whitdraw))}
          title="Retiradas"
          type="whitdraw"
          typeCard="whitdraw"
          typeTransactionIcon={<HiArrowSmDown size={25} />}
        />
        <Card
          money={MoneyFormatter(String(values.entry))}
          title="Entradas"
          type="entry"
          typeCard="entry"
          typeTransactionIcon={<HiArrowSmUp size={25} />}
        />
        <Card
          money={MoneyFormatter(String(values.total))}
          title="Resultado"
          type="entry"
          typeCard="result"
        />
      </ContainerCards>
      <Ul>
        {data.map((element) => (
          <ListItem
            description={element.description}
            type={element.type}
            value={element.value}
            key={element.id}
            id={element.id}
          />
        ))}
      </Ul>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await api.get("transactions");

  if (response.status === 200) {
    const { data }: AxiosResponse<IHomeProps[]> = response;

    return {
      props: { data },
    };
  }

  return {
    props: {},
  };
};

export default Home;
