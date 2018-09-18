import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import {
  Container,
  Wrapper,
  Heading,
  Paragraph,
  StyledImg,
} from '../ui/pages/index';

const IndexPage = ({ data }) => (
  <Layout>
    <Container>
      <Wrapper>
        <Heading>Front-End Web Developer</Heading>
        <Paragraph>A-J Roos</Paragraph>
      </Wrapper>
      <StyledImg
        title="Table with items on it"
        alt="Candle and plates on a white background"
        fluid={data.homepageImage.childImageSharp.fluid}
      />
    </Container>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

/* eslint no-undef: "off" */
export const HOMEPAGE_QUERY = graphql`
  query HOMEPAGE_QUERY {
    homepageImage: file(relativePath: { regex: "/homepage/" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 75) {
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
