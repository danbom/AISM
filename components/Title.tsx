import styled from "styled-components";

const Title = ({ children }: any) => <T>{children}</T>;

export default Title;

const T = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  font-family: "Nanum Square EB";
  letter-spacing: -1.6px;
  color: #2f3438;
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 960px) {
    font-size: 1.7rem;
    margin-bottom: 3rem;
  }
`;
