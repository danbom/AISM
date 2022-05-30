import styled from "styled-components";

import Section from "../Section";
import Title from "../Title";

const Section2 = () => {
  return (
    <S2>
      <div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-delay="100"
          className="title"
        >
          <Title>전문가 코스 ⛳</Title>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-delay="150"
          className="subtitle"
        >
          아무것도 몰라도 따라오다 보면 전문가가 될 수 있습니다!
        </div>
      </div>
      <div className="courses">
        <Course>
          <img src="/static/image/program/4.png" />
          <div className="title">골프 전문가 과정</div>
        </Course>
        <Course>
          <img src="/static/image/program/5.png" />
          <div className="title">필라테스 전문가 과정</div>
        </Course>
        <Course>
          <img src="/static/image/program/6.png" />
          <div className="title">체형 분석 전문가 과정</div>
        </Course>
      </div>
    </S2>
  );
};

export default Section2;

const S2 = styled(Section)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 960px) {
  }

  .title {
    font-family: "Nanum Square EB";
    font-size: 1.1rem;
    letter-spacing: -1.2px;
  }

  .subtitle {
    font-family: "Nanum Square R";
    font-size: 1rem;
    letter-spacing: -1.2px;
    margin-top: -1.5rem;
    margin-bottom: 1rem;
  }

  .courses {
    display: flex;
  }
`;

const Course = styled.div`
  .time {
    font-family: "Nanum Square R";
    font-size: 1rem;
    letter-spacing: -1px;
  }

  img {
    border-radius: 10px;
    margin-bottom: 0.5rem;
  }

  & + & {
    margin-left: 1rem;
  }
`;
