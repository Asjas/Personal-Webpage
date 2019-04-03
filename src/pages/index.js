import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const HOME_PAGE_IMAGE = graphql`
  query HOME_PAGE_IMAGE {
    file(relativePath: { regex: "/messy-desk.jpg/" }) {
      childImageSharp {
        fixed(height: 400, quality: 95) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <>
    <SEO />
    <Layout>
      <section className="homepage">
        <p className="homepage__quote">
          "There are only two hard things in Computer Science: cache invalidation and naming things"
          - Phil Karlton
        </p>
        <Img className="homepage__image" fixed={data.file.childImageSharp.fixed} alt="" />
      </section>
    </Layout>
  </>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.shape({
          height: PropTypes.number.isRequired,
          width: PropTypes.number.isRequired,
          src: PropTypes.string.isRequired,
          srcSet: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default IndexPage;
