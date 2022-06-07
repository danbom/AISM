import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import styled from "styled-components";
import AOS from "aos";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/globals.css";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <title>aism</title>
      </Head>
      <main>
        <NextUIProvider>
          <Header />
          <StyledContainer>
            <Component {...pageProps} />
          </StyledContainer>
          <Footer />
        </NextUIProvider>
      </main>
    </>
  );
}

export default MyApp;

const StyledContainer = styled.div`
  margin-top: 65px;
`;
