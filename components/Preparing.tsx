import Link from "next/link";
import styled from "styled-components";

const Preparing = () => {
  return (
    <PreparingContainer>
      <div className="title">
        <i className="ri-error-warning-line"></i>
        <span>Preparing</span>
      </div>
      <p>
        아직 준비 중인 페이지입니다.
        <br />
        아래 링크를 클릭해 소개 페이지로 돌아갈 수 있습니다.
      </p>
      <Link href="/introduce">소개 페이지로 돌아가기</Link>
      <img src="/static/image/icon/stop.png" />
    </PreparingContainer>
  );
};

export default Preparing;

const PreparingContainer = styled.div`
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(69, 79, 93);
  text-align: center;

  .title {
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    font-weight: 700;

    @media screen and (max-width: 479px) {
      font-size: 2rem;
    }

    i {
      margin-bottom: -1.5rem;
      color: #ff5050;

      @media screen and (max-width: 479px) {
        margin-bottom: -0.5rem;
      }
    }
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 479px) {
      width: 60%;
    }
  }

  img {
    margin-top: 5rem;
    width: 11rem;

    @media screen and (max-width: 479px) {
      width: 8rem;
    }
  }
`;
