import React from 'react';
import {
  Container,
  Wrapper,
  Heading,
  Paragraph,
  StyledImg,
} from '../ui/pages/index';

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
