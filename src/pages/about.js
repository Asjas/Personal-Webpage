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
  overflow: hidden;

  ${media.small`
      min-height: 50vh;
      max-width: 768px;
  `};
`;

const Wrapper = styled.div`
  position: absolute;
  width: 330px;
  z-index: 2;

  ${media.small`
    width: 220px;
  `};
`;

const Heading = styled.h1`
  font-size: 2.8rem;
  letter-spacing: 0.03rem;
  line-height: 3rem;
  position: relative;
  right: 45px;
  top: 65px;
  transform: rotate(-6deg);

  ${media.small`
    font-size: 2.4rem;
    line-height: 2.4rem;
    right: 32px;
    top: 75px;
  `};
`;

const Paragraph1 = styled.p`
  font-size: 1.9rem;
  letter-spacing: 0.02rem;
  margin-bottom: 30px;
  position: relative;
  right: 37px;
  top: 90px;
  transform: rotate(-6deg);

  ${media.small`
    font-size: 1.7rem;
    right: 26px;
    top: 80px;
  `};
`;

const Paragraph2 = styled.p`
  font-size: 1.9rem;
  letter-spacing: 0.02rem;
  position: relative;
  right: 30px;
  top: 90px;
  transform: rotate(-6deg);

  ${media.small`
    font-size: 1.7rem;
    right: 22px;
    top: 60px;
  `};
`;

const Paragraph3 = styled.p`
  font-size: 1.9rem;
  letter-spacing: 0.02rem;
  position: relative;
  right: 22px;
  top: 90px;
  transform: rotate(-6deg);

  ${media.small`
    font-size: 1.7rem;
    right: 15px;
    top: 70px;
  `};
`;

const StyledImg = styled(Img)`
  height: auto;
  margin-top: 10px;
  width: 1200px;

  ${media.medium`
    height: auto;
    width: 1024px;
  `};

  ${media.small`
    height: auto;
    width: 768px;
  `};
`;

const About = ({ data }) => (
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
      sizes={data.aboutImage.sizes}
    />
  </Container>
);

export const pageQuery = graphql`
  query AboutPageQuery {
    aboutImage: imageSharp(id: { regex: "/aboutpage/" }) {
      sizes(maxWidth: 1200, quality: 92) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default About;
