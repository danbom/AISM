import { useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";

import performanceSpecialistCourse from "../../../data/performanceSpecialistCourse.json";

const Program: NextPage = () => {
  const router = useRouter();
  const { title } = router.query;
  const [menu, setMenu] = useState<string>("강의소개");
  const [programTitle, setProgramTitle] = useState<string | string[]>("");

  useEffect(() => {
    setProgramTitle(title ? title : "");
    return () => {};
  }, [title]);

  return (
    <>
      {performanceSpecialistCourse.map(
        (course, index) =>
          course.title == programTitle && (
            <CourseContainer key={index}>
              <div className="has-background">
                <img src={`/static/image/program/${course.image}`} />
                <div className="ml-2">
                  <div className="tag">NEW</div>
                  <div className="title">{course.title}</div>
                  <div className="time">
                    <i className="ri-time-line"></i>
                    {course.time}
                  </div>
                  <div className="instructor">
                    <i className="ri-user-3-line"></i>
                    {course.instructor}
                  </div>
                  <div className="tags">
                    <i className="ri-hashtag"></i>
                    {course.tags.map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </div>
              <div className="menu-bar">
                <Menu
                  className="menu"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu("강의소개");
                  }}
                  curMenu={menu === "강의소개"}
                >
                  강의소개
                </Menu>
                <Menu
                  className="menu"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu("커리큘럼");
                  }}
                  curMenu={menu === "커리큘럼"}
                >
                  커리큘럼
                </Menu>
              </div>
              {menu === "강의소개" && (
                <div className="course-introduce">
                  <div className="subtitle">{course.subtitle}</div>
                  <div className="desc">{course.description}</div>
                  <div className="keywords-container">
                    <div className="we-learn">
                      ✍️
                      <br />
                      이런 걸 배워요!
                    </div>
                    <div>
                      {course.keywords.map((keyword, index) => (
                        <div key={index} className="keyword">
                          ✔ {keyword}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="banner">
                    <p>{course.banner}</p>
                  </div>
                </div>
              )}
              {menu === "커리큘럼" && (
                <div className="curriculum">
                  <div className="title">커리큘럼</div>
                  <div className="container">
                    {course.curriculum.map((cur, index) => (
                      <Cur key={index}>
                        <i className="ri-play-circle-line"></i>
                        {cur}
                      </Cur>
                    ))}
                  </div>
                </div>
              )}
            </CourseContainer>
          )
      )}
    </>
  );
};

export default Program;

const CourseContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .has-background {
    width: 100%;
    height: 20rem;
    background-color: #343a40;
    color: #ffffff;
    display: flex;
    align-items: center;
  }

  .ml-2 {
    margin-left: 2%;
  }

  img {
    margin-left: 15%;
    width: 27rem;
    border-radius: 10px;
  }

  .tag {
    width: fit-content;
    background-color: #e5503c;
    color: #ffffff;
    padding: 0.2rem 0.3rem;
    font-family: "Nanum Square EB";
    font-size: 0.7rem;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }

  .title {
    font-family: "Nanum Square EB";
    font-size: 1.7rem;
    margin-bottom: 2rem;
  }

  .time {
    font-family: "Nanum Square R";
    font-size: 0.9rem;
    display: flex;
    margin-bottom: 0.2rem;

    i {
      margin-right: 0.4rem;
    }
  }

  .instructor {
    display: flex;
    font-family: "Nanum Square R";
    font-size: 0.9rem;
    margin-bottom: 0.2rem;

    i {
      margin-right: 0.4rem;
    }
  }

  .tags {
    display: flex;

    i {
      margin-right: 0.4rem;
    }
  }

  .menu-bar {
    width: 100%;
    height: 3.5rem;
    border-bottom: 1px solid #36363615;
    display: flex;
    padding: 0 15%;
  }

  .course-introduce {
    width: 100%;
    padding: 3% 40% 3% 15%;
    display: flex;
    flex-direction: column;

    .subtitle {
      font-family: "Nanum Square B";
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
    }

    .desc {
      font-family: "Nanum Square R";
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .keywords-container {
      display: flex;
      border: 1px solid #36363615;
      padding: 2rem 3rem;
      border-radius: 10px;
      margin-bottom: 1rem;

      .we-learn {
        width: 4rem;
        display: flex;
        text-align: center;
        font-family: "Nanum Square B";
        font-size: 1.1rem;
        margin-right: 3rem;
      }

      .keyword {
        font-family: "Nanum Square R";
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }
    }

    .banner {
      display: flex;
      justify-content: center;
      padding: 0.5rem 2rem;
      background-color: #343a40;
      color: #ffffff;
      border-radius: 10px;

      p {
        width: 40%;
        font-family: "Nanum Square B";
        font-size: 0.9rem;
        text-align: center;
      }
    }
  }

  .curriculum {
    width: 100%;
    padding: 3% 40% 3% 15%;
    display: flex;
    flex-direction: column;

    .title {
      font-family: "Nanum Square B";
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
    }

    .container {
      border: 1px solid #36363615;
      border-radius: 10px;
    }
  }
`;

const Tag = styled.div`
  font-family: "Nanum Square R";
  font-size: 0.9rem;

  & + & {
    margin-left: 0.2rem;
  }
`;

const Cur = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem;
  font-family: "Nanum Square R";
  font-size: 0.9rem;

  i {
    font-size: 1rem;
    margin-right: 0.5rem;
  }

  & + & {
    border-top: 1px solid #36363615;
  }
`;

interface MenuProps {
  curMenu?: boolean;
}

const Menu = styled.div<MenuProps>`
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: ${(props) =>
    props.curMenu == true ? "1px solid #111111" : ""};
  color: #111111;
  font-family: ${(props) =>
    props.curMenu == true ? "Nanum Square B" : "Nanum Square R"};
  font-size: 0.9rem;
  margin-right: 1rem;
  cursor: pointer;
`;
