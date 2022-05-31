import styled from "styled-components";

const Section = styled.div`
  display: flex;
  height: fit-content;
  padding: 3rem 20%;

  @media screen and (max-width: 479px) {
    padding: 3rem 15%;
  }
`;

export default Section;
