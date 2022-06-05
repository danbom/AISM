import styled from "styled-components";

import Section from "../Section";
import Title from "../Title";
import Star from "../../components/Star";

const Section3 = () => {
  return (
    <div>
      <div className="scene_content" style={{ backgroundColor: "#3183ff" }}>
        <div className="container">
          <div className="cover_right">
            {/* <img
              className="banner-pc-image"
              src="https://cdn.inflearn.com/public/main_sliders/192c363c-7a7a-4c01-9188-c5ac9fc4b13d/hero-desktop.png"
              alt="믿고 듣는 무료 강의! 
한 번 맛보고 가세요 😋"
            /> */}
          </div>
          <div
            className="cover_left"
            id="cover_left_5" /* style={{background:" linear-gradient(to bottom, rgba(61,181,106,0),
                                                         rgba(61,181,106,0.47) 69%,
                                                         #3db56a 100%)"}}*/
          >
            <div className="hero-tags ">
              <div /*style="color:#000000;background-color:#ffea5b;"*/>
                큐레이션
              </div>
            </div>
            <h1
              className="admin_hero_title title is-3 bold"
              style={{
                color: "#fff",
              }} /* style="color: #ffffff;"*/
            >
              믿고 듣는 무료 강의! 한 번 맛보고 가세요 😋
            </h1>
            <p className="text is-1" /*style="color: #ffffff"*/>
              베스트셀러 저자, 대학 교수님이 함께해요. #알고리즘 #데이터사이언스
              #게임개발
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

const S3 = styled(Section)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 960px) {
  }

  .title {
    font-family: "Nanum Square EB";
    font-size: 1.1rem;
    letter-spacing: -1.2px;
  }

  .subtitle {
    font-family: "Nanum Square R";
    font-size: 0.9rem;
    letter-spacing: -1.2px;
    margin-top: -1.5rem;
    margin-bottom: 1rem;
  }

  .courses {
    display: flex;
  }
`;

const Course = styled.div`
  cursor: pointer;

  .time {
    font-family: "Nanum Square R";
    font-size: 0.9rem;
    letter-spacing: -1px;
  }

  img {
    border-radius: 10px;
  }

  & + & {
    margin-left: 1rem;
  }
`;
