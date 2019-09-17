import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
// import Tags from '../components/Tags';
import BlogEntryCard from '../components/BlogEntryCard';
import ErrorBoundary from '../components/ErrorBoundary';
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
  text-align: center;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  max-width: 800px;
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
      tags: string[];
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
    'This is where I blog about different Web Development topics. I write blog posts about HTML5, CSS3, JavaScript, React.js and Node.js. You can signup for my newsletter as well.',
  blogUrl: 'https://asjas.co.za/blog',
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
              <StyledLink to={`/blog/${post.frontmatter.slug}`} key={post.id}>
                <BlogEntryCard node={post} />
              </StyledLink>
            ))}
          </ErrorBoundary>
        </Section>
      </Layout>
    </>
  );
};

export default BlogPage;
