import type { NextPage } from "next";
import Head from "next/head";

import { Buttons } from "../components/Buttons";

import { Container } from "../styles/Home.module";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title></title>
      </Head>
      <Buttons style='Primary' text='Primary' />
      <Buttons style='Secondary' text='Secondary' />
      <Buttons style='Therdiary' text='Therdiary' />
      <Buttons style='Outline' text='Outline' />
    </Container>
  );
};

export default Home;
