import styled from "styled-components";

import history from "../../data/history.json";

import Section from "../Section";
import Title from "../Title";

const Section4 = () => {
  return (
    <S4>
      <div className="container">
        <div>
          <Title>
            AISM은
            <br /> 건강 관리 교육의
            <br /> 새로운 역사를 쓰고 있습니다.
          </Title>
          <div>
            <div className="feature">
              <span className="highlight">특허 받은</span> 해부학 교구 수업
            </div>
            <div className="feature">
              <span className="highlight">미국 체형 분석 전문가들</span>의 선진
              교육
            </div>
            <div className="feature">
              <span className="highlight">온오프라인</span> 강의 병행
            </div>
          </div>
        </div>
        <div className="box">
          {history.map((h, index) => (
            <Element key={index}>
              <div className="date">{h.date}</div>
              <div className="circle" />
              <div className="content">{h.content}</div>
            </Element>
          ))}
        </div>
      </div>
    </S4>
  );
};

export default Section4;

const S4 = styled(Section)`
  height: 800px;
  align-items: center;
  background-color: #2f3438;
  color: #fff;

  .container {
    display: flex;
    flex-direction: row;
  }

  .feature {
    font-family: "Nanum Square B";
    letter-spacing: -1.6px;
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 1rem;

    .highlight {
      color: #3183ff;
    }
  }

  .box {
    padding: 2.6rem 3rem;
    /* background: #353353; */
    color: #fff;
    border-radius: 10px;
  }
`;

const Element = styled.div`
  display: flex;
  font-size: 0.9rem;
  align-items: center;
  & + & {
    margin-top: 1rem;
  }

  .date {
    font-family: "Nanum Square B";
    letter-spacing: -1px;
    margin-right: 1.5rem;
  }
  .circle {
    width: 0.5rem;
    height: 0.5rem;
    border: 2px solid #fff;
    border-radius: 50%;
    margin-right: 1rem;
  }
  .content {
    width: 22rem;
    font-family: "Nanum Square R";
  }
`;
