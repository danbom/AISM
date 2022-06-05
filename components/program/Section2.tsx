import Link from "next/link";
import styled from "styled-components";

import expertCourse from "../../data/expertCourse.json";

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

  @media screen and (max-width: 960px) {
  }

  .title {
    font-family: "Nanum Square EB";
    font-size: 1.1rem;
    letter-spacing: -1.2px;

    img {
      margin-left: 0.5rem;
      width: 1.4rem;
    }
  }

  .subtitle {
    font-family: "Nanum Square R";
    font-size: 0.9rem;
    letter-spacing: -1.2px;
    margin-top: -1.5rem;
    margin-bottom: 1rem;
  }

  .courses {
    display: flex;
  }
`;

const Course = styled.div`
  cursor: pointer;
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
