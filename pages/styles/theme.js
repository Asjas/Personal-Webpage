import { createGlobalStyle } from 'styled-components';

const theme = {
  fontXL: '1.7rem',
  fontL: '1.4rem',
  fontSm: '1.1rem',
  svgL: '60px',
  svgM: '40px',
  svgSm: '30px',
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  gold: '#FFD700',
  goldBorderSm: '1px solid #FFD700',
  goldBorderMd: '4px solid #FFD700',
  lightGreyBorder: '1px solid rgba(255, 255, 255, 0.04)',
};

const GlobalStyles = createGlobalStyle`
  html,
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    min-height: 100vh;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export { theme, GlobalStyles };
