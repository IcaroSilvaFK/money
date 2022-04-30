import { GlobalStyle } from "../styles/global";
import type { AppProps } from "next/app";

import { Modal } from "../components/Modal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Modal />
    </>
  );
}

export default MyApp;
