import type { NextPage } from "next";
import { Grid } from "@nextui-org/react";

import noticeData from "../../data/noticeData.json";

import { CardComponent } from "../../components/Card";

const notice: NextPage = () => {
  return (
    <div>
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
