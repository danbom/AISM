import type { NextPage } from "next";
import TypeIt from "typeit-react";
import styled from "styled-components";

// import { PageTitle } from "../../components/PageTitle";

const introduce: NextPage = () => {
  return (
    <>
      <Introduce_Container>
        <Section1>
          {/* <Illustration src="/static/image/illustration_1.svg" /> */}
          <div className="onair">ON-AIR</div>
          <Title>
            <div className="typeit">
              {/* <img src="/static/image/icon/person-running.png" /> */}
              <TypeIt
                options={{ loop: true }}
                getBeforeInit={(instance) => {
                  instance
                    .type("물리치료사")
                    .pause(1200)
                    .delete()
                    .pause(200)
                    .type("헬스&nbsp;트레이너")
                    .pause(1200)
                    .delete()
                    .pause(200)
                    .type("요가&nbsp;강사")
                    .pause(1200)
                    .delete()
                    .pause(200)
                    .type("필라테스&nbsp;강사")
                    .pause(1200);

                  // Remember to return it!
                  return instance;
                }}
              />
            </div>{" "}
            가 되고 싶다면
          </Title>
          <Title>AISM으로 시작하세요.</Title>
          <SubTitle>
            학회 기반 다수의 교육 경험 <br />
            물리 치료 기법, 팝 필라테스, 마사지 강의 등 다양한 교육 프로그램
          </SubTitle>
          <div className="lectures">
            <img
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
              src="/static/image/lecture_1.png"
            />
            <img
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
              src="/static/image/lecture_2.png"
            />
            <img
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
              src="/static/image/lecture_3.png"
            />
          </div>
          {/* <ButtonGroup>
            <Button className="button">
              교육 프로그램 바로가기
            </Button>
            <Button className="button">
              강사진 소개 바로가기
            </Button>
          </ButtonGroup> */}
          {/* <GradientImage src="/static/image/icon/group.svg" /> */}
        </Section1>
        <Section2>
          <Title2>AISM을 선택하는 이유</Title2>
          <CardGroup>
            <Card
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
              style={{
                background: "#6C6CE5",
                boxShadow: "rgb(108 108 229 / 50%) 0px 5px 20px 0px",
              }}
            >
              <img src="/static/image/icon/3845897.png" />
              <div className="title">선진 교육 프로그램</div>
              <div className="desc">
                AISM은 미국의 물리치료사 및 헬스 트레이너들과 교류하며 선진 교육
                프로그램 개발에 힘쓰고 있습니다. 특히 이번 체형 분석 전문가
                과정은 한국은 물론 미국의 유능한 강사진들로 구성되어 있습니다.
              </div>
            </Card>
            <Card
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="700"
              style={{
                background: "#F9D74C",
                color: "#353353",
                boxShadow: "rgb(249 215 76 / 50%) 0px 5px 20px 0px",
              }}
            >
              <img src="/static/image/icon/3845752.png" />
              <div className="title">다양한 프로그램</div>
              <div className="desc">
                도수 치료 기법은 물론 환자를 관리하는데 필요한 척추 교정술, 근막
                이완 기법, 팝 필라테스, 마사지 강의를 실시하고 있습니다.
              </div>
            </Card>
            <Card
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="900"
              style={{
                background: "#F97B8B",
                boxShadow: "rgb(249 123 139 / 50%) 0px 5px 20px 0px",
              }}
            >
              <img src="/static/image/icon/3845878.png" />
              <div className="title">온오프라인 교육</div>
              <div className="desc">
                2018년 이전까지는 오프라인 교육으로 진행하였으나 코로나 팬데믹
                이후 온, 오프라인 병행 교육을 실시하고 있습니다.
              </div>
            </Card>
          </CardGroup>
        </Section2>
        <Section3>
          {/* <img src="/static/image/icon/Illustration .svg" /> */}
          <Column>
            <Title3>AISM 연혁</Title3>
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section1 = styled(Section)`
  flex-direction: column;
  color: #f0f2fa;
  padding: 22rem 18rem;
  background-color: #353353;
  height: 1000px;

  @media screen and (max-width: 960px) {
    padding: 8rem 2rem;
    height: 810px;
  }

  .onair {
    font-family: "Nanum Square EB";
    font-size: 1.3rem;
    letter-spacing: -1.6px;
    background: #ff2942;
    padding: 0.3rem 1rem;
    border-radius: 10px;
    color: #f0f2fa;
    margin-bottom: 2rem;
    box-shadow: 0 0 20px 3px rgb(255 76 96 / 30%);

    @media screen and (max-width: 960px) {
      font-size: 1rem;
      padding: 0.2rem 0.9rem;
      margin-bottom: 1.7rem;
    }
  }

  .lectures {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    padding: 0 1rem;

    img {
      width: 32%;
      border-radius: 10px;
      cursor: pointer;

      & + & {
        margin-right: 3rem;
      }

      &:hover {
      }
    }
  }
  /* 
  @media screen and (min-width: 961px) and (max-width: 1669px) {
    padding: 22rem 3rem;
  } */
`;

const Illustration = styled.img`
  position: absolute;
  top: 16rem;
  right: 5%;
  width: 45rem;

  @media screen and (max-width: 960px) {
    display: none;
  }

  /* @media screen and (min-width: 961px) and (max-width: 1669px) {
    right: 10%;
  } */
`;

const Title = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  font-family: "Nanum Square EB";
  font-size: 2.6rem;
  letter-spacing: -1.6px;
  line-height: 3.8rem;
  color: #f0f2fa;
  z-index: 2;

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
    font-size: 3.8rem;
    margin-right: 0.8rem;
    color: #f0f2fa;

    @media screen and (max-width: 960px) {
      margin-right: 0.4rem;
      font-size: 2.2rem;
    }
  }
`;

const SubTitle = styled.p`
  font-family: "Nanum Square R";
  font-size: 1.1rem;
  line-height: 1.6rem;
  margin-bottom: 3rem;
  text-align: center;

  @media screen and (max-width: 960px) {
    font-size: 0.8rem;
    line-height: 1.3rem;
    margin-bottom: 2rem;
    padding: 0 2rem;
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

const GradientImage = styled.img`
  width: 17rem;
  margin-left: 4rem;

  @media screen and (min-width: 576px) {
    display: none;
  }
`;

const Section2 = styled(Section)`
  padding: 0 15%;
  height: 900px;
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
  margin-bottom: 4rem;

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
  width: 32%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2rem;
  border-radius: 15px;
  color: #f7f9fc;
  box-shadow: rgb(108 108 229 / 50%) 0px 5px 20px 0px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-0.5rem);
  }

  img {
    width: 6rem;
    height: 6rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 960px) {
      width: 3rem;
      height: 3rem;
      margin-bottom: 0.8rem;
    }
  }

  .title {
    font-family: "Nanum Square EB";
    font-size: 1.5rem;
    margin-bottom: 1rem;

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
  height: 1000px;
  /* padding: 15rem 12rem; */

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

const Title3 = styled(Title)`
  color: #353353;
  margin-bottom: 4rem;

  @media screen and (max-width: 960px) {
    font-size: 1.7rem;
    margin-bottom: 2rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

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
