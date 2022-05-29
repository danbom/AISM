import { useState } from "react";
import styled from "styled-components";

import history from "../../data/history.json";

import Section from "../Section";
import Title from "../Title";

const Section3 = () => {
  const [year, setYear] = useState("2022");
  const [clicked, setClicked] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleClicked = (index: number) => {
    if (index === 0) setClicked([true, false, false, false, false, false]);
    else if (index === 1) setClicked([false, true, false, false, false, false]);
    else if (index === 2) setClicked([false, false, true, false, false, false]);
    else if (index === 3) setClicked([false, false, false, true, false, false]);
    else if (index === 4) setClicked([false, false, false, false, true, false]);
    else setClicked([false, false, false, false, false, true]);
  };

  return (
    <S3>
      <Title>AISM 연혁</Title>
      <div className="years">
        {["2022", "2018", "2017", "2016", "2014", "2013"].map((year, index) => {
          return (
            <Year
              key={year}
              onClick={(e) => {
                e.preventDefault();
                setYear(year);
                handleClicked(index);
              }}
              clicked={clicked[index] === true}
            >
              {year}
            </Year>
          );
        })}
      </div>
      <div className="box">
        {history.map(
          (h, index) =>
            h.date.slice(0, 4) === year && (
              <Element key={index}>
                <div className="circle" />
                <div className="date">{h.date}</div>
                <div className="content">{h.content}</div>
              </Element>
            )
        )}
      </div>
    </S3>
  );
};

export default Section3;

const S3 = styled(Section)`
  flex-direction: column;
  height: 350px;

  .years {
    display: flex;
    flex-direction: row;
    font-family: "Nanum Square B";
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .box {
    color: #2f3438;
  }

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

interface yearProps {
  clicked?: boolean;
}

const Year = styled.div<yearProps>`
  background-color: ${(props) => (props.clicked ? " #f1f3f5" : "#f1f3f557")};
  color: #2f3438;
  padding: 0.4rem 1rem;
  border-radius: 10px;
  letter-spacing: -1px;
  cursor: pointer;
  transition: all 0.2s ease;

  & + & {
    margin-left: 0.7rem;
  }

  &:hover {
    background-color: #f1f3f5;
  }
`;

const Element = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 1rem;
  }

  .date {
    font-family: "Nanum Square R";
    letter-spacing: -1px;
    margin-right: 1.5rem;
  }
  .circle {
    width: 0.5rem;
    height: 0.5rem;
    border: 2px solid #3183ff;
    border-radius: 50%;
    margin-right: 1rem;
  }
  .content {
    /* font-family: "Nanum Square R"; */
  }
`;
