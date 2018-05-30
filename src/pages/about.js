import React from 'react';
import {
  Container,
  Wrapper,
  Heading,
  Paragraph1,
  Paragraph2,
  Paragraph3,
  StyledImg,
} from '../ui/pages/about';

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
