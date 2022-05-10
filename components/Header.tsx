// import Link from "next/link";
import { Link, Image, Grid, Card, Text, Button } from "@nextui-org/react";
// import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs justify="center" alignItems="center">
          {/* <Image
            showSkeleton
            width={93.1}
            height={35}
            maxDelay={10000}
            src="/static/image/AISM_logo_nodesc.png"
            alt="Logo"
          /> */}
          <Text weight="bold">AISM</Text>
        </Grid>
        <Grid xs={7} justify="center">
          <Grid.Container justify="center">
            <Grid>
              <Link block color="primary" href="/introduce">
                소개
              </Link>
            </Grid>
            <Grid>
              <Link block color="primary" href="/program">
                교육 프로그램
              </Link>
            </Grid>
            <Grid>
              <Link block color="primary" href="/instructor">
                강사진
              </Link>
            </Grid>
            <Grid>
              <Link block color="primary" href="notice">
                공지사항
              </Link>
            </Grid>
            <Grid>
              <Link block color="primary" href="faq">
                FAQ
              </Link>
            </Grid>
          </Grid.Container>
        </Grid>
        <Grid xs />
      </Grid.Container>
    </>
  );
};

export default Header;
