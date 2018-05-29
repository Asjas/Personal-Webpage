import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { media } from '../utils/media';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;

  ${media.small`
      max-width: 768px;
  `};
`;

const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
`;

const Heading = styled.h1`
  font-size: 3rem;
  left: 120px;
  letter-spacing: 0.04rem;
  line-height: 3.3rem;
  position: relative;
  top: 150px;

  ${media.medium`
    font-size: 2.8rem;
    left: 100px;
    line-height: 3rem;
    top: 120px;
  `};

  ${media.small`
    font-size: 2.6rem;
    left: 90px;
    line-height: 2.8rem;
    top: 80px;
  `};

  ${media.xSmall`
    font-size: 2.1rem;
    line-height: 2.3rem;
    left: 90px;
    width: 80%;
    top: 55px;
  `};
`;

const Paragraph = styled.p`
  font-size: 2.7rem;
  left: 450px;
  letter-spacing: 0.04rem;
  position: relative;
  top: 150px;

  ${media.medium`
    font-size: 2.5rem;
    left: 380px;
    top: 120px;
  `};

  ${media.small`
    font-size: 2.3rem;
    left: 330px;
    top: 80px;
  `};

  ${media.xSmall`
    font-size: 1.9rem;
    left: 170px;
    top: 55px;
  `};
`;

const StyledImg = styled(Img)`
  height: auto;
  margin-top: 10px;
  width: 1200px;

  ${media.medium`
    height: auto;
    max-width: 900px;
  `};

  ${media.small`
    height: auto;
    max-width: 768px;
  `};

  ${media.xSmall`
    height: auto;
    max-width: 576px;
  `};
`;

const Home = props => (
  <Container>
    <Wrapper>
      <Heading>Front-End Web Developer</Heading>
      <Paragraph>A-J Roos</Paragraph>
    </Wrapper>
    <StyledImg
      title="Home Page Image"
      alt="Candle and plates on a white background"
      sizes={props.homepageImage.sizes}
    />
  </Container>
);

export default Home;
