import type { NextPage } from "next";
import { People } from "react-iconly";

import { PageTitle } from "../../components/PageTitle";

const instructor: NextPage = () => {
  return (
    <PageTitle
      icon={
        <People
          size={40}
          set="bold"
          primaryColor="#111111"
          style={{ paddingTop: "0.3rem" }}
        />
      }
      title={"Instructor"}
      sub={"AISM 강사진 소개"}
    />
  );
};

export default instructor;
