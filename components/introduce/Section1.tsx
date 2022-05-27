import TypeIt from "typeit-react";
import styled from "styled-components";

import Section from "../Section";

const Section1 = () => {
  return (
    <S1>
      <div className="onair">ON-AIR</div>
      <div className="title">
        아래와 같은 고민을 가지고 있다면
        <br />
        AISM으로 시작하세요!
      </div>
      <div className="typeit">
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
      <div className="tags">
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
  background-color: #fff;
  height: 500px;

  @media screen and (max-width: 960px) {
  }

  .onair {
    font-family: "Nanum Square B";
    letter-spacing: -1.5px;
    background: #ff2c44;
    padding: 0.2rem 0.8rem;
    border-radius: 10px;
    color: #fff;
    margin-bottom: 1rem;
    box-shadow: 0 0 15px 3px rgb(255 76 96 / 40%);

    @media screen and (max-width: 960px) {
    }
  }

  .title {
    font-family: "Nanum Square EB";
    font-size: 1.9rem;
    letter-spacing: -1.6px;
    color: #2f3438;
    margin-bottom: 0.6rem;
  }

  .typeit {
    font-family: "Nanum Square B";
    width: 30rem;
    border: 2px solid #696c6e;
    border-radius: 5px;
    padding: 0.5rem 0.8rem;
    font-size: 1.3rem;
    letter-spacing: -1.6px;
    margin: 0 0.8rem 1.5rem 0;
    color: #2f3438ac;

    @media screen and (max-width: 960px) {
    }
  }

  .tags {
    display: flex;
  }
`;

const Tag = styled.div`
  font-size: 0.9rem;
  font-family: "Nanum Square B";

  & + & {
    margin-left: 0.6rem;
  }
`;
