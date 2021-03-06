import Link from "next/link";
import styled from "styled-components";

import Section from "./Section";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="links">
        <Link href="/introduce">AISM 소개</Link>
        <Link href="/notice">공지사항</Link>
        <Link href="/">사용자 이용 약관</Link>
        <Link href="/">개인정보 취급방침</Link>
        <Link href="/faq">자주 묻는 질문</Link>
      </div>
      <div>
        <strong>(주)AISM</strong> | <strong>대표</strong> 이관 |
        <strong> 개인정보보호책임자</strong> 이관 | <strong>대표번호</strong>{" "}
        010-7636-5056
      </div>
      <div>
        <strong>사업자 번호</strong> 000-00-00000 | <strong>주소</strong>{" "}
        경상남도 거제시 상동 5길 79
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(Section)`
  margin-top: 3rem;
  flex-direction: column;
  font-weight: 400;
  font-size: 0.8rem;
  height: 150px;
  justify-content: center;

  @media screen and (max-width: 479px) {
    font-size: 0.6rem;
  }

  .links {
    font-size: 0.9rem;
    margin-bottom: 0.7rem;

    @media screen and (max-width: 479px) {
      word-break: keep-all;
      font-size: 0.7rem;
      margin-bottom: 0.5rem;
    }

    a {
      margin-right: 1rem;

      @media screen and (max-width: 479px) {
        margin-right: 0.8rem;
      }
    }
  }
`;
