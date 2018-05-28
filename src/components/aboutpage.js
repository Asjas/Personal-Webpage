import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { media } from '../utils/media';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;

  ${media.small`
      max-width: 768px;
  `};
`;

const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: 330px;

  ${media.small`
    width: 220px;
  `};
`;

const Heading = styled.h1`
  position: relative;
  top: 65px;
  right: 45px;
  font-size: 2.8rem;
  line-height: 3rem;
  transform: rotate(-6deg);

  ${media.small`
    top: 75px;
    right: 32px;
    font-size: 2.4rem;
    line-height: 2.4rem;
  `};
`;

const Paragraph1 = styled.p`
  position: relative;
  top: 90px;
  right: 37px;
  font-size: 1.9rem;
  transform: rotate(-6deg);
  margin-bottom: 30px;

  ${media.small`
    top: 80px;
    right: 26px;
    font-size: 1.7rem;
  `};
`;

const Paragraph2 = styled.p`
  position: relative;
  top: 90px;
  right: 30px;
  font-size: 1.9rem;
  transform: rotate(-6deg);

  ${media.small`
    top: 60px;
    right: 22px;
    font-size: 1.7rem;
  `};
`;

const Paragraph3 = styled.p`
  position: relative;
  top: 90px;
  right: 22px;
  font-size: 1.9rem;
  transform: rotate(-6deg);

  ${media.small`
    top: 70px;
    right: 15px;
    font-size: 1.7rem;
  `};
`;

const StyledImg = styled(Img)`
  height: auto;
  width: 1200px;
  margin-top: 10px;

  ${media.medium`
    width: 1024px;
    height: auto;
  `};

  ${media.small`
    width: 768px;
    height: auto;
  `};
`;

const AboutPage = props => (
  <Container>
    <Wrapper>
      <Heading>About Me</Heading>
      <Paragraph1>I enjoy working with the following:</Paragraph1>
      <Paragraph2>React.js, GatsbyJS, Node.js and GraphQL.</Paragraph2>
      <Paragraph3>
        I'm currently available for freelance or full-time remote work.
      </Paragraph3>
    </Wrapper>
    <StyledImg
      title="Home Page Image"
      alt="Candle and plates on a white background"
      sizes={props.aboutImage.sizes}
    />
  </Container>
);

export default AboutPage;
