import { createGlobalStyle } from './themed-styled-components';

export const myTheme = {
  font: {
    heading: "'Playfair Display', serif",
    body: "'Montserrat', sans-serif",
    code: 'VictorMono',
    retro: 'Contender',
    handwriting: "'Indie Flower', cursive",
  },
  fontSize: {
    heading1: '3.6rem',
    heading2: '3.2rem',
    heading3: '2.8rem',
    heading4: '2.4rem',
    heading5: '2.1rem',
    heading6: '2rem',
    xLarge: '1.8rem',
    large: '1.7rem',
    medium: '1.6rem',
    small: '1.5rem',
    tags: '1.4rem',
  },
  color: {
    primary: 'hsl(341, 79%, 45%)',
    secondary: 'hsl(38, 94%, 87%)',
    white: '#ffffff',
    black: '#292522',
    error: 'hsl(1, 84%, 44%)',
    navbar: 'hsl(247, 15%, 2%)',
    outline: 'hsl(194, 47%, 56%)',
    linkVisited: '#6ca19e',
    card:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
  },
  navbarLinkLarge: '3rem',
  mobileQuery: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '1920px',
  },
};

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    text-rendering: optimizelegibility;
    hyphens: auto;
    -ms-hyphens: auto;
    font-feature-settings: 'liga1' on;
    -moz-font-feature-settings: 'liga' on;
    -webkit-hyphens: auto;
    -moz-osx-font-smoothing: grayscale;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    font-size: 10px;
    line-height: 1.45;
    margin: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    color: ${props => props.theme.color.secondary};
    background: ${props => props.theme.color.primary};
  }

  ::-moz-selection {
    color: ${props => props.theme.color.secondary};
    background: ${props => props.theme.color.primary};
  }

  @font-face {
    font-family: ${props => props.theme.font.retro};
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url('assets/fonts/Contender.woff2') format('woff2'),
      url('assets/fonts/Contender.woff') format('woff'),
      url('assets/fonts/Contender.ttf') format('truetype');
  }

  @font-face {
    font-family: ${props => props.theme.font.code};
    font-style: normal;
    font-display: swap;
    src: url('assets/fonts/VictorMono-Light.woff2') format('woff2'),
      url('assets/fonts/VictorMono-Light.woff') format('woff'),
      url('assets/fonts/VictorMono-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: ${props => props.theme.font.code};
    font-style: italic;
    font-display: swap;
    src: url('assets/fonts/VictorMono-Light.woff2') format('woff2'),
      url('assets/fonts/VictorMono-Light.woff') format('woff'),
      url('assets/fonts/VictorMono-ItalicLight.woff2') format('truetype');
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.color.primary};
    font-family: ${props => props.theme.font.heading};
    font-weight: 500;
    margin: 0;
    text-shadow: 1px 2px 2px #aaa;
  }

  h1 {
    font-size: ${props => props.theme.fontSize.heading1};
  }

  h2 {
    font-size: ${props => props.theme.fontSize.heading2};
  }

  h3 {
    font-size: ${props => props.theme.fontSize.heading3};
  }

  h4 {
    font-size: ${props => props.theme.fontSize.heading4};
  }

  h5 {
    font-size: ${props => props.theme.fontSize.heading5};
  }

  h6 {
    font-size: ${props => props.theme.fontSize.heading6};
  }

  blockquote {
    background-color: ${props => props.theme.color.secondary};
    border-left: 4px solid ${props => props.theme.color.primary};
    color: ${props => props.theme.color.black};
    font-family: ${props => props.theme.font.body};
    font-size: ${props => props.theme.fontSize.small};
    font-style: italic;
    margin-left: 0;
    margin: 0;
    padding: 0 20px;
    width: 100%;
  }

  ul,
  ol {
    margin-left: 0;
  }

  p,
  span,
  input,
  textarea,
  label,
  ul,
  ol {
    color: ${props => props.theme.color.black};
    font-family: ${props => props.theme.font.body};
    font-size: ${props => props.theme.fontSize.large};
    margin: 6px 0;
  }

  p,
  span,
  input,
  textarea,
  label {

    line-height: calc(${props => props.theme.fontSize.large} * 1.7);
  }

  a {
    font-family: ${props => props.theme.font.body};
    text-decoration: none;
  }

  input:focus,
  textarea:focus {
    outline: 3px solid ${props => props.theme.color.outline};
  }
`;
