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
  font-size: 1rem;

  @media screen and (max-width: 479px) {
    font-size: 0.8rem;
  }

  .stars {
    margin-right: 0.2rem;
    display: flex;
    align-items: center;

    @media screen and (max-width: 479px) {
      margin-right: 0.1rem;
    }
  }

  img {
    width: 1.2rem;

    @media screen and (max-width: 479px) {
      width: 1rem;
    }
  }
`;
