import type { NextPage } from "next";
import { Work } from "react-iconly";

import { PageTitle } from "../../components/PageTitle";

const introduce: NextPage = () => {
  return (
    <PageTitle
      icon={
        <Work
          size={40}
          set="bold"
          primaryColor="#111111"
          style={{ paddingTop: "0.3rem" }}
        />
      }
      title={"Introduce"}
      sub={"AISM 소개"}
    />
  );
};

export default introduce;
