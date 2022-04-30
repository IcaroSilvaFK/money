import type { NextPage } from "next";
import Head from "next/head";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";

import { Header } from "../components/Header";
import { Card } from "../components/Card";

import { Container, ContainerCards } from "../styles/Home.module";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title></title>
      </Head>
      <Header />
      <ContainerCards>
        <Card
          date='22/22/22222'
          money='R$ 30.443,50'
          title='Retiradas'
          type='whitdraw'
          timeIcon={<BsFillCalendarCheckFill />}
          typeTransactionIcon={<HiArrowSmDown size={25} />}
        />
        <Card
          date='22/22/22222'
          money='R$ 44.550,50'
          title='Entradas'
          type='entry'
          timeIcon={<BsFillCalendarCheckFill />}
          typeTransactionIcon={<HiArrowSmUp size={25} />}
        />
        <Card money='R$ 44.550,50' title='Resultado' type='entry' />
      </ContainerCards>
    </Container>
  );
};

export default Home;
