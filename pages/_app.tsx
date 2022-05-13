import type { AppProps } from "next/app";
import Head from "next/head";
import { NextUIProvider, Container } from "@nextui-org/react";
import styled from "styled-components";

import Header from "../components/Header";

import "../styles/globals.css";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>aism</title>
      </Head>
      <main>
        <GlobalStyle />
        <NextUIProvider>
          <Header />
          <StyledContainer>
            <Component {...pageProps} />
          </StyledContainer>
        </NextUIProvider>
      </main>
    </>
  );
}

export default MyApp;

const StyledContainer = styled(Container)`
  padding-top: 3rem;
`;
