import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Paragraph } from '../styles/portfolio';
import Layout from '../components/Layout';

const PortfolioPage = ({
  data: {
    allPrismicProjects: { edges },
  },
}) => (
  <Layout>
    <Container>
      <Paragraph>To be added</Paragraph>
    </Container>
  </Layout>
);

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    allPrismicProjects: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            data: PropTypes.shape({
              title: PropTypes.object.isRequired,
              description: PropTypes.object.isRequired,
              image: PropTypes.object.isRequired,
              website_url: PropTypes.object.isRequired,
              github_url: PropTypes.object.isRequired,
            }).isRequired,
            slugs: PropTypes.array.isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

/* eslint no-undef: "off" */
export const GET_PRISMIC_PROJECTS = graphql`
  query GET_PRISMIC_PROJECTS {
    allPrismicProjects {
      edges {
        node {
          slugs
          data {
            title {
              text
            }
            description {
              text
            }
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1350, quality: 92) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            website_url {
              url
            }
            github_url {
              url
            }
          }
        }
      }
    }
  }
`;

export default PortfolioPage;
