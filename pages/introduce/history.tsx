import type { NextPage } from "next";
import { Bookmark } from "react-iconly";

import { PageTitle } from "../../components/PageTitle";

const history: NextPage = () => {
  return (
    <PageTitle
      icon={
        <Bookmark
          size={40}
          set="bold"
          primaryColor="#111111"
          style={{ paddingTop: "0.3rem" }}
        />
      }
      title={"History"}
      sub={"AISM 연혁 소개"}
    />
  );
};

export default history;
