import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    color: $secondaryColor;
    background: $primaryColor;
  }

  ::-moz-selection {
    color: $secondaryColor;
    background: $primaryColor;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: $headingFontColor;
    margin: 0;
  }

  blockquote {
    margin: 0;
    background-color: $secondaryColor;
    color: $bodyFontColor;
    padding: 0 20px;
    margin-left: 0;
    border-left: 4px solid $primaryColor;
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
  label {
    color: $bodyFontColor;
  }

  input:focus,
  textarea:focus {
    outline: 3px solid $outlineColor;
  }

  font-face {
  font-family: Contender;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url('https://asjas.sfo2.cdn.digitaloceanspaces.com/Contender.woff2') format('woff2'),
    url('https://asjas.sfo2.cdn.digitaloceanspaces.com/Contender.woff') format('woff'),
    url('https://asjas.sfo2.cdn.digitaloceanspaces.com/Contender.ttf') format('truetype');
  }

  @font-face {
    font-family: 'VictorMono';
    font-style: normal;
    font-display: swap;
    src: url('https://asjas.sfo2.cdn.digitaloceanspaces.com/VictorMono-Light.woff2') format('woff2'),
      url('https://asjas.sfo2.cdn.digitaloceanspaces.com/VictorMono-Light.woff') format('woff'),
      url('https://asjas.sfo2.cdn.digitaloceanspaces.com/VictorMono-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'VictorMono';
    font-style: italic;
    font-display: swap;
    src: url('https://asjas.sfo2.cdn.digitaloceanspaces.com/VictorMono-ItalicLight.woff2')
        format('woff2'),
      url('https://asjas.sfo2.cdn.digitaloceanspaces.com/VictorMono-ItalicLight.woff') format('woff'),
      url('https://asjas.sfo2.cdn.digitaloceanspaces.com/VictorMono-ItalicLight.ttf')
        format('truetype');
  }

  html,
  body {
    font-size: 10px;
    line-height: 1.45;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    font-family: $headingFontFamily;
    text-shadow: 1px 2px 2px #aaa;
  }

  h1 {
    font-size: $heading1;
  }

  h2 {
    font-size: $heading2;
  }

  h3 {
    font-size: $heading3;
  }

  h4 {
    font-size: $heading4;
  }

  h5 {
    font-size: $heading5;
  }

  blockquote {
    font-size: $fontSmall;
    font-style: italic;
    font-family: $bodyFontFamily;
  }

  p,
  span,
  input,
  textarea,
  label,
  ul,
  ol {
    font-family: $bodyFontFamily;
    font-size: $fontMedium;
    margin: 6px 0;
  }

  a {
    font-family: $bodyFontFamily;
    text-decoration: none;
  }

`;
