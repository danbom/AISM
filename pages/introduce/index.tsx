import type { NextPage } from "next";
import TypeIt from "typeit-react";
import styled from "styled-components";

import Section1 from "../../components/introduce/Section1";
import Section2 from "../../components/introduce/Section2";
import Section3 from "../../components/introduce/Section3";
import Section4 from "../../components/introduce/Section4";

const introduce: NextPage = () => {
  return (
    <>
      <Section1 />
      {/* <Section2 />
      <Section3 /> */}
      <Section4 />
    </>
  );
};

export default introduce;
