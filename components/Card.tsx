import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import styled from "styled-components";

export const CardComponent = () => (
  <Card cover css={{ w: "100%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Badge>
          <Text size={13}>교육</Text>
        </Badge>

        <Text h4>
          Logo 시즌 2
          <br />
          체형 분석 운동 지도자 과정 4기
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
        <Col>
          <Text color="#000" size={12}>
            #Logo
          </Text>
          <Text color="#000" size={12}>
            #체형분석운동 #지도자{" "}
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="primary">
              <Text
                css={{ color: "inherit" }}
                size={13}
                weight="bold"
                transform="uppercase"
              >
                자세히 보기
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

const Badge = styled.div`
  width: fit-content;
  padding: 0.3rem 1rem;
  border-radius: 13px;
  background-color: #eee;
  opacity: 0.8;
`;
