import styled from "styled-components";

import Section from "../Section";
import Title from "../Title";
import Star from "../../components/Star";

const Section1 = () => {
  return (
    <S1>
      <div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-delay="100"
          className="title"
        >
          <Title>Performance Specialist 코스 ✨</Title>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-delay="150"
          className="subtitle"
        >
          체형 분석 전문가를 양성하는 과정으로 미국의 선진화된 프로그램과 국내의
          우수한 교수진으로 여러분들을 최고의 체형 분석 전문가로 거듭나게 할
          것입니다!
        </div>
      </div>
      <div className="courses">
        <Course>
          <img src="/static/image/program/1.png" />
          <div className="title">Basic Course</div>
          <div className="time">180시간 12주 교육</div>
          <Star />
        </Course>
        <Course>
          <img src="/static/image/program/2.png" />
          <div className="title">Intermediate Course</div>
          <div className="time">180시간 12주 교육</div>
          <Star />
        </Course>
        <Course>
          <img src="/static/image/program/3.png" />
          <div className="title">Advanced Course</div>
          <div className="time">180시간 12주 교육</div>
          <Star />
        </Course>
      </div>
    </S1>
  );
};

export default Section1;

const S1 = styled(Section)`
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
  }

  & + & {
    margin-left: 1rem;
  }
`;
