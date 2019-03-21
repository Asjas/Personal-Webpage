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
                  fixed(width: 600, quality: 92) {
                    ...GatsbyImageSharpFixed_withWebp_tracedSVG
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

const seo = {
  title: 'A-J Roos | Portfolio',
  description:
    'This is a collection of some of my Web Development projects. A complete collection of my projects can be found on my Github page at https://github.com/asjas.',
  siteUrl: 'https://asjas.co.za/portfolio',
};

const PortfolioPage = ({ data }) => (
  <Layout>
    <SEO {...seo} />
    <h1 className="portfolio-heading">This is a collection of projects that I have worked on.</h1>
    <section className="projects">
      {data.allPrismicProjects.edges.map(({ node }) => (
        <Project key={node.id} data={node.data} />
      ))}
    </section>
  </Layout>
);

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    allPrismicProjects: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            data: PropTypes.shape({
              title: PropTypes.object.isRequired,
              description: PropTypes.object.isRequired,
              image: PropTypes.object.isRequired,
              website_url: PropTypes.object.isRequired,
              github_url: PropTypes.object.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PortfolioPage;
