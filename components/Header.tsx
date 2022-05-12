import Link from "next/link";
import { Grid, Text, Container, Tooltip } from "@nextui-org/react";
import styled from "styled-components";
import { ReactNode } from "react";

const Header = () => {
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
        placement="bottom"
        trigger="hover"
        hideArrow
        content={subMenu}
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

  return (
    <StyledHeader>
      <StyledGrid justify="center">
        <StyledContainer>
          <Grid xs alignItems="center">
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
        </StyledContainer>
      </StyledGrid>
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

const MenuBtn = styled.button`
  background: transparent;
  padding: 0.6rem 1rem;
  min-width: min-content;
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

const StyledGrid = styled(Grid)`
  backdrop-filter: saturate(180%) blur(10px);
  box-shadow: rgb(2 1 1 / 10%) 0px 5px 20px -5px;
  background: hsla(0, 0%, 100%, 0.8);
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledContainer = styled(Container)`
  display: flex;
`;

const StyledImg = styled.img`
  width: 5rem;
`;

const StyledText = styled(Text)`
  opacity: 0.8;
  font-weight: 500;

  &::first-letter {
    text-transform: uppercase;
  }
`;
