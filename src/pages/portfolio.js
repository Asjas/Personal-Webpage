import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';
import Navbar from '../components/navbar';
import Project from '../components/project';
import Footer from '../components/footer';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 1200px;
  margin: 0 auto;
`;

const PortfolioPage = ({ data }) => (
  <div>
    <Navbar />
    <Container>
      {data.allPrismicProjects.edges.map(project => (
        <Project key={project.node.id} projectQuery={project.node} />
      ))}
    </Container>
    <Footer />
  </div>
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
