import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
// import Tags from '../components/Tags';
import BlogEntryCard from '../components/BlogEntryCard';
import ErrorBoundary from '../components/ErrorBoundary';
import styled from '../utils/themed-styled-components';

export const Section = styled.section`
  display: grid;
  gap: 40px 0;
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const GET_ALL_POSTS = graphql`
  query GET_ALL_POSTS {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { type: { eq: "blogpost" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date
            updated_at
            featured_image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 95) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`;

export interface IPost {
  node: {
    id: string;
    frontmatter: {
      title: string;
      slug: string;
      date: string;
      updated_at: string;
      featured_image: {
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
      tags: string[];
    };
  };
}

interface IAllMDXPost {
  allMdx: {
    edges: Array<IPost>;
  };
}

const seo = {
  title: 'Blog Posts | A-J Roos',
  description:
    'I blog about different Web Development topics. I write blog posts about HTML5, CSS3, JavaScript, React.js, Gatsby.js, Node.js and anything Serverless.',
  blogUrl: 'https://asjas.xyz/blog/',
};

const BlogPage = () => {
  const { allMdx: posts } = useStaticQuery(GET_ALL_POSTS) as IAllMDXPost;

  return (
    <>
      <SEO {...seo} />
      <Layout>
        <Section>
          <header>
            <Heading>My collection of blog posts.</Heading>
            {/* <Tags /> */}
          </header>
          <ErrorBoundary>
            {posts.edges.map(({ node: post }) => (
              <BlogEntryCard key={post.id} node={post} />
            ))}
          </ErrorBoundary>
        </Section>
      </Layout>
    </>
  );
};

export default BlogPage;
