import type { NextPage } from "next";
import TypeIt from "typeit-react";
import styled from "styled-components";

// import { PageTitle } from "../../components/PageTitle";

const introduce: NextPage = () => {
  return (
    <>
      <Introduce_Container>
        <Section1>
          <div>
            <div className="onair">ON-AIR</div>
            <Title>
              아래와 같은 고민을 가지고 있다면
              <br />
              AISM으로 시작하세요!
            </Title>
            <Title>
              <div className="typeit">
                {/* <img src="/static/image/icon/person-running.png" /> */}
                <TypeIt
                  options={{ loop: true }}
                  getBeforeInit={(instance) => {
                    instance
                      .type("최고의 체형 분석 전문가가 되고 싶어요.")
                      .pause(1200)
                      .delete()
                      .pause(200)
                      .type("Performance Specialist가 되고 싶어요.")
                      .pause(1200);

                    // Remember to return it!
                    return instance;
                  }}
                />
              </div>
            </Title>
            <Tags>
              <Tag># 물리 치료 기법</Tag>
              <Tag># 팝 필라테스</Tag>
              <Tag># 마사지</Tag>
            </Tags>
          </div>
        </Section1>
        <Section2>
          <Title2>수강생들이 AISM을 선택하는 이유는?</Title2>
          <CardGroup>
            <Card
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="200"
              style={{
                background: "#264653",
                boxShadow: "rgb(38 70 83 / 50%) 0px 5px 20px 0px",
              }}
            >
              <div className="title">
                특허 받은
                <br />
                해부학 교구 수업
              </div>
              <img src="/static/image/icon/star.png" />
            </Card>
            <Card
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="200"
              style={{
                background: "#2a9d8f",
                boxShadow: "rgb(42 157 143 / 50%) 0px 5px 20px 0px",
              }}
            >
              <div className="title">
                미국 체형 분석
                <br /> 전문가들과 함께하는 강의
              </div>
              <img src="/static/image/icon/body.png" />
            </Card>
            <Card
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="200"
              style={{
                background: "#e9c46a",
                color: "#353353",
                boxShadow: "rgb(233 196 106 / 50%) 0px 5px 20px 0px",
              }}
            >
              <div className="title">선진 교육 프로그램</div>
              <img src="/static/image/icon/3845897.png" />
            </Card>
            <Card
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="300"
              style={{
                background: "#f4a261",
                color: "#353353",
                boxShadow: "rgb(244 162 97 / 50%) 0px 5px 20px 0px",
              }}
            >
              <div className="title">다양한 프로그램</div>
              <img src="/static/image/icon/3845752.png" />
            </Card>
            <Card
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="400"
              style={{
                background: "#e76f51",
                boxShadow: "rgb(231 111 81 / 50%) 0px 5px 20px 0px",
              }}
            >
              <div className="title">온오프라인 교육</div>
              <img src="/static/image/icon/3845878.png" />
            </Card>
          </CardGroup>
        </Section2>
        <Section3>
          {/* <img src="/static/image/icon/Illustration .svg" /> */}
          <Column>
            <Title3>AISM은 어떤 길을 걸어왔을까요?</Title3>
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
                      Advanced Integrity Sports & Medicine(AISM)으로 학회 명칭
                      변경
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
        </Section3>
      </Introduce_Container>
    </>
  );
};

export default introduce;

const Introduce_Container = styled.div`
  position: relative;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 15rem;
  /* align-items: center; */
`;

const Section1 = styled(Section)`
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  color: #f0f2fa;
  margin: 0 auto;
  background-color: #353353;
  height: 500px;

  @media screen and (max-width: 960px) {
    padding: 8rem 2rem;
    height: 810px;
  }

  .onair {
    width: fit-content;
    font-family: "Nanum Square B";
    font-size: 1rem;
    letter-spacing: -1.6px;
    background: #ff2942;
    padding: 0.2rem 0.8rem;
    border-radius: 10px;
    color: #f0f2fa;
    margin-bottom: 1rem;
    box-shadow: 0 0 20px 3px rgb(255 76 96 / 30%);

    @media screen and (max-width: 960px) {
      font-size: 1rem;
      padding: 0.2rem 0.9rem;
      margin-bottom: 1.7rem;
    }
  }

  .lecture-image {
    border-radius: 10px;
    display: none;
  }

  /* 
  @media screen and (min-width: 961px) and (max-width: 1669px) {
    padding: 22rem 3rem;
  } */
`;

