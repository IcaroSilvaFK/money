import { GetServerSideProps } from "next";
import { AxiosResponse } from "axios";
import { parseCookies } from "nookies";

import Head from "next/head";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { ListItem } from "../../components/ListItem";
import { NewTrasactionButton } from "../../components/Mobile/NewTransactionButton";

import { Container, ContainerCards, Text, Ul } from "../../styles/Home.module";
import { api } from "../../configs/axios";

interface IHomeProps {
  data: [
    {
      title: string;
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
        <title>Seila</title>
      </Head>
      <Header />
      <ContainerCards>
        <Card
          money={values.whitdraw}
          title="Retiradas"
          type="whitdraw"
          typeCard="whitdraw"
          typeTransactionIcon={<HiArrowSmDown size={25} />}
        />
        <Card
          money={values.entry}
          title="Entradas"
          type="entry"
          typeCard="entry"
          typeTransactionIcon={<HiArrowSmUp size={25} />}
        />
        <Card
          money={values.total}
          title="Resumo"
          type="entry"
          typeCard="result"
        />
      </ContainerCards>
      <Text>Transações Efetuadas :</Text>
      <Ul>
        {data.map((element) => (
          <ListItem
            title={element.title}
            type={element.type}
            value={element.value}
            key={element.id}
            id={element.id}
          />
        ))}
      </Ul>
      <NewTrasactionButton />
    </Container>
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

  try {
    const response = await api.get("transactions");

    const { data }: AxiosResponse<IHomeProps[]> = response;

    return {
      props: { data },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default Home;
