import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Project from '../components/Project';

export const GET_PRISMIC_PROJECTS = graphql`
  query GET_PRISMIC_PROJECTS {
    allPrismicProjects {
      edges {
        node {
          id
          data {
            title {
              text
            }
            description {
              text
            }
            image {
              alt
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 98) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            github_url {
              url
            }
            website_url {
              url
            }
          }
        }
      }
    }
  }
`;

const seo = {
  title: 'A-J Roos | Portfolio',
  description:
    'This is a collection of some of my Web Development projects. A complete collection of my projects can be found on my Github page at https://github.com/asjas.',
  siteUrl: 'https://asjas.co.za/portfolio',
};

const PortfolioPage = ({ data }) => (
  <>
    <SEO {...seo} />
    <Layout>
      <h1 className="portfolio__heading">
        This is a collection of projects that I have worked on.
      </h1>
      <div className="projects">
        {data.allPrismicProjects.edges.map(({ node }) => (
          <Project key={node.id} data={node.data} />
        ))}
      </div>
    </Layout>
  </>
);

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    allPrismicProjects: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            data: PropTypes.shape({
              title: PropTypes.shape({
                text: PropTypes.string.isRequired,
              }).isRequired,
              description: PropTypes.shape({
                text: PropTypes.string.isRequired,
              }).isRequired,
              image: PropTypes.shape({
                alt: PropTypes.string.isRequired,
                localFile: PropTypes.shape({
                  childImageSharp: PropTypes.shape({
                    fluid: PropTypes.any.isRequired,
                  }).isRequired,
                }).isRequired,
              }).isRequired,
              github_url: PropTypes.shape({
                url: PropTypes.string.isRequired,
              }).isRequired,
              website_url: PropTypes.shape({
                url: PropTypes.string.isRequired,
              }).isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PortfolioPage;
