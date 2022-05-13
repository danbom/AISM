import type { NextPage } from "next";
import { Heart } from "react-iconly";

import { PageTitle } from "../../components/PageTitle";

const performancespecialist: NextPage = () => {
  return (
    <PageTitle
      icon={
        <Heart
          size={40}
          set="bold"
          primaryColor="#111111"
          style={{ paddingTop: "0.3rem" }}
        />
      }
      title={"Performance Specialist"}
      sub={"퍼포먼스 스페셜리스트"}
    />
  );
};

export default performancespecialist;
