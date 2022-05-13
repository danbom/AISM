import type { NextPage } from "next";
import { Message } from "react-iconly";

import { PageTitle } from "../../components/PageTitle";

const faq: NextPage = () => {
  return (
    <PageTitle
      icon={
        <Message
          size={40}
          set="bold"
          primaryColor="#111111"
          style={{ paddingTop: "0.3rem" }}
        />
      }
      title={"FAQ"}
      sub={"많이 묻는 질문 및 답변"}
    />
  );
};

export default faq;
