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
`;

const Heading = styled.h1`
  position: relative;
  top: 150px;
  left: 120px;
  font-size: 3rem;
  line-height: 3.3rem;

  ${media.medium`
    top: 120px;
    left: 100px;
    font-size: 2.8rem;
    line-height: 3rem;
  `};

  ${media.small`
    top: 80px;
    left: 90px;
    font-size: 2.6rem;
    line-height: 2.8rem;
  `};
`;

const Paragraph = styled.p`
  position: relative;
  top: 150px;
  left: 450px;
  font-size: 2.7rem;

  ${media.medium`
    top: 120px;
    left: 380px;
    font-size: 2.5rem;
  `};

  ${media.small`
    top: 80px;
    left: 330px;
    font-size: 2.3rem;
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

const HomePage = props => (
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

export default HomePage;
