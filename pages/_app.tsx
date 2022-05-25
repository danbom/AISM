import type { AppProps } from "next/app";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import styled from "styled-components";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../components/Header";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  });

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

const StyledContainer = styled.div`
  margin-top: 65px;
`;
