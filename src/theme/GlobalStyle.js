import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    word-wrap: break-word;
  }
  html {
    font-size: 62.5%;
    line-height: 1.6;
    background-color: #f5c7a9;
  }
`;
export default GlobalStyle;