const Title = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  font-family: "Nanum Square B";
  font-size: 1.9rem;
  letter-spacing: -1.6px;
  color: #f0f2fa;
  z-index: 2;
  margin-bottom: 0.6rem;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    letter-spacing: -1.2px;
    line-height: 2rem;
    text-align: center;
  }

  img {
  }

  .typeit {
    width: 30rem;
    border: 2px solid #f0f2fa;
    border-radius: 5px;
    padding: 0.4rem 0.8rem;
    font-size: 1.3rem;
    margin-right: 0.8rem;
    margin-bottom: 0.6rem;
    color: #f0f2face;

    @media screen and (max-width: 960px) {
      margin-right: 0.4rem;
      font-size: 2.2rem;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  @media screen and (max-width: 960px) {
  }
`;

const Tag = styled.div`
  padding: 0.5rem 0.7rem;
  font-size: 0.8rem;
  border-radius: 15px;
  background: #f0f2fa1a;
  font-family: "Nanum Square B";
  text-align: center;

  & + & {
    margin-left: 0.6rem;
  }

  @media screen and (max-width: 960px) {
  }
`;

const ButtonGroup = styled.div`
  display: flex;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: #f0f2fa;
  padding: 0.8rem 1.3rem;
  border-radius: 25px 10px;
  font-family: "Nanum Square EB";
  font-size: 1.1rem;
  letter-spacing: -0.4px;
  color: #5353c0;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: rgb(2 1 1 / 20%) 0px 5px 20px -5px;

  @media screen and (max-width: 960px) {
    font-size: 0.9rem;
    text-align: center;
    padding: 0.6rem 1rem;
  }

  & + & {
    margin-left: 1rem;

    @media screen and (max-width: 960px) {
      margin-left: 0rem;
      margin-top: 0.6rem;
    }
  }

  &:hover {
    background-color: #f0f2fa;
    transform: translateY(-0.3rem);
  }

  img {
    width: 1.4rem;
    height: 1.4rem;
    margin-left: 0.4rem;

    @media screen and (max-width: 960px) {
      width: 1rem;
      height: 1rem;
      margin-left: 0.4rem;
    }
  }
`;

const Section2 = styled(Section)`
  height: 400px;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    padding: 6rem 2rem;
    height: 1050px;
  }

  /* @media screen and (min-width: 961px) and (max-width: 1669px) {
    padding: 0 200px;
  } */
`;

const Title2 = styled(Title)`
  color: #353353;
  font-size: 1.4rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 960px) {
    font-size: 1.7rem;
    margin-bottom: 3rem;
  }
`;

const CardGroup = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    height: 85%;
    align-items: stretch;
  }
`;

const Card = styled.div`
  width: 19%;
  height: 12rem;
  display: flex;
  padding: 1.5rem;
  border-radius: 15px;
  color: #f7f9fc;
  box-shadow: rgb(108 108 229 / 50%) 0px 5px 20px 0px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-0.5rem);
  }

  img {
    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;
    width: 5.2rem;
    height: 5.2rem;

    @media screen and (max-width: 960px) {
      width: 3rem;
      height: 3rem;
      margin-bottom: 0.8rem;
    }
  }

  .title {
    font-family: "Nanum Square B";
    font-size: 1.2rem;

    @media screen and (max-width: 960px) {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
  }

  .desc {
    font-family: "Nanum Square R";
    font-size: 1.1rem;
    letter-spacing: -0.4px;

    @media screen and (max-width: 960px) {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 2rem 1.6rem;
    align-items: flex-start;

    & + & {
      /* margin-top: 1rem; */
    }
  }
`;

const Section3 = styled(Section)`
  height: 800px;
  justify-content: flex-start;
  background: #fff; /* padding: 15rem 12rem; */

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

const Title3 = styled(Title2)`
  /* color: #353353;
  margin-bottom: 4rem;

  @media screen and (max-width: 960px) {
    font-size: 1.7rem;
    margin-bottom: 2rem;
  } */
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
