import type { NextPage } from "next";
import TypeIt from "typeit-react";
import styled from "styled-components";

// import { PageTitle } from "../../components/PageTitle";

const introduce: NextPage = () => {
  return (
    <>
      <Introduce_Container>
        <Section1>
          <GradientBackground />
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
          <Title>AISM 으로 시작하세요.</Title>
          <SubTitle>
            학회 기반 다수의 교육 경험 <br />
            물리 치료 기법, 팝 필라테스, 마사지 강의 등 다양한 교육 프로그램
          </SubTitle>
          <ButtonGroup>
            <Button className="button">
              교육 프로그램 바로가기
              <img src="/static/image/icon/high-voltage.png" />
            </Button>
            <Button className="button">
              강사진 소개 바로가기
              <img src="/static/image/icon/high-voltage.png" />
            </Button>
          </ButtonGroup>
          <GradientImage src="/static/image/icon/group.svg" />
        </Section1>
        <Section2>
          {/* <Title>AISM 교육 프로그램을 선택하는 이유</Title> */}
          <CardGroup>
            <Card>
              <img src="/static/image/icon/Group 7.svg" />
              <div className="title">선진 교육 프로그램</div>
              <div className="desc">
                <strong>AISM</strong>은 미국의 물리치료사 및 헬스 트레이너들과
                교류하며 선진 교육 프로그램 개발에 힘쓰고 있습니다. 이번에
                열리는 체형 분석 전문가 과정은 한국은 물론 미국의 유능한
                강사진들로 구성되어 알차고 뜻깊은 과정이 될 것입니다.
              </div>
            </Card>
            <Card>
              <img src="/static/image/icon/Group 5.svg" />
              <div className="title">다양한 교육 프로그램</div>
              <div className="desc">
                학회 초기에는 물리치료사들의 도수 치료 기법들을 강의하는 것을
                시작으로 헬스 트레이너, 요가 강사 및 필라테스 강사 , 물리치료사
                등 그 범위를 넓혀 고객 및 환자를 관리하는데 필요한 척추 교정술,
                근막 이완 기법, 팝 필라테스, 마사지 강의를 실시해왔습니다.
              </div>
            </Card>
            <Card>
              <img src="/static/image/icon/packet_2.svg" />
              <div className="title">온오프라인 교육 병행</div>
              <div className="desc">
                2018년 이전까지는 오프라인 교육으로 진행하였으나 코로나 팬데믹
                이후 온, 오프라인 병행 교육을 실시하고 있습니다.
              </div>
            </Card>
          </CardGroup>
        </Section2>
        <Section3>
          <img src="/static/image/icon/Illustration .svg" />
          <Column>
            <div className="title">AISM 연혁</div>
            <TimeLine>
              <div className="line" />
              <p>
                <span className="time">2013.09</span>AMTI 학회 설립
              </p>
              <p>
                <span className="time">2013.11</span>
                Assessment and Treatment of the Shoulder Complex 교육
              </p>
              <p>
                <span className="time">2014.11</span>
                Spine Assessment & Joint Mobilization Techniques : Chiropractic
                approach 교육
              </p>
              <p>
                <span className="time">2016.11</span>
                Advanced Integrity Sports & Medicine(AISM)으로 학회 명칭 변경
              </p>
              <p>
                <span className="time">2017.04</span>The Science & Demonstration
                of Myofascial Release Therapy 건양대학교 교육 및 서울 교육
              </p>
              <p>
                <span className="time">2017.05</span>POP Pilates 교육
              </p>
              <p>
                <span className="time">2017.06</span>Chiro Practic 교육
              </p>
              <p>
                <span className="time">2018.05</span>The Science & Demonstration
                of Myofascial Release Therapy 가톨릭관동대학교 교육
              </p>
              <p>
                <span className="time">2022.09</span>Performance Specialist 교육
                예정
              </p>
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
`;

const Section1 = styled(Section)`
  color: #f0f2fa;
  padding-top: 22rem;
  padding-left: 200px;
  background-color: #6246e4;
  height: 1104px;

  @media screen and (max-width: 960px) {
    padding: 8rem 2rem;
    height: 810px;
  }

  @media screen and (min-width: 961px) and (max-width: 1669px) {
    padding: 22rem 200px;
  }
`;

const GradientBackground = styled.div`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1104px;
  background-size: cover;
  background-image: url("/static/image/icon/Group 3.svg");
  background-repeat: no-repeat;

  @media screen and (max-width: 1526px) {
    display: none;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: baseline;
  font-family: "Nanum Square EB";
  font-size: 2.8rem;
  letter-spacing: -1.6px;
  line-height: 3.8rem;
  color: #f0f2fa;

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
    font-size: 4rem;
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

  @media screen and (max-width: 960px) {
    font-size: 0.8rem;
    line-height: 1.3rem;
    text-align: center;
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
  padding: 0.8rem 1.1rem;
  border-radius: 15px;
  font-family: "Nanum Square EB";
  font-size: 1.2rem;
  color: #6246e4;
  cursor: pointer;
  transition: all 0.4s ease;

  & + & {
    margin-left: 1rem;

    @media screen and (max-width: 960px) {
      margin-left: 0rem;
      margin-top: 0.6rem;
    }
  }

  &:hover {
    background-color: #f0f2fa;
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

  @media screen and (max-width: 960px) {
    font-size: 0.9rem;
    text-align: center;
    padding: 0.6rem 1rem;
  }
`;

const GradientImage = styled.img`
  width: 17rem;
  margin-left: 4rem;

  @media screen and (min-width: 576px) {
    disply: none;
  }
`;

const Section2 = styled(Section)`
  padding: 0 24rem;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    padding: 0 2rem;
    height: 900px;
  }

  @media screen and (min-width: 961px) and (max-width: 1669px) {
    padding: 0 200px;
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
  padding: 3rem 2rem 2rem 2rem;
  border-radius: 15px;
  background-color: #f7f9fc;

  img {
    width: 10rem;
    height: 10rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 960px) {
      width: 3rem;
      height: 3rem;
      margin-bottom: 0.8rem;
    }
  }

  .title {
    font-family: "Nanum Square EB";
    font-size: 1.4rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 960px) {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
  }

  .desc {
    font-family: "Nanum Square R";
    font-size: 1rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 15rem 12rem; */

  img {
    @media screen and (max-width: 960px) {
      position: absolute;
      width: 12rem;
    }
  }

  @media screen and (max-width: 960px) {
    padding: 8rem 2rem;
  }

  @media screen and (min-width: 961px) and (max-width: 1669px) {
    /* padding: 22rem 200px; */
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
  padding-top: 1rem;

  @media screen and (max-width: 960px) {
    padding: 1.5rem;
  }

  p {
    font-family: "Nanum Square B";
    font-size: 1.1rem;
    letter-spacing: -0.4px;

    @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      font-size: 1rem;
    }
  }

  .line {
    position: absolute;
  }

  .time {
    font-family: "Nanum Square R";
    font-size: 1rem;
    padding-right: 1rem;

    @media screen and (max-width: 960px) {
      font-size: 0.9rem;
    }
  }

  .time::before {
    content: "○";
    padding-right: 0.6rem;
  }
`;
