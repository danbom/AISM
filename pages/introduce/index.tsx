import type { NextPage } from "next";
import { Collapse, Button } from "@nextui-org/react";
import TypeIt from "typeit-react";
import styled from "styled-components";

// import { PageTitle } from "../../components/PageTitle";

const introduce: NextPage = () => {
  return (
    <Introduce_Container>
      {/* <PageTitle title={"Introduce"} sub={"AISM 소개"} /> */}
      <Section>
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
                  .type("헬스 	트레이너")
                  .pause(1200)
                  .delete()
                  .pause(200)
                  .type("요가 	강사")
                  .pause(1200)
                  .delete()
                  .pause(200)
                  .type("필라테스 	강사")
                  .pause(1200);

                // Remember to return it!
                return instance;
              }}
            />
          </div>{" "}
          가 되고 싶다면
        </Title>
        <Title>
          최고의 교육 프로그램과 강사진을 갖춘
          <br />
          AISM과 함께라면 가능합니다.
        </Title>
        {/* <SubTitle>
          <Button className="button" color="gradient" auto>
            <p>교육 프로그램 바로가기</p>
            <img src="/static/image/icon/high-voltage-white.png" />
          </Button>
        </SubTitle> */}
      </Section>
      <Section>
        {/* <Title>AISM 교육 프로그램을 선택하는 이유</Title> */}
        <Collapse.Group accordion={false}>
          <Collapse title="선진 교육 프로그램" expanded>
            <div className="collapse">
              {/* <img src="/static/image/icon/chequered-flag.png" /> */}
              <p>
                <strong>AISM</strong>은 미국의 물리치료사 및 헬스 트레이너들과
                교류하며 선진 교육 프로그램 개발에 힘쓰고 있습니다. <br />
                이번에 열리는 체형 분석 전문가 과정은 한국은 물론 미국의 유능한
                강사진들로 구성되어 알차고 뜻깊은 과정이 될 것입니다.
              </p>
            </div>
          </Collapse>
          <Collapse title="다양한 교육 프로그램" expanded>
            <div className="collapse">
              {/* <img src="/static/image/icon/books.png" /> */}
              <p>
                학회 초기에는 물리치료사들의 도수 치료 기법들을 강의하는 것을
                시작으로 <br />
                헬스 트레이너, 요가 강사 및 필라테스 강사 , 물리치료사 , 건강
                분야 관련 종사자 등 그 범위를 넓혀 <br />
                고객 및 환자를 관리하는데 필요한 척추 교정술, 근막 이완 기법, 팝
                필라테스, 마사지 강의를 실시해왔습니다.
              </p>
            </div>
          </Collapse>
          <Collapse title="온오프라인 교육 병행" expanded>
            <div className="collapse">
              {/* <img src="/static/image/icon/man-teacher.png" /> */}
              <p>
                2018년 이전까진는 오프라인 교육으로 진행하였으나
                <br /> 코로나 팬데믹 이후 온, 오프라인 병행 교육을 실시하고
                있습니다.
              </p>
            </div>
          </Collapse>
        </Collapse.Group>
      </Section>
      <Section>
        <Title>AISM 연혁</Title>
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
            <span className="time">2017.04</span>The Science & Demonstration of
            Myofascial Release Therapy 건양대학교 교육 및 서울 교육
          </p>
          <p>
            <span className="time">2017.05</span>POP Pilates 교육
          </p>
          <p>
            <span className="time">2017.06</span>Chiro Practic 교육
          </p>
          <p>
            <span className="time">2018.05</span>The Science & Demonstration of
            Myofascial Release Therapy 가톨릭관동대학교 교육
          </p>
          <p>
            <span className="time">2022.09</span>Performance Specialist 교육
            예정
          </p>
        </TimeLine>
      </Section>
    </Introduce_Container>
  );
};

export default introduce;

const Section = styled.div`
  padding: 8rem 0;

  .collapse {
    display: flex;
    align-items: center;
    padding: 1rem 0;

    @media screen and (max-width: 960px) {
      padding: 0.5rem 0;
    }

    img {
    }

    p {
      font-family: "Nanum Square R";
      font-size: 1.1rem;
      margin-top: 0;

      @media screen and (max-width: 960px) {
        font-size: 1rem;
      }
    }
  }
`;

const Introduce_Container = styled.div`
  padding: 0 5rem;

  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: baseline;
  font-family: "Nanum Square EB";
  font-size: 1.9rem;
  letter-spacing: -1.6px;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    letter-spacing: -1.2px;
    text-align: center;
  }

  img {
  }

  .typeit {
    font-size: 3.3rem;
    margin-right: 0.8rem;

    @media screen and (max-width: 960px) {
      margin-right: 0.4rem;
      font-size: 2.2rem;
    }
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
      letter-spacing: -0.4px;
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
