import TypeIt from "typeit-react";
import styled from "styled-components";

import Section from "../Section";

const Section1 = () => {
  return (
    <S1>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
        className="title"
      >
        아래와 같은 고민을 가지고 있다면 AISM으로 시작하세요!
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
        className="typeit"
      >
        <TypeIt
          options={{ loop: true }}
          getBeforeInit={(instance: any) => {
            instance
              .type("최고의 체형 분석 전문가가 되고 싶어요.")
              .pause(1200)
              .delete()
              .pause(200)
              .type("Performance Specialist가 되고 싶어요.")
              .pause(1200);
            return instance;
          }}
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
        className="tags"
      >
        <Tag className="tag"># 물리 치료 기법</Tag>
        <Tag className="tag"># 팝 필라테스</Tag>
        <Tag className="tag"># 마사지</Tag>
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
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.8rem;
    letter-spacing: -1.6px;
    margin-bottom: 1rem;

    @media screen and (max-width: 479px) {
      font-size: 1.3rem;
      line-height: 1.6rem;
    }
  }

  .typeit {
    font-weight: 500;
    color: #2f3438ac;
    width: 30rem;
    border: 2px solid #696c6e;
    border-radius: 5px;
    padding: 0.5rem 0.8rem;
    font-size: 1.2rem;
    letter-spacing: -1px;
    margin: 0 0 1.2rem 0;

    @media screen and (max-width: 479px) {
      width: 100%;
      padding: 0.3rem 0.5rem;
      font-size: 1rem;
      margin: 0 0 1rem 0;
    }
  }

  .tags {
    display: flex;
  }
`;

const Tag = styled.div`
  background-color: #f1f3f5;
  border-radius: 20px;
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 300;

  @media screen and (max-width: 479px) {
    font-size: 0.6rem;
    padding: 0.3rem 0.7rem;
  }

  & + & {
    margin-left: 0.4rem;

    @media screen and (max-width: 479px) {
      margin-left: 0.3rem;
    }
  }
`;
