import type { NextPage } from "next";

import Section1 from "../../components/program/Section1";
import Section2 from "../../components/program/Section2";
import Section3 from "../../components/program/Section3";

const program: NextPage = () => {
  return (
    <>
      {/* <Section3 /> */}
      <Section1 />
      <Section2 />
    </>
  );
};

export default program;
