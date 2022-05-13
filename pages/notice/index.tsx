import type { NextPage } from "next";
import { Text, Grid } from "@nextui-org/react";
import { Notification } from "react-iconly";

import noticeData from "../../data/noticeData.json";
import { CardComponent } from "../../components/Card";

const notice: NextPage = () => {
  return (
    <div>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Notification
            size={40}
            set="bold"
            primaryColor="#111111"
            style={{ paddingTop: "0.3rem" }}
          />
          <Text h1 size={42} css={{ paddingLeft: "0.5rem" }}>
            공지사항
          </Text>
        </div>

        <Text size={24}>사이트 및 교육 프로그램 관련 공지사항</Text>
      </div>
      <Grid.Container gap={2} justify="center">
        {noticeData.map((data, index) => (
          <Grid key={index} xs={12} sm={4}>
            <CardComponent
              category={data.category}
              title={data.title}
              image={data.image}
              tags={data.tag}
            />
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default notice;
