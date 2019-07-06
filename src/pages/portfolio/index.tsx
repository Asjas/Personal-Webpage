import * as React from 'react';
import { graphql } from 'gatsby';

import SEO from '../../components/SEO';
import Layout from '../../components/Layout/index';
import Project from '../../components/Project';

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
    {console.log(data)}
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

export default PortfolioPage;
