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

  ${media.medium`
      max-width: 918px;
  `};

  ${media.small`
      height: 85vh;
      max-width: 768px;
  `};

  ${media.xSmall`
      max-width: 576px;
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
  line-height: 3rem;
  position: relative;
  top: 150px;

  ${media.medium`
    font-size: 2.5rem;
    left: 380px;
    line-height: 2.7rem;
    top: 120px;
  `};

  ${media.small`
    font-size: 2.3rem;
    line-height: 2.5rem;
    left: 330px;
    top: 80px;
  `};

  ${media.xSmall`
    font-size: 1.9rem;
    line-height: 2.1rem;
    left: 170px;
    top: 55px;
  `};
`;

const StyledImg = styled(Img)`
  height: auto;
  margin-top: 10px;
  width: 1200px;

  ${media.medium`
    max-width: 900px;
  `};

  ${media.small`
    margin-top: 20px;
    max-width: 768px;
  `};

  ${media.xSmall`
    max-width: 576px;
  `};
`;

const IndexPage = ({ data }) => (
  <Container>
    <Wrapper>
      <Heading>Front-End Web Developer</Heading>
      <Paragraph>A-J Roos</Paragraph>
    </Wrapper>
    <StyledImg
      title="Table with items on it"
      alt="Candle and plates on a white background"
      sizes={data.homepageImage.sizes}
    />
  </Container>
);

export default IndexPage;

export const pageQuery = graphql`
  query HomePageQuery {
    homepageImage: imageSharp(id: { regex: "/homepage/" }) {
      sizes(maxWidth: 1200, quality: 92) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
