import type { AppProps } from "next/app";
import Head from "next/head";
import { NextUIProvider, Container } from "@nextui-org/react";
import styled from "styled-components";

import Header from "../components/Header";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>aism</title>
      </Head>
      <main>
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
  padding: 8rem 10rem;
  font-family: "Nanum Square B";

  @media screen and (max-width: 960px) {
    padding: 4rem 1rem;
  }
`;
