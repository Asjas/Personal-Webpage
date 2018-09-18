import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
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
  <Layout>
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
        fluid={data.aboutpageImage.childImageSharp.fluid}
      />
    </Container>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

/* eslint no-undef: "off" */
export const ABOUTPAGE_QUERY = graphql`
  query ABOUTPAGE_QUERY {
    aboutpageImage: file(relativePath: { regex: "/aboutpage/" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 92) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          sizes
        }
      }
    }
  }
`;

export default About;
