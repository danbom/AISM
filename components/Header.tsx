import Link from "next/link";
import {
  Grid,
  Card,
  Text,
  Button,
  Container,
  Tooltip,
} from "@nextui-org/react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <StyledGrid justify="center">
        <StyledContainer>
          <Grid xs alignItems="center">
            <StyledImg src="/static/image/AISM_logo_nodesc.png" alt="Logo" />
          </Grid>
          <Grid xs={7} justify="center">
            <Grid.Container gap={2} justify="center">
              <Grid>
                <Tooltip
                  placement="bottom"
                  trigger="hover"
                  hideArrow
                  content={
                    <Grid.Container gap={1}>
                      <Grid>
                        <StyledButton light color="primary" auto>
                          <StyledText size={13} weight="medium">
                            History
                          </StyledText>
                        </StyledButton>
                      </Grid>
                      <Grid>
                        <StyledButton light color="primary" auto>
                          <StyledText size={13} weight="medium">
                            Goal
                          </StyledText>
                        </StyledButton>
                      </Grid>
                      <Grid>
                        <StyledButton light color="primary" auto>
                          <StyledText size={13} weight="medium">
                            Props
                          </StyledText>
                        </StyledButton>
                      </Grid>
                    </Grid.Container>
                  }
                  css={{ zIndex: 9999 }}
                >
                  <StyledButton light color="primary" auto>
                    <StyledText size={15} weight="medium">
                      Introduce
                    </StyledText>
                  </StyledButton>
                </Tooltip>
              </Grid>
              <Grid>
                <Tooltip
                  placement="bottom"
                  trigger="hover"
                  hideArrow
                  content={
                    <Grid.Container gap={1}>
                      <Grid>
                        <StyledButton light color="primary" auto>
                          <StyledText size={13} weight="medium">
                            Performance Specialist
                          </StyledText>
                        </StyledButton>
                      </Grid>
                      <Grid>
                        <StyledButton light color="primary" auto>
                          <StyledText size={13} weight="medium">
                            Professional Course
                          </StyledText>
                        </StyledButton>
                      </Grid>
                    </Grid.Container>
                  }
                  css={{ zIndex: 9999 }}
                >
                  <StyledButton light color="primary" auto>
                    <StyledText size={15} weight="medium">
                      Program
                    </StyledText>
                  </StyledButton>
                </Tooltip>
              </Grid>
              <Grid>
                <Link href="/instructor">
                  <StyledButton light color="primary" auto>
                    <StyledText size={15} weight="medium">
                      Instructor
                    </StyledText>
                  </StyledButton>
                </Link>
              </Grid>
              <Grid>
                <Link href="/notice">
                  <StyledButton light color="primary" auto>
                    <StyledText size={15} weight="medium">
                      Notice
                    </StyledText>
                  </StyledButton>
                </Link>
              </Grid>
              <Grid>
                <Link href="/faq">
                  <StyledButton light color="primary" auto>
                    <StyledText size={15} weight="medium">
                      FAQ
                    </StyledText>
                  </StyledButton>
                </Link>
              </Grid>
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
  height: auto;
`;

const StyledText = styled(Text)`
  opacity: 0.8;
  font-weight: 500;
`;

const StyledButton = styled(Button)`
  &:hover {
    background-color: rgba(2, 32, 71, 0.05);
  }
`;
