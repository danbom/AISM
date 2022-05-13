import { Text } from "@nextui-org/react";
import styled from "styled-components";

export const PageTitle = ({
  icon,
  title,
  sub,
}: {
  icon: JSX.Element;
  title: string;
  sub: string;
}) => (
  <PageTitleContainer>
    <Title>
      <Icon>{icon}</Icon>
      <Text className="text" h1>
        {title}
      </Text>
    </Title>

    <SubText>{sub}</SubText>
  </PageTitleContainer>
);

const Title = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    justify-content: center;
  }

  .text {
    padding-left: 0.5rem;
    font-size: 42px;

    @media screen and (max-width: 960px) {
      padding-left: 0rem;
      font-size: 36px;
    }
  }
`;

const PageTitleContainer = styled.div`
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Icon = styled.div`
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const SubText = styled(Text)`
  font-size: 20px;

  @media screen and (max-width: 960px) {
    font-size: 16px;
  }
`;
