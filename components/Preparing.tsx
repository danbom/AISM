import styled from "styled-components";

const Preparing = () => {
  return (
    <PreparingContainer>
      <span>Preparing</span>
      <p>
        아직 준비 중인 페이지입니다.
        <br />
        아래 링크를 클릭해 소개 페이지로 돌아갈 수 있습니다.
      </p>
      <span>소개 페이지로 돌아가기</span>
    </PreparingContainer>
  );
};

export default Preparing;

const PreparingContainer = styled.div`
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
