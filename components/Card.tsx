import { useState } from "react";
import { Card, Row, Text, Modal, Button } from "@nextui-org/react";
import styled from "styled-components";

export const CardComponent = ({
  data,
}: {
  data: {
    id: number;
    category: string;
    title: string;
    timestamp: string;
    image: string;
    content: string;
    tag: string[];
  };
}) => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <>
      <Card cover css={{ w: "100%", cursor: "pointer" }} onClick={handler}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <div style={{ padding: "0.5rem 0.8rem" }}>
            <Badge category={data.category}>
              <Text size={13} color="white">
                {data.category}
              </Text>
            </Badge>
            <Text weight="semibold" size={22} css={{ marginTop: "0.4rem" }}>
              {data.title}
            </Text>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Image src={data.image} height={400} width="100%" alt="" />
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
            {data.tag.map((tag, index) => (
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
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header css={{ flexDirection: "column" }}>
          <Text id="modal-title" b size={19}>
            {data.title}
          </Text>
          <Text id="modal-title" size={14}>
            {data.timestamp}
          </Text>
        </Modal.Header>
        <Modal.Body css={{ whiteSpace: "pre-line" }}>{data.content}</Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

interface BadgeProps {
  category: string;
}

const Badge = styled.div<BadgeProps>`
  width: fit-content;
  padding: 0.2rem 0.8rem;
  border-radius: 15px;
  background-color: ${(props) =>
    props.category == "사이트" ? "#c1343ddd" : "#3C4694dd"};
  box-shadow: 0 1px 8px 0
    ${(props) => (props.category == "사이트" ? " #c1343dbb" : "#3C4694bb")};
`;
