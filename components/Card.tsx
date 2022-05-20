import { useState } from "react";
import { Card, Modal, Button } from "@nextui-org/react";
import styled from "styled-components";

// import palette from "../styles/palette";

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
      <NoticeCard cover onClick={handler}>
        <Card.Header className="card-header">
          <Badge category={data.category}>
            <img src="/static/image/icon/rocket.png" />
            {data.category}
          </Badge>
          {data.title}
        </Card.Header>
        <Card.Body>
          <Card.Image src={data.image} width="100%" alt="" />
        </Card.Body>
        <Card.Footer blur className="card-footer">
          {data.tag.map((tag, index) => (
            <div key={index}># {tag}</div>
          ))}
        </Card.Footer>
      </NoticeCard>
      <Modal
        width="600px"
        closeButton
        fullScreen
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <div>
          {data.title}
          {data.timestamp}
        </div>
        <div style={{ whiteSpace: "pre-line", padding: "0 8rem" }}>
          <div>
            <img
              style={{
                width: "700px",
                paddingBottom: "1rem",
              }}
              src={data.image}
            />
            {data.content}
            <div style={{ display: "flex" }}>
              {data.tag.map((tag, index) => (
                <div key={index}># {tag}</div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

const NoticeCard = styled(Card)`
  width: 100%;
  cursor: pointer;
  box-shadow: none;

  .card-header {
    position: absolute;
    z-index: 1;
    top: 1rem;
    left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.5rem;
    font-family: "Nanum Square EB";
  }

  .card-footer {
    position: absolute;
    bottom: 0;
    z-index: 1;
    font-size: 0.8rem;
    font-family: "Nanum Square R";

    div {
      padding-left: 0.4rem;
      bottom: 0.3rem;
    }
  }
`;

interface BadgeProps {
  category: string;
}

const Badge = styled.div<BadgeProps>`
  width: fit-content;
  display: flex;
  align-items: center;
  border-radius: 20px;
  font-size: 1rem;
  font-family: "Nanum Square B";
  color: #363636;
  /* box-shadow: 0 1px 8px 0
    ${(props) => (props.category == "사이트" ? " #c1343dbb" : "#3C4694bb")}; */

  img {
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 0.2rem;
  }
`;
