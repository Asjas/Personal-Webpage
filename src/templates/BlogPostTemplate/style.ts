import styled from '../../utils/themed-styled-components';
import { DiscussionEmbed } from 'disqus-react';

export const Article = styled.article`
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 120ch)
    minmax(1.2rem, 1fr);

  & > * {
    grid-column: 2;
  }

  .progress__container {
    top: 0;
    position: fixed;
    width: 100%;
    height: 8px;
    z-index: 20;
  }

  .progress__bar {
    background: $primaryColor;
    height: 8px;
    width: 0%;
  }

  header {
    margin-bottom: 30px;

    .post__heading {
      margin-bottom: 30px;
    }

    .post__image {
      width: 100%;
      justify-self: center;

      img {
        border: 0;
      }
    }

    .post__date {
      background: $black;
      display: block;
      border-radius: 25px;
      color: $white;
      font-size: $fontMedium;
      padding: 3px 8px;
      width: 100%;
    }
  }

  h2,
  h3,
  h4,
  h5 {
    margin: 20px 0 8px 0;
  }

  p {
    font-size: $fontXLarge;
    margin-top: 10px;
  }

  img {
    border: 2px solid $black;
  }

  blockquote p {
    margin: 6px 0 6px 0;
  }

  ul,
  ol {
    font-size: $fontXLarge;
  }

  .twitter-tweet {
    width: 100% !important;
  }

  a {
    color: $primaryColor;
    text-decoration: underline;
  }

  a:hover {
    color: $outlineColor;
    text-decoration: underline;
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
      background: $primaryColor;
      border-radius: 25px;
      color: $white;
      font-size: $fontMedium;
      padding: 3px 8px;
      text-decoration: none;
    }

    .post__link:hover {
      background: $black;
    }

    .previous {
      justify-self: start;
    }

    .next {
      justify-self: end;
    }
  }
`;

export const Disqus = styled(DiscussionEmbed)`
  margin-top: 50px;
`;
