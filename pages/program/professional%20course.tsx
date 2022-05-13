import type { NextPage } from "next";
import { Graph } from "react-iconly";

import { PageTitle } from "../../components/PageTitle";

const professionalcourse: NextPage = () => {
  return (
    <PageTitle
      icon={
        <Graph
          size={40}
          set="bold"
          primaryColor="#111111"
          style={{ paddingTop: "0.3rem" }}
        />
      }
      title={"Professional Course"}
      sub={"전문가 코스"}
    />
  );
};

export default professionalcourse;
