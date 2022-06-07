import { useState, useEffect } from "react";
import Link from "next/link";
import { Grid, Container } from "@nextui-org/react";
import styled from "styled-components";

const Header = () => {
  const [expended, setExpended] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", detectScrollY);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", detectScrollY);
    }; //  window 에서 스크롤을 감시를 종료
  });

  const Logo = (
    <Link href="/">
      <LogoImage></LogoImage>
    </Link>
  );

  const Menu = (title: string, href: string) => (
    <Link href={`/${href}`}>
      <MenuBtn>
        <MenuText>{title}</MenuText>
      </MenuBtn>
    </Link>
  );

  const ExpendedMenu = (
    /*(icon: JSX.Element, */ title: string,
    link: string
  ) => (
    <div>
      <Link href={`/${link}`}>
        <ExpendedMenuBtn onClick={toggleExpended}>
          {/* {icon} */}
          <MenuText>{title}</MenuText>
        </ExpendedMenuBtn>
      </Link>
    </div>
  );

  const toggleExpended = () => {
    setExpended(!expended);
  };

  const detectScrollY = () => {
    setScrollY(window.pageYOffset);
  };

  return (
    <StyledHeader>
      <BigGrid istop={(scrollY == 0).toString()}>
        <Container display="flex">
          <Grid xs alignItems="center">
            {Logo}
            {/* <StyledImg src="/static/image/AISM_logo_nodesc.png" alt="Logo" /> */}
          </Grid>
          <Grid xs={10} justify="center">
            <Grid.Container gap={2} justify="center">
              {Menu("소개", "introduce")}
              {Menu("교육 프로그램", "program")}
              {Menu("강사진", "instructor")}
              {Menu("공지사항", "notice")}
              {Menu("자주 묻는 질문", "faq")}
            </Grid.Container>
          </Grid>
          <Grid xs />
        </Container>
      </BigGrid>
      <SmallGrid istop={(scrollY == 0).toString()}>
        <Container display="flex">
          <Grid xs />
          <Grid xs={7} justify="center" alignItems="center">
            {Logo}
          </Grid>
          <Grid xs justify="flex-end">
            <MenuBtn onClick={toggleExpended}>
              {expended ? (
                <div className="icon">×</div>
              ) : (
                <div className="icon">≡</div>
              )}
            </MenuBtn>
          </Grid>
        </Container>
      </SmallGrid>
      {expended && (
        <ExpendedGrid>
          <Container>
            <Grid.Container direction="column" gap={1}>
              {ExpendedMenu(
                // <Work set="light" primaryColor="#212121" />,
                "소개",
                "introduce"
              )}
              {ExpendedMenu(
                // <Paper set="light" primaryColor="#212121" />,
                "교육 프로그램",
                "program"
              )}
              {ExpendedMenu(
                // <People set="light" primaryColor="#212121" />,
                "강사진",
                "instructor"
              )}
              {ExpendedMenu(
                // <InfoSquare set="light" primaryColor="#212121" />,
                "공지사항",
                "notice"
              )}
              {ExpendedMenu(
                // <Message set="light" primaryColor="#212121" />,
                "자주 묻는 질문",
                "faq"
              )}
            </Grid.Container>
          </Container>
        </ExpendedGrid>
      )}
    </StyledHeader>
  );
};

export default Header;

const LogoImage = styled.div``;

const StyledHeader = styled.div`
  top: 0;
  width: 100%;
  height: 65px;
  position: fixed;
  background: transparent;
  z-index: 100;
`;

interface IsTopProps {
  istop?: string;
}

const StyledGrid = styled.div<IsTopProps>`
  background: hsla(0, 0%, 100%, 0.8);
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: 0.1s ease;

  @media screen and (max-width: 960px) {
    background: transparent;
  }

  @media screen and (min-width: 960px) {
    backdrop-filter: ${(props) =>
      props.istop == "true" ? "none" : "blur(15px)"};
    box-shadow: rgb(2 1 1 / 10%) 0px 5px 20px -5px;
  }
`;

const BigGrid = styled(StyledGrid)<IsTopProps>`
  padding: 0 6rem;
  box-shadow: ${(props) =>
    props.istop == "true" ? "none" : "rgb(2 1 1 / 10%) 0px 5px 20px -5px"};

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const SmallGrid = styled(StyledGrid)<IsTopProps>`
  background: hsla(0, 0%, 100%, 0.95);
  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const ExpendedGrid = styled(Grid)`
  background: hsla(0, 0%, 100%, 0.95);
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const MenuBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.8rem;
  margin: 0 0.8rem;
  background: transparent;
  min-width: min-content;
  border-radius: 14px;
  outline: none;
  border: none;
  transition: 0.2s ease;
  cursor: pointer;

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover {
    background-color: rgba(2, 32, 71, 0.1);

    @media screen and (max-width: 479px) {
      background-color: transparent;
    }
  }

  .icon {
    font-size: 2rem;
  }
`;

const ExpendedMenuBtn = styled(MenuBtn)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  padding: 1rem;
  min-width: 100%;
  border-radius: 14px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(2, 32, 71, 0.05);
  }
`;

const MenuText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 1rem;
`;
