import Link from "next/link";
import styled from "styled-components";

import expertCourse from "../../data/expertCourse.json";

import Section from "../Section";

const Section2 = () => {
  return (
    <S2>
      <div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-delay="250"
          className="title"
        >
          <Title>
            전문가 코스
            <img src="/static/image/icon/flag-in-hole.png" />
          </Title>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-delay="300"
          className="subtitle"
        >
          아무것도 몰라도 따라오다 보면 전문가가 될 수 있습니다!
        </div>
      </div>
      <div
        className="courses"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        {expertCourse.map((course, index) => (
          <Link key={index} href={`program/expertCourse/${course.title}`}>
            <Course>
              <img src={`/static/image/program/${index + 4}.png`} />
              <div className="title">{course.title}</div>
            </Course>
          </Link>
        ))}
      </div>
    </S2>
  );
};

export default Section2;

const S2 = styled(Section)`
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
      margin-left: 0.5rem;
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
    font-size: 1rem;
    letter-spacing: -1px;

    @media screen and (max-width: 479px) {
      font-size: 0.8rem;
    }
  }

  img {
    border-radius: 10px;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 479px) {
      margin-bottom: 0;
    }
  }

  & + & {
    margin-left: 1rem;

    @media screen and (max-width: 479px) {
      margin-left: 0rem;
      margin-top: 1.5rem;
    }
  }
`;
