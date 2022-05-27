import styled from "styled-components";

import Section from "../Section";
import Title from "../Title";

const Section3 = () => {
  return (
    <S3>
      <Column>
        <Title>AISM은 어떤 길을 걸어왔을까요?</Title>
        <TimeLine>
          <div className="line" />
          <div className="row">
            <div className="year">2013</div>
            <div>
              <div className="row">
                <p className="month">09</p>
                <p className="event">AMTI 학회 설립</p>
              </div>
              <div className="row">
                <p className="month">11</p>
                <p className="event">
                  Assessment and Treatment of the Shoulder Complex 교육
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="year">2014</div>
            <div>
              <div className="row">
                <p className="month">11</p>
                <p className="event">
                  Spine Assessment & Joint Mobilization Techniques :
                  Chiropractic approach 교육
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="year">2016</div>
            <div>
              <div className="row">
                <p className="month">11</p>
                <p className="event">
                  Advanced Integrity Sports & Medicine(AISM)으로 학회 명칭 변경
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="year">2017</div>
            <div>
              <div className="row">
                <p className="month">04</p>
                <p className="event">
                  The Science & Demonstration of Myofascial Release Therapy
                  건양대학교 교육 및 서울 교육
                </p>
              </div>
              <div className="row">
                <p className="month">05</p>
                <p className="event">POP Pilates 교육</p>
              </div>
              <div className="row">
                <p className="month">06</p>
                <p className="event">Chiro Practic 교육</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="year">2018</div>
            <div>
              <div className="row">
                <p className="month">05</p>
                <p className="event">
                  The Science & Demonstration of Myofascial Release Therapy
                  가톨릭관동대학교 교육
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="year">2022</div>
            <div>
              <div className="row">
                <p className="month">09</p>
                <p className="event">Performance Specialist 교육 예정</p>
              </div>
            </div>
          </div>
        </TimeLine>
      </Column>
    </S3>
  );
};

export default Section3;

const S3 = styled(Section)`
  height: 800px;
  justify-content: flex-start;
  background: #fff;

  img {
    @media screen and (max-width: 960px) {
      position: absolute;
      width: 12rem;
    }
  }

  @media screen and (max-width: 960px) {
    padding: 8rem 2rem;
    height: 1800px;
  }

  @media screen and (min-width: 961px) and (max-width: 1669px) {
    /* padding: 22rem 200px; */
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    font-family: "Nanum Square EB";
    font-size: 2.4rem;
    letter-spacing: -1.6px;
  }
`;

const TimeLine = styled.div`
  color: #353353;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    padding: 1.5rem;
  }

  p {
    font-family: "Nanum Square B";
    font-size: 1.1rem;
    letter-spacing: -0.4px;
    margin: 0;

    @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      font-size: 1rem;
    }
  }

  .row {
    display: flex;
    align-items: center;
    flex-direction: row;

    & + & {
      margin-top: 1rem;
    }

    @media screen and (max-width: 960px) {
      flex-direction: column;
    }
  }

  .year {
    font-family: "Nanum Square EB";
    font-size: 2rem;
    color: #35335321;
    letter-spacing: -2px;
    margin: 1.5rem 5rem 1.5rem 0;

    @media screen and (max-width: 960px) {
      margin: 1.5rem 0 1.5rem 0;
    }
  }

  .month {
    letter-spacing: -2px;
    margin: 0rem 2rem 0rem 0;
    color: #353353b5;
    @media screen and (max-width: 960px) {
    }
  }

  .event {
    font-family: "Nanum Square B";
    @media screen and (max-width: 960px) {
    }
  }
`;
