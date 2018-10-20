import React from 'react';
import {
  Container,
  Wrapper,
  Heading,
  Paragraph1,
  Paragraph2,
  Paragraph3,
} from './styles/about';

const About = () => (
  <Container>
    <Wrapper>
      <Heading>About Me</Heading>
      <Paragraph1>I enjoy working with the following:</Paragraph1>
      <Paragraph2>React.js, GatsbyJS, Node.js and GraphQL.</Paragraph2>
      <Paragraph3>
        I'm currently available for freelance or full-time remote work.
      </Paragraph3>
    </Wrapper>
  </Container>
);

export default About;
