import { createGlobalStyle, css } from "styled-components";

const globalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #111111;
  }

  body {
    font-family: "Spoqa Han Sans", sans-serif;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
  }

  @font-face {
    font-family: "Spoqa Han Sans";
    font-weight: 700;
    src: local("Spoqa Han Sans Bold"),
      url("/fonts/SpoqaHanSans/SpoqaHanSansBold.woff2") format("woff2"),
      url("/fonts/SpoqaHanSans/SpoqaHanSansBold.woff") format("woff"),
      url("/fonts/SpoqaHanSans/SpoqaHanSansBold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Spoqa Han Sans";
    font-weight: 400;
    src: local("Spoqa Han Sans Regular"),
      url("/fonts/SpoqaHanSans/SpoqaHanSansRegular.woff2") format("woff2"),
      url("/fonts/spoqa-han-sans/SpoqaHanSans/SpoqaHanSansRegular.woff")
        format("woff"),
      url("/fonts/spoqa-han-sans/SpoqaHanSans/SpoqaHanSansRegular.ttf")
        format("truetype");
  }

  @font-face {
    font-family: "Spoqa Han Sans";
    font-weight: 300;
    src: local("Spoqa Han Sans Light"),
      url("/fonts/SpoqaHanSans/SpoqaHanSansLight.woff2") format("woff2"),
      url("/fonts/SpoqaHanSans/SpoqaHanSansLight.woff") format("woff"),
      url("/fonts/SpoqaHanSans/SpoqaHanSansLight.ttf") format("truetype");
  }

  @font-face {
    font-family: "Spoqa Han Sans";
    font-weight: 100;
    src: local("Spoqa Han Sans Thin"),
      url("/fonts/SpoqaHanSans/SpoqaHanSansThin.woff2") format("woff2"),
      url("/fonts/SpoqaHanSans/SpoqaHanSansThin.woff") format("woff"),
      url("/fonts/SpoqaHanSans/SpoqaHanSansThin.ttf") format("truetype");
  }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle};
`;

export default GlobalStyle;