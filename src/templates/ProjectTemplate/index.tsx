import React, { useEffect } from 'react';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from 'gatsby';

import SEO from '../../components/SEO';
import Layout from '../../components/Layout';

// import * as Styled from './style';

export const GET_PROJECT_PAGE = graphql`
  query GET_PROJECT_PAGE($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        meta_desc
        featured_image {
          childImageSharp {
            fluid(maxWidth: 600, quality: 98) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

interface IProject {
  pageContext: {
    slug: string;
  };
  data: {
    mdx: {
      frontmatter: {
        title: string;
        slug: string;
        meta_desc: string;
        featured_image: {
          childImageSharp: {
            fluid: {
              aspectRatio: number;
              base64: string;
              sizes: string;
              src: string;
              srcSet: string;
              srcWebp: string;
              srcSetWebp: string;
            };
          };
        };
      };
    };
  };
}

const ProjectTemplate: React.FunctionComponent<IProject> = ({ pageContext, data: { mdx } }) => {
  const seo = {
    title: `${mdx.frontmatter.title} | A-J Roos`,
    description: `${mdx.frontmatter.meta_desc}`,
    siteUrl: `https://asjas.xyz/project/${pageContext.slug}`,
  };

  return (
    <>
      <SEO {...seo} />
      <Layout>
        <section>
          <Img fluid={mdx.frontmatter.featured_image.childImageSharp.fluid} alt={mdx.frontmatter.title} />
          <h1 data-testid={mdx.frontmatter.title}>{mdx.frontmatter.title}</h1>
          <p>{mdx.frontmatter.meta_desc}</p>
        </section>
      </Layout>
    </>
  );
};

export default ProjectTemplate;
