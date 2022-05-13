import type { NextPage } from "next";
import { Location } from "react-iconly";

import { PageTitle } from "../../components/PageTitle";

const goal: NextPage = () => {
  return (
    <PageTitle
      icon={
        <Location
          size={40}
          set="bold"
          primaryColor="#111111"
          style={{ paddingTop: "0.3rem" }}
        />
      }
      title={"Goal"}
      sub={"추구하는 목표 소개"}
    />
  );
};

export default goal;
