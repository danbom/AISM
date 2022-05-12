import type { NextPage } from "next";
import { Text, Button, Grid } from "@nextui-org/react";
import styled from "styled-components";

import { CardComponent } from "../components/Card";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Text h2>AISM Side Type ABCD</Text>
        <Text>New</Text>
        <Text>입문자과정</Text>
        <Text>체형분석운동지도자 입문자과정 3기 (1월 26일 13시 13분 OPEN)</Text>
        <Text>신청기간 2022-01-26 ~ 2022-01-31</Text>
        <Text>학습기간 2022-02-07 ~ 2022-08-15</Text>
        <Text>정원 100명</Text>
        <Button shadow color="primary" auto>
          ABCD type
        </Button>
      </div>
      <div>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4}>
            <CardComponent />
          </Grid>
          <Grid xs={12} sm={4}>
            <CardComponent />
          </Grid>
          <Grid xs={12} sm={4}>
            <CardComponent />
          </Grid>
          <Grid xs={12} sm={5}>
            <CardComponent />
          </Grid>
          <Grid xs={12} sm={7}>
            <CardComponent />
          </Grid>
        </Grid.Container>
      </div>
    </>
  );
};

export default Home;

const StyledText = styled(Text)``;
