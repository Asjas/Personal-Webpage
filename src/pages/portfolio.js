import React, { Component } from 'react';
import Layout from '../components/layout';
import { Container } from '../ui/pages/portfolio';
import Project from '../components/project';

const PortfolioPage = ({ data }) => (
  <Layout>
    <Container>
      {data.allPrismicProjects.edges.map(project => (
        <Project key={project.node.id} projectQuery={project.node} />
      ))}
    </Container>
  </Layout>
);

/* eslint no-undef: "off" */
export const projectQuery = graphql`
  query projectQuery {
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
              localFile {
                childImageSharp {
                  sizes(maxWidth: 800, quality: 92) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
              alt
              url
            }
            link {
              url
            }
          }
        }
      }
    }
  }
`;

export default PortfolioPage;
