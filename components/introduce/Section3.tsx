import { useState } from "react";
import styled from "styled-components";

import history from "../../data/history.json";

import Section from "../Section";
import Title from "../Title";

const Section3 = () => {
  const [clickedYear, setClickedYear] = useState("2022");

  return (
    <S3>
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
        <Title>AISM 연혁</Title>
      </div>
      <div
        className="years"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        {["2022", "2018", "2017", "2016", "2014", "2013"].map((year, index) => {
          return (
            <Year
              key={year}
              onClick={(e) => {
                e.preventDefault();
                setClickedYear(year);
              }}
              clicked={clickedYear === year}
            >
              {year}
            </Year>
          );
        })}
      </div>
      <div
        className="box"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        {history.map(
          (h, index) =>
            h.date.slice(0, 4) === clickedYear && (
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
`;

interface yearProps {
  clicked?: boolean;
}

const Year = styled.div<yearProps>`
  background-color: ${(props) => (props.clicked ? " #f1f3f5" : "#f1f3f557")};
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
    font-size: 0.9rem;
  }
`;
