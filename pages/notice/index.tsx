import type { NextPage } from "next";
import { Text, Grid } from "@nextui-org/react";
import { Notification } from "react-iconly";

import { CardComponent } from "../../components/Card";

const notice: NextPage = () => {
  return (
    <div>
      <div
        style={
          {
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
          }
        }
      >
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

        <Text size={24}>가장 빠른 Logo 새소식 업데이트</Text>
      </div>
      <Grid.Container gap={2} justify="center">
        {Array.from(Array(9), (_, i) => (
          <Grid key={i} xs={12} sm={4}>
            <CardComponent />
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default notice;
