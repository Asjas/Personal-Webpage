import React, { Component } from 'react';
import { Container } from '../ui/pages/portfolio';
import Project from '../components/project';

const PortfolioPage = ({ data }) => (
  <Container>
    {data.allPrismicProjects.edges.map(project => (
      <Project key={project.node.id} projectQuery={project.node} />
    ))}
  </Container>
);

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
