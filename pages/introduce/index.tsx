import type { NextPage } from "next";
import TypeIt from "typeit-react";
import styled from "styled-components";

// import { PageTitle } from "../../components/PageTitle";

const introduce: NextPage = () => {
  return (
    <Introduce_Container>
      {/* <PageTitle title={"Introduce"} sub={"AISM 소개"} /> */}
      <Title>
        <div className="typeit">
          <TypeIt
            options={{ loop: true }}
            getBeforeInit={(instance) => {
              instance
                .type("물리치료사")
                .pause(1200)
                .delete()
                .pause(200)
                .type("헬스 트레이너")
                .pause(1200)
                .delete()
                .pause(200)
                .type("요가 강사")
                .pause(1200)
                .delete()
                .pause(200)
                .type("필라테스 강사")
                .pause(1200);

              // Remember to return it!
              return instance;
            }}
          />
        </div>{" "}
        가 되고 싶다면
        <img src="/static/image/icon/person-running.png" />
      </Title>
      <p className="introduce_description">
        <span className="highlight">AISM</span> 과 함께라면 가능합니다.{" "}
        <span className="highlight">AISM</span> 은 2013년 AMTI 학회를 시작으로
        2016년 <span className="highlight">AISM 학회</span>로 변경하여 현재에
        이르고 있습니다.{" "}
      </p>
      <p className="introduce_description">
        학회 초기에는 물리치료사들의 도수 치료 기법들을 강의하는 것을 시작으로
        <br />
        헬스 트레이너
        <img src="/static/image/icon/man-lifting-weights.png" />, 요가 강사 및
        필라테스 강사
        <img src="static/image/icon/person-in-lotus-position.png" />, 물리치료사
        <img src="/static/image/icon/man-kneeling.png" />
        , 건강 분야 관련 종사자 등 그 범위를 넓혀
        <br />
        고객 및 환자를 관리하는데 필요한{" "}
        <span className="highlight">척추 교정술</span>,{" "}
        <span className="highlight">근막 이완 기법</span>,{" "}
        <span className="highlight">팝 필라테스</span>,
        <span className="highlight">마사지 강의</span>
        를 실시해왔습니다.
        <br />
        <br />
        앞으로도 <span className="highlight">AISM</span> 은 더 좋은 강의로
        여러분에 든든한 버팀목이 될 것입니다.
      </p>
    </Introduce_Container>
  );
};

export default introduce;

const Introduce_Container = styled.div`
  padding: 0 5rem;

  .introduce_description {
    font-family: "Nanum Square R";
    font-size: 1.1rem;

    .highlight {
      font-family: "Nanum Square EB";
    }

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: baseline;
  font-family: "Nanum Square EB";
  font-size: 2.4rem;

  img {
    width: 8rem;
    height: 8rem;
  }

  .typeit {
    font-size: 3.3rem;
    margin-right: 0.8rem;
  }
`;
