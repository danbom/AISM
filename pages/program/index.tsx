import type { NextPage } from "next";
import { Paper } from "react-iconly";

import { PageTitle } from "../../components/PageTitle";

const program: NextPage = () => {
  return (
    <PageTitle
      icon={
        <Paper
          size={40}
          set="bold"
          primaryColor="#111111"
          style={{ paddingTop: "0.3rem" }}
        />
      }
      title={"Program"}
      sub={"AISM 교육 프로그램"}
    />
  );
};

export default program;
