import { Card, Text } from "@nextui-org/react";
import styled from "styled-components";

export const CardComponent = () => (
  <Card cover css={{ w: "100%" }}>
    <Card.Header
      css={{
        position: "absolute",
        zIndex: 1,
        top: 5,
      }}
    >
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          New
        </Text>
        <Text h3 color="white">
          News
        </Text>
      </Col>
    </Card.Header>
    <Card.Body>
      <Card.Image
        src="https://nextui.org/images/card-example-6.jpeg"
        height={400}
        width="100%"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      blur
      css={{
        position: "absolute",
        bgBlur: "#ffffff",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <StyledDiv>
          <Col>
            <Text color="#000" size={12}>
              Available soon.
            </Text>
            <Text color="#000" size={12}>
              Get notified.
            </Text>
          </Col>
          {/* <Col>
            <Row>
              <Button flat auto rounded color="secondary">
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Notify Me
                </Text>
              </Button>
            </Row>
          </Col> */}
        </StyledDiv>
      </Row>
    </Card.Footer>
  </Card>
);

const Col = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
`;

const StyledDiv = styled.div`
  width: 100%;
  display: space-between;
`;
