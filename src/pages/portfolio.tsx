import * as React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout/index';
import Project from '../components/Project';
import styled from '../utils/themed-styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 800px)
    minmax(1.2rem, 1fr);
  justify-items: center;
  gap: 40px 0;

  & > * {
    grid-column: 2;
  }
`;

export const Heading = styled.h1`
  font-size: ${props => props.theme.fontSize.heading1};
  text-align: center;
  margin: 0 auto 25px 0;

  @media screen and (max-width: ${props => props.theme.mobileQuery.tablet}) {
    width: 90%;
  }
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 800px)
    minmax(1.2rem, 1fr);
  justify-items: center;
  gap: 40px 0;

  & > * {
    grid-column: 2;
  }
`;

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

interface Props {
  data: {
    allPrismicProjects: {
      edges: Node[];
    };
  };
}

interface Node {
  node: {
    id: string;
    data: {
      title: {
        text: string;
      };
      description: {
        text: string;
      };
      image: {
        localFile: {
          childImageSharp: {
            fluid: {
              aspectRatio: number;
              base64: string;
              sizes: string;
              src: string;
              srcSet: string;
              srcSetWebp: string;
              srcWebp: string;
            };
          };
        };
        alt: string;
      };
      github_url: {
        url: string;
      };
      website_url: {
        url: string;
      };
    };
  };
}

const seo = {
  title: 'A-J Roos | Portfolio',
  description:
    'This is a collection of some of my Web Development projects. A complete collection of my projects can be found on my Github page at https://github.com/asjas.',
  siteUrl: 'https://asjas.co.za/portfolio',
};

const PortfolioPage: React.FunctionComponent<Props> = ({ data }): React.ReactElement => (
  <>
    <SEO {...seo} />
    <Layout>
      <Section>
        <Heading>This is a collection of projects that I have worked on.</Heading>
        <Div className="projects">
          {data.allPrismicProjects.edges.map(({ node }) => (
            <Project key={node.id} data={node.data} />
          ))}
        </Div>
      </Section>
    </Layout>
  </>
);

export default PortfolioPage;
