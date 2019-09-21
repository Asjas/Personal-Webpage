import Img from 'gatsby-image';
import { DiscussionEmbed } from 'disqus-react';

import styled from '../../utils/themed-styled-components';

export const Image = styled(Img)`
  width: 100%;
  justify-self: center;
  margin-bottom: 20px;
`;

export const ProgressContainer = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  height: 8px;
  z-index: 20;

  .progress__bar {
    background: hsl(341, 79%, 45%);
    height: 8px;
    width: 0%;
  }
`;

export const Article = styled.article`
  header {
    margin-bottom: 15px;
    display: grid;

    .post__heading {
      margin-bottom: 30px;
      justify-self: center;
    }

    .post__dates {
      margin-top: 20px;
    }

    .post__date {
      justify-self: left;
      background: ${props => props.theme.color.black};
      border-radius: 25px;
      color: ${props => props.theme.color.white};
      font-size: ${props => props.theme.fontSize.medium};
      padding: 4px 8px;
      margin-right: 10px;
    }
  }

  h2,
  h3,
  h4,
  h5 {
    margin: 20px 0 8px 0;
  }

  p {
    font-size: ${props => props.theme.fontSize.xLarge};
    line-height: calc(${props => props.theme.fontSize.xLarge} * 1.5);
    margin-top: 10px;
  }

  img {
    width: 100%;
  }

  blockquote {
    font-size: ${props => props.theme.fontSize.large};
    margin: 6px 0 6px 0;
    padding: 5px 0 5px 20px;
  }

  ul,
  ol {
    font-size: ${props => props.theme.fontSize.xLarge};
  }

  .twitter-tweet {
    width: 100% !important;
  }

  .gatsby-resp-iframe-wrapper {
    margin-top: 50px;
  }

  a {
    color: ${props => props.theme.color.primary};
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.color.primary};

    &:hover,
    &:focus {
      outline: 3px solid ${props => props.theme.color.outline};
    }

    &:visited {
      color: ${props => props.theme.color.linkVisited};
      text-decoration-color: ${props => props.theme.color.linkVisited};
    }
  }

  .gatsby-code-title {
    margin-top: 12px;
  }

  .gatsby-code-title,
  .gatsby-highlight {
    grid-column: 1 / 4 !important;
    width: 98%;
    justify-self: center;
    max-width: 700px;
  }

  .post__footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    width: 100%;

    .post__link {
      background: ${props => props.theme.color.primary};
      border-radius: 25px;
      color: ${props => props.theme.color.white};
      font-size: ${props => props.theme.fontSize.medium};
      padding: 3px 8px;
      text-decoration: none;

      &:hover,
      &:focus {
        cursor: pointer;
        background: ${props => props.theme.color.navbar};
        color: ${props => props.theme.color.white};
        outline: 3px solid ${props => props.theme.color.outline};
      }
    }

    .previous {
      justify-self: start;
      grid-column: 1;
    }

    .next {
      justify-self: end;
      grid-column: 2;
    }
  }

  /**
 * Based on Cobalt2 from Wesbos 🔥
 */

  code[class*='language-'],
  pre[class*='language-'] {
    color: ${props => props.theme.color.white};
    font-size: ${props => props.theme.fontSize.medium};
    background: none;
    font-family: ${props => props.theme.font.code};
    font-feature-settings: normal;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    font-weight: 600;
    margin-bottom: 0;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    span {
      color: ${props => props.theme.color.white};
      font-size: ${props => props.theme.fontSize.medium};
      font-family: ${props => props.theme.font.code};
    }
  }

  /* Code blocks */
  pre[class*='language-'] {
    overflow: auto;
    padding: 1em;
  }

  pre[class*='language-']::-moz-selection {
    /* Firefox */
    background: #193549;
  }

  pre[class*='language-']::selection {
    /* Safari */
    background: #193549;
  }

  /* Text Selection colour */
  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #1f4662;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection {
    text-shadow: none;
    background: #1f4662;
  }

  /* Inline code */
  code[class='language-text'] {
    color: ${props => props.theme.color.black};
    font-weight: normal;
    font-family: ${props => props.theme.font.body};
    font-size: ${props => props.theme.fontSize.xLarge};
    background-color: ${props => props.theme.color.secondary};
    white-space: normal;
    border-radius: 5px;
    padding: 0 0.2em;
  }

  .token.comment {
    color: rgb(99, 119, 119);
    font-family: ${props => props.theme.font.code};
  }

  .token.string,
  .token.url {
    font-family: ${props => props.theme.font.code};
    color: rgb(173, 219, 103);
  }

  .token.attr-value {
    font-family: ${props => props.theme.font.code};
    color: #a5ff90;
  }

  .token.attr-name,
  .token.variable {
    font-family: ${props => props.theme.font.code};
    color: #ffc600;
  }

  .token.number {
    font-family: ${props => props.theme.font.code};
    color: #ffee80;
  }

  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    font-family: ${props => props.theme.font.code};
    color: #ffc600;
  }

  .token.punctuation {
    font-family: ${props => props.theme.font.code};
    color: #fff;
  }

  .token.selector,
  .token.doctype {
    font-family: ${props => props.theme.font.code};
    color: rgb(199, 146, 234);
    font-style: 'italic';
  }

  .token.class-name {
    font-family: ${props => props.theme.font.code};
    color: #fb94ff;
  }

  .token.tag {
    font-family: ${props => props.theme.font.code};
    color: #85ffff;
  }

  .token.keyword {
    color: #ff9d00;
    font-style: italic;
  }

  .token.operator {
    color: #ffc600;
    font-family: ${props => props.theme.font.code};
  }

  .token.boolean {
    color: rgb(255, 88, 116);
    font-family: ${props => props.theme.font.code};
  }

  .token.property {
    color: rgb(128, 203, 196);
    font-family: ${props => props.theme.font.code};
  }

  .token.namespace {
    color: rgb(178, 204, 214);
    font-family: ${props => props.theme.font.code};
  }

  pre[data-line] {
    padding: 1em 0 1em 3em;
    position: relative;
  }

  .gatsby-highlight-code-line {
    background-color: #21658a;
    font-family: ${props => props.theme.font.code};
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid ${props => props.theme.color.primary};
  }

  .gatsby-highlight {
    margin-bottom: 1.75rem;
    border-radius: 10px;
    font-family: ${props => props.theme.font.code};
    background: #193549;
    -webkit-overflow-scrolling: touch;
    overflow: auto;
  }

  .gatsby-highlight pre[class*='language-'] {
    float: left;
    min-width: 100%;
  }

  .gatsby-code-title {
    margin-bottom: -0.8rem;
    font-family: ${props => props.theme.font.body};
    padding: 10px 0 10px 15px;
    font-size: ${props => props.theme.fontSize.small};
    background-color: ${props => props.theme.color.primary};
    color: white;
    z-index: 0;
    border-top-left-radius: 0.9rem;
    border-top-right-radius: 0.9rem;
  }
`;

export const Disqus = styled(DiscussionEmbed)`
  margin-top: 50px;
`;
