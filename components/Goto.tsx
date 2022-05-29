import styled from "styled-components";

const Goto = () => {
  return (
    <GotoContainer>
      <span>교육 프로그램 바로가기</span>
      <svg className="arrow" width="16" height="14" viewBox="0 0 16 14">
        <path
          fill="#fff"
          d="M9.26 0L16 7.01 9.26 14 8.2 12.9l4.96-5.16H0V6.2h13.1L8.2 1.1 9.26 0z"
        ></path>
      </svg>
    </GotoContainer>
  );
};

export default Goto;

const GotoContainer = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 2rem;
  padding: 0.9rem 1.1rem;
  border-radius: 30px;
  font-family: "Nanum Square B";
  font-size: 1.1rem;
  color: #fff;
  background: #3a89ff;
  box-shadow: 0 4px 14px 0 rgb(33 37 41 / 40%);
  cursor: pointer;
  display: flex;
  align-items: center;

  span {
    margin-right: 0.5rem;
  }
`;
