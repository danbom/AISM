import { useState } from "react";
import Link from "next/link";
import { Grid, Text, Container, Tooltip } from "@nextui-org/react";
import {
  Category,
  Work,
  People,
  Paper,
  InfoSquare,
  Message,
  CloseSquare,
} from "react-iconly";
import styled from "styled-components";

const Header = () => {
  const [expended, setExpended] = useState(false);

  const Logo = (
    <Link href="/">
      <StyledText size={15} weight="medium">
        Logo
      </StyledText>
    </Link>
  );

  const Menu = (title: string) => (
    <Grid>
      <Link href={`/${title}`}>
        <MenuBtn>
          <StyledText size={15} weight="medium">
            {title}
          </StyledText>
        </MenuBtn>
      </Link>
    </Grid>
  );

  const MenuWithSub = (title: string, subMenu: JSX.Element) => (
    <Grid>
      <Tooltip
        content={subMenu}
        placement="bottom"
        trigger="hover"
        hideArrow
        css={{ zIndex: 9999 }}
      >
        <Link href={`/${title}`}>
          <MenuBtn>
            <StyledText size={15} weight="medium">
              {title}
            </StyledText>
          </MenuBtn>
        </Link>
      </Tooltip>
    </Grid>
  );

  const SubMenu = (menu: string, arr: Array<string>) => (
    <Grid.Container gap={1}>
      {arr.map((title, index) => (
        <Grid key={index}>
          <Link href={`/${menu}/${title}`}>
            <MenuBtn>
              <StyledText size={13} weight="medium">
                {title}
              </StyledText>
            </MenuBtn>
          </Link>
        </Grid>
      ))}
    </Grid.Container>
  );

  const ExpendedMenu = (icon: JSX.Element, title: string) => (
    <Grid>
      <Link href={`/${title}`}>
        <ExpendedMenuBtn>
          {icon}
          <StyledText css={{ paddingLeft: "0.6rem" }} size={15} weight="medium">
            {title}
          </StyledText>
        </ExpendedMenuBtn>
      </Link>
    </Grid>
  );

  const toggleExpended = () => {
    setExpended(!expended);
  };

  return (
    <StyledHeader>
      <BigGrid justify="center">
        <Container display="flex">
          <Grid xs alignItems="center">
            {Logo}
            {/* <StyledImg src="/static/image/AISM_logo_nodesc.png" alt="Logo" /> */}
          </Grid>
          <Grid xs={7} justify="center">
            <Grid.Container gap={2} justify="center">
              {MenuWithSub(
                "introduce",
                SubMenu("introduce", ["history", "goal", "props"])
              )}
              {MenuWithSub(
                "program",
                SubMenu("program", [
                  "performance specialist",
                  "professional course",
                ])
              )}
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
              {expended ? (
                <CloseSquare set="light" primaryColor="#212121" />
              ) : (
                <Category set="light" primaryColor="#212121" />
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
                <Work set="light" primaryColor="#212121" />,
                "introduce"
              )}
              {ExpendedMenu(
                <Paper set="light" primaryColor="#212121" />,
                "program"
              )}
              {ExpendedMenu(
                <People set="light" primaryColor="#212121" />,
                "instructor"
              )}
              {ExpendedMenu(
                <InfoSquare set="light" primaryColor="#212121" />,
                "notice"
              )}
              {ExpendedMenu(
                <Message set="light" primaryColor="#212121" />,
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
  height: 76px;
  position: sticky;
  background: transparent;
  z-index: 100;
`;

const StyledGrid = styled(Grid)`
  background: hsla(0, 0%, 100%, 0.8);
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 960px) {
    backdrop-filter: saturate(180%) blur(10px);
    box-shadow: rgb(2 1 1 / 10%) 0px 5px 20px -5px;
  }
`;

const BigGrid = styled(StyledGrid)`
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const SmallGrid = styled(StyledGrid)`
  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const ExpendedGrid = styled(Grid)`
  background: hsla(0, 0%, 100%, 0.8);
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
  background: transparent;
  padding: 0.6rem 1rem;
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

const StyledText = styled(Text)`
  font-weight: 500;

  &::first-letter {
    text-transform: uppercase;
  }
`;
