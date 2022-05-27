import styled from "styled-components";

import Section from "../Section";
import Title from "../Title";

const Section2 = () => {
  return (
    <S2>
      <Title>수강생들이 AISM을 선택하는 이유는?</Title>
      <CardGroup>
        <Card
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="100"
          style={
            {
              // background: "#FCF8EC",
              // color: "#363636",
              // boxShadow: "rgb(38 70 83 / 50%) 0px 5px 10px 0px",
            }
          }
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
          data-aos-duration="150"
          style={
            {
              // background: "#D0E8F2",
              // color: "#363636",
              // boxShadow: "rgb(42 157 143 / 50%) 0px 5px 10px 0px",
            }
          }
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
          style={
            {
              // background: "#5584AC",
              // boxShadow: "rgb(233 196 106 / 50%) 0px 5px 10px 0px",
            }
          }
        >
          <div className="title">선진 교육 프로그램</div>
          <img src="/static/image/icon/3845897.png" />
        </Card>
        <Card
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="250"
          style={
            {
              // background: "#22577E",
              // boxShadow: "rgb(244 162 97 / 50%) 0px 5px 10px 0px",
            }
          }
        >
          <div className="title">다양한 프로그램</div>
          <img src="/static/image/icon/3845752.png" />
        </Card>
        <Card
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="300"
          style={
            {
              // background: "#87C0CD",
              // boxShadow: "rgb(231 111 81 / 50%) 0px 5px 10px 0px",
            }
          }
        >
          <div className="title">온오프라인 교육</div>
          <img src="/static/image/icon/3845878.png" />
        </Card>
      </CardGroup>
    </S2>
  );
};

export default Section2;

const S2 = styled(Section)`
  height: 400px;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 960px) {
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
