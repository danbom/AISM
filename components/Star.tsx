import styled from "styled-components";

const Star = () => {
  return (
    <StarContainer>
      <div className="stars">
        <img src="/static/image/icon/star.png" />
        <img src="/static/image/icon/star.png" />
        <img src="/static/image/icon/star.png" />
        <img src="/static/image/icon/star.png" />
        <img src="/static/image/icon/star.png" />
      </div>
      (0)
    </StarContainer>
  );
};

export default Star;

const StarContainer = styled.div`
  display: flex;
  align-items: center;

  .stars {
    margin-right: 0.2rem;
    display: flex;
    align-items: center;
  }

  img {
    width: 1.2rem;
  }
`;
