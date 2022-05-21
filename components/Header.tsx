import { useState, useEffect } from "react";
import Link from "next/link";
import { Grid, Container } from "@nextui-org/react";
// import {
//   Category,
//   Work,
//   People,
//   Paper,
//   InfoSquare,
//   Message,
//   CloseSquare,
// } from "react-iconly";
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
      <MenuText>Logo</MenuText>
    </Link>
  );

  const Menu = (title: string) => (
    <Link href={`/${title}`}>
      <MenuBtn>
        <MenuText>{title}</MenuText>
      </MenuBtn>
    </Link>
  );

  // const MenuWithSub = (title: string, subMenu: JSX.Element) => (
  //   <Tooltip
  //     content={subMenu}
  //     placement="bottom"
  //     trigger="hover"
  //     hideArrow
  //     css={{
  //       zIndex: 9999,
  //     }}
  //   >
  //     <Link href={`/${title}`}>
  //       <MenuBtn>
  //         <MenuText>{title}</MenuText>
  //       </MenuBtn>
  //     </Link>
  //   </Tooltip>
  // );

  // const SubMenu = (menu: string, arr: Array<string>) => (
  //   <div>
  //     {arr.map((title, index) => (
  //       <Link key={index} href={`/${menu}/${title}`}>
  //         <MenuBtn>
  //           <SubMenuText>{title}</SubMenuText>
  //         </MenuBtn>
  //       </Link>
  //     ))}
  //   </div>
  // );

  const ExpendedMenu = (/*(icon: JSX.Element, */ title: string) => (
    <Grid>
      <Link href={`/${title}`}>
        <ExpendedMenuBtn onClick={toggleExpended}>
          {/* {icon} */}
          <MenuText>{title}</MenuText>
        </ExpendedMenuBtn>
      </Link>
    </Grid>
  );

  const toggleExpended = () => {
    setExpended(!expended);
  };

  const detectScrollY = () => {
    setScrollY(window.pageYOffset);
  };

  return (
    <StyledHeader>
      <BigGrid justify="center" istop={(scrollY == 0).toString()}>
        <Container display="flex">
          <Grid xs alignItems="center">
            {Logo}
            {/* <StyledImg src="/static/image/AISM_logo_nodesc.png" alt="Logo" /> */}
          </Grid>
          <Grid xs={8} justify="center">
            <Grid.Container gap={2} justify="center">
              {/* {MenuWithSub(
                "introduce",
                SubMenu("introduce", ["history", "goal", "props"])
              )}
              {MenuWithSub(
                "program",
                SubMenu("program", [
                  "performance specialist",
                  "professional course",
                ])
              )} */}
              {Menu("introduce")}
              {Menu("program")}
              {Menu("instructor")}
              {Menu("notice")}
              {Menu("faq")}
            </Grid.Container>
          </Grid>
          <Grid xs />
        </Container>
      </BigGrid>
      <SmallGrid justify="center">
        <Container display="flex">
          <Grid xs />
          <Grid xs={7} justify="center" alignItems="center">
            {Logo}
          </Grid>
          <Grid xs justify="flex-end">
            <MenuBtn onClick={toggleExpended}>
              {/* {expended ? (
                <CloseSquare set="light" primaryColor="#212121" />
              ) : (
                <Category set="light" primaryColor="#212121" />
              )} */}
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
                "introduce"
              )}
              {ExpendedMenu(
                // <Paper set="light" primaryColor="#212121" />,
                "program"
              )}
              {ExpendedMenu(
                // <People set="light" primaryColor="#212121" />,
                "instructor"
              )}
              {ExpendedMenu(
                // <InfoSquare set="light" primaryColor="#212121" />,
                "notice"
              )}
              {ExpendedMenu(
                // <Message set="light" primaryColor="#212121" />,
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

const StyledHeader = styled.div`
  top: 0px;
  height: 84px;
  position: sticky;
  background: transparent;
  z-index: 100;
`;

interface IsTopProps {
  istop?: string;
}

const StyledGrid = styled(Grid)<IsTopProps>`
  /* background: hsla(0, 0%, 100%, 0.8); */
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: 0.3s ease;

  @media screen and (min-width: 960px) {
    backdrop-filter: ${(props) =>
      props.istop == "true" ? "none" : "blur(15px)"};
    box-shadow: rgb(2 1 1 / 10%) 0px 5px 20px -5px;
  }
`;

const BigGrid = styled(StyledGrid)<IsTopProps>`
  box-shadow: ${(props) =>
    props.istop == "true" ? "none" : "rgb(2 1 1 / 10%) 0px 5px 20px -5px"};

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const SmallGrid = styled(StyledGrid)`
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
    background-color: rgba(2, 32, 71, 0.05);
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

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover {
    background-color: rgba(2, 32, 71, 0.05);
  }
`;

const MenuText = styled.p`
  margin: 0;
  padding: 0;
  font-family: "Nanum Square EB";
  font-size: 1.1rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;

// const SubMenuText = styled(MenuText)`
//   font-family: "Nanum Square B";
//   font-size: 0.9rem;
// `;
