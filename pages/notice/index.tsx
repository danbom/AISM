import type { NextPage } from "next";
import { Grid } from "@nextui-org/react";

import noticeData from "../../data/noticeData.json";
import { CardComponent } from "../../components/Card";
import { PageTitle } from "../../components/PageTitle";

const notice: NextPage = () => {
  return (
    <div>
      <PageTitle
        icon="loudspeaker"
        title={"공지사항"}
        sub={"사이트 및 교육 프로그램 관련 공지사항"}
      />
      <Grid.Container gap={2} justify="center" css={{ marginTop: "5rem" }}>
        {noticeData.map((data, index) => (
          <Grid key={index} xs={12} sm={4}>
            <CardComponent data={data} />
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default notice;
