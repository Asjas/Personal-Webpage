import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const HOME_PAGE_IMAGE = graphql`
  query HOME_PAGE_IMAGE {
    file(relativePath: { regex: "/messy-desk.jpg/" }) {
      childImageSharp {
        fixed(width: 400, height: 400, quality: 95) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <section className="homepage">
      {console.log(data)}
      <p className="homepage-quote">
        "There are only two hard things in Computer Science: cache invalidation and naming things" -
        Phil Karlton
      </p>
      <Img
        className="homepage-image"
        fixed={data.file.childImageSharp.fixed}
        title="A messy desk with a computer."
        alt="A messy desk with a computer."
      />
    </section>
  </Layout>
);

export default IndexPage;
