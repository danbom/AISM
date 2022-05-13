import type { NextPage } from "next";
import { Star } from "react-iconly";

import { PageTitle } from "../../components/PageTitle";

const props: NextPage = () => {
  return (
    <PageTitle
      icon={
        <Star
          size={40}
          set="bold"
          primaryColor="#111111"
          style={{ paddingTop: "0.3rem" }}
        />
      }
      title={"Props"}
      sub={"특장점 소개"}
    />
  );
};

export default props;
