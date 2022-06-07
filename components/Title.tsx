import styled from "styled-components";

const Title = ({ children }: any) => <T>{children}</T>;

export default Title;

const T = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  font-weight: 700;
  letter-spacing: -1.6px;
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 479px) {
    width: 80%;
    font-size: 1.3rem;
    line-height: 1.6rem;
    word-break: keep-all;
  }
`;
