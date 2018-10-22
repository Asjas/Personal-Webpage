import { createGlobalStyle } from 'styled-components';

const theme = {
  fontXL: '1.7rem',
  fontL: '1.4rem',
  fontSm: '1.1rem',
  svgL: '60px',
  svgMd: '50px',
  svgM: '40px',
  svgSm: '30px',
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  gold: '#FFD700',
  goldBorderSm: '1px solid #FFD700',
  goldBorderMd: '2px solid #FFD700',
  goldBorderL: '3px solid #FFD700',
  goldBorderXL: '4px solid #FFD700',
  blackBorderSm: '1px solid #393939',
  blackBorderMd: '2px solid #393939',
  blackBorderL: '3px solid #393939',
  blackBorderXL: '4px solid #393939',
  greyBorderSm: '1px solid #3A3A3A',
  greyBorderMd: '2px solid #3A3A3A',
  greyBorderL: '3px solid #3A3A3A',
  greyBorderXL: '4px solid #3A3A3A',
  lightGreyBorderSm: '1px solid rgba(255, 255, 255, 0.04)',
  lightGreyBorderMd: '2px solid rgba(255, 255, 255, 0.04)',
};

const GlobalStyles = createGlobalStyle`
  html,
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export { theme, GlobalStyles };
