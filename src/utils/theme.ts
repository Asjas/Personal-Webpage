import { createGlobalStyle } from './themed-styled-components';

export const myTheme = {
  font: {
    heading: "'Playfair Display', serif",
    body: "'Montserrat', sans-serif",
    code: 'VictorMono',
    retro: "'Luckiest Guy', cursive",
    handwriting: "'Indie Flower', cursive",
  },
  fontSize: {
    heading1: '4.2rem',
    heading2: '3.8rem',
    heading3: '3.4rem',
    heading4: '3rem',
    heading5: '2.6rem',
    heading6: '2.2rem',
    navbarLinkLarge: '3rem',
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
    outline: 'hsl(194, 77%, 42%)',
    linkVisited: 'hsl(206, 80%, 43%)',
    card:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
  },
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
    hyphens: auto;
    font-feature-settings: 'liga1' on;
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
    color: ${props => props.theme.color.white};
    background: ${props => props.theme.color.primary};
  }

  ::-moz-selection {
    color: ${props => props.theme.color.white};
    background: ${props => props.theme.color.primary};
  }

  @font-face {
    font-family: ${props => props.theme.font.code};
    font-style: normal;
    font-display: swap;
    src: url('https://asjas.xyz/assets/fonts/VictorMono-Light.woff2') format('woff2'),
      url('https://asjas.xyz/assets/fonts/VictorMono-Light.woff') format('woff'),
      url('https://asjas.xyz/assets/fonts/VictorMono-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: ${props => props.theme.font.code};
    font-style: italic;
    font-display: swap;
    src: url('https://asjas.xyz/assets/fonts/VictorMono-ItalicLight.woff2') format('woff2'),
      url('https://asjas.xyz/assets/fonts/VictorMono-ItalicLight.woff') format('woff'),
      url('https://asjas.xyz/assets/fonts/VictorMono-ItalicLight.woff2') format('truetype');
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.color.primary};
    font-family: ${props => props.theme.font.heading};
    line-height: 1.15;
    font-weight: 500;
    margin: 25px 0;
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
    line-height: 1.45;
    margin: 6px 0;
  }

  a {
    font-family: ${props => props.theme.font.body};
    color: ${props => props.theme.color.black};
    text-decoration: none;
  }

  input:focus,
  textarea:focus {
    outline: 3px solid ${props => props.theme.color.outline};
  }
`;
