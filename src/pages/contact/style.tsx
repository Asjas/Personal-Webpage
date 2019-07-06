import styled from 'styled-components';

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  justify-content: flex-start;

  @media screen and(max-width: $laptop) {
    flex-direction: column;
  }

  @media screen and(max-width: $tablet) {
    width: 400px;
  }

  @media screen and(max-width: $mobileL) {
    width: 350px;
  }

  @media screen and(max-width: $mobileM) {
    width: 300px;
  }
`;

export const Heading = styled.h1`
  width: 100%;
  margin-bottom: 25px;
`;

export const Paragraph = styled.p`
  margin: 0 auto;
  font-size: $fontLarge;
  padding: 10px 0;
  width: 100%;

  a {
    color: $black;
    text-decoration: underline;
    text-decoration-color: $primaryColor;

    &:hover,
    &:focus {
      color: $primaryColor;
      outline: 3px solid $outlineColor;
    }

    &:visited {
      color: $linkVisitedColor;
    }
  }
`;
