import { createGlobalStyle } from 'styled-components';

const theme = {
  heading1: '6.0rem',
  heading2: '4.5rem',
  heading3: '3.2rem',
  heading4: '2.2rem',
  fontL: '1.7rem',
  fontMd: '1.6rem',
  fontSm: '1.5rem',
  svgL: '5.5rem',
  svgMd: '5rem',
  svgM: '4.5rem',
  red: '#FF0000',
  maroon: '#D2006B',
  purple: '#3E13AF',
  pink: 'pink',
  black: '#222',
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
  lightGreyBorderSm: '1px solid rgba(255, 255, 255, 0.04)',
  lightGreyBorderMd: '2px solid rgba(255, 255, 255, 0.04)',
  purpleAnchorLight: 'rgba(24.3, 7.5, 68.6, 0.35)',
  purpleAnchor: ' rgba(24.3, 7.5, 68.6, 1)',
};

const GlobalStyles = createGlobalStyle`
  html,
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export { theme, GlobalStyles };
