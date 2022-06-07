import styled from "styled-components";

import Section from "../Section";
import Title from "../Title";

const Section2 = () => {
  return (
    <S2>
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
        <Title>AISM은 건강 관리 교육의 새로운 역사를 쓰고 있습니다.</Title>
      </div>

      <div>
        <div
          className="feature"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="text">
            <span className="highlight">특허 받은</span> 해부학 교구 수업
            <p>
              인체의 계통적, 기능적 구조의 이해와 근골격계, 신경계의 구성 및
              기능에 대한 전반적인 내용과 기초의학의 기반을 닦아주고 신체모델을
              통해 기능적 움직임을 실습하는 해부학 강의에서 특허 받은 해부학
              교구를 사용합니다.
            </p>
          </div>
          <img src="/static/image/introduce/그림4.png" />
        </div>
        <div
          className="feature"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="text">
            <span className="highlight">미국 체형 분석 전문가들</span>의 선진
            교육
            <p>
              AISM은 미국의 물리치료사 및 헬스 트레이너들과 교류하며 선진 교육
              프로그램 개발에 힘쓰고 있습니다. 이번에 열리는 체형 분석 전문가
              과정은 한국은 물론 미국의 유능한 강사진들로 구성되어 알차고 뜻깊은
              과정이 될 것입니다.
            </p>
          </div>
          <img src="/static/image/introduce/그림6.png" />
        </div>
        <div
          className="feature"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="text">
            <span className="highlight">폭 넓은</span> 교육 과정
            <p>
              2013년 학회 초기에는 물리치료사들의 도수 치료 기법에 대한 강의가
              주를 이루었으나, 2016년 이후 물리치료사 및 헬스 트레이너, 건강
              관련 종사자들에게도 교육을 하고 있습니다.
            </p>
          </div>
          <img src="/static/image/introduce/그림8.png" />
        </div>
        <div
          className="feature"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="text">
            <span className="highlight">온오프라인</span> 강의 병행
            <p>
              2018년 이전까지는 오프라인 교육으로 진행하였으나 코로나 팬데믹
              이후 온, 오프라인 병행 교육을 실시하고 있습니다.
            </p>
          </div>
          <img src="/static/image/introduce/그림7.png" />
        </div>
      </div>
    </S2>
  );
};

export default Section2;

const S2 = styled(Section)`
  width: 100%;
  display: flex;
  flex-direction: column;

  .feature {
    padding: 1rem 0 0 3rem;
    display: flex;
    align-items: center;
    background: #f1f3f5;
    border-radius: 15px;
    font-weight: 600;
    letter-spacing: -0.6px;
    font-size: 1.2rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 960px) {
      flex-direction: column;
      padding: 2rem 0 0 0;
    }

    .text {
      padding: 0 1rem;
      width: 45%;

      @media screen and (max-width: 960px) {
        width: 80%;
      }

      @media screen and (max-width: 479px) {
        width: 90%;
        padding: 0 0.5rem;
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem;

        @media screen and (max-width: 479px) {
          font-size: 0.8rem;
        }
      }
    }

    .highlight {
      color: #3183ff;
    }

    img {
      object-fit: cover;
      width: 55%;

      @media screen and (max-width: 479px) {
        width: 65%;
      }
    }
  }
`;
