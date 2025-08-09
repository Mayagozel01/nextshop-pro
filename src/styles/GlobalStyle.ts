import { createGlobalStyle } from 'styled-components';
import PoppinsRegular from '/src/assets/fonts/Poppins/Poppins-Regular.ttf';
import PoppinsBold from '/src/assets/fonts/Poppins/Poppins-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size:10px;
  }


  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src:url(${PoppinsBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${props => props.theme.colors.white_0};
    color: ${props => props.theme.colors.text};
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
