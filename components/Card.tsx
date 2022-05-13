import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import styled from "styled-components";

export const CardComponent = ({
  category,
  title,
  image,
  tags,
}: {
  category: string;
  title: string;
  image: string;
  tags: Array<string>;
}) => (
  <Card cover css={{ w: "100%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Badge>
          <Text size={13}>{category}</Text>
        </Badge>

        <Text h4>{title}</Text>
      </Col>
    </Card.Header>
    <Card.Body>
      <Card.Image src={image} height={400} width="100%" alt="" />
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
        {tags.map((tag, index) => (
          <Text
            key={index}
            color="#000"
            size={12}
            css={{ paddingRight: "1rem" }}
          >
            # {tag}
          </Text>
        ))}
      </Row>
    </Card.Footer>
  </Card>
);

const Badge = styled.div`
  width: fit-content;
  padding: 0.2rem 0.8rem;
  border-radius: 13px;
  background-color: #eee;
  opacity: 0.8;
`;
