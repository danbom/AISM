import styled from "styled-components";

export const PageTitle = ({ title, sub }: { title: string; sub: string }) => (
  <PageTitle_Container>
    <img src="/static/image/icon/loudspeaker.png " />
    <div className="title">{title}</div>
    <div className="subtitle">{sub}</div>
  </PageTitle_Container>
);

const PageTitle_Container = styled.div`
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  .title {
    display: flex;
    align-items: center;
    font-size: 3rem;
    font-family: "Nanum Square EB";

    @media screen and (max-width: 960px) {
      font-size: 2.3rem;
    }
  }

  .subtitle {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-family: "Nanum Square R";

    @media screen and (max-width: 960px) {
      font-family: "Nanum Square R";
      font-size: 0.9rem;
    }
  }
`;
