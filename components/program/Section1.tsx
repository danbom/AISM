import Link from "next/link";
import styled from "styled-components";

import performanceSpecialistCourse from "../../data/performanceSpecialistCourse.json";

import Section from "../Section";
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
          <Title>
            Performance Specialist 코스
            <img src="/static/image/icon/sparkles.png" />
          </Title>
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
      <div
        className="courses"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        {performanceSpecialistCourse.map((course, index) => (
          <Link
            key={index}
            href={`program/performanceSpecialistCourse/${course.title}`}
          >
            <Course>
              <img src={`/static/image/program/${index + 1}.png`} />
              <div className="title">{course.title}</div>
              <div className="time">{course.content}</div>
              <Star />
            </Course>
          </Link>
        ))}
      </div>
    </S1>
  );
};

export default Section1;

const S1 = styled(Section)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .title {
    font-family: "Nanum Square EB";
    font-size: 1.1rem;
    letter-spacing: -1.2px;

    @media screen and (max-width: 479px) {
      font-size: 1rem;
    }

    img {
      margin-left: 0.3rem;
      width: 1.4rem;

      @media screen and (max-width: 479px) {
        display: none;
      }
    }
  }

  .subtitle {
    font-family: "Nanum Square R";
    font-size: 0.9rem;
    letter-spacing: -1.2px;
    margin-top: -1.5rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 479px) {
      font-size: 0.8rem;
    }
  }

  .courses {
    display: flex;

    @media screen and (max-width: 479px) {
      flex-direction: column;
    }
  }
`;

const Title = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  font-family: "Nanum Square EB";
  letter-spacing: -1.6px;
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 479px) {
    font-size: 1.3rem;
    line-height: 1.6rem;
    word-break: keep-all;
  }
`;

const Course = styled.div`
  cursor: pointer;

  .time {
    font-family: "Nanum Square R";
    font-size: 0.9rem;
    letter-spacing: -1px;

    @media screen and (max-width: 479px) {
      font-size: 0.8rem;
    }
  }

  img {
    border-radius: 10px;
  }

  & + & {
    margin-left: 1rem;

    @media screen and (max-width: 479px) {
      margin-left: 0rem;
      margin-top: 1rem;
    }
  }
`;
