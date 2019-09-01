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
    allSanityPost(
      sort: { order: DESC, fields: _createdAt }
      filter: { slug: { current: { ne: null } } }
    ) {
      edges {
        node {
          id
          title
          publishedAt
          updatedAt
          slug {
            current
          }
          categories {
            title
          }
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          author {
            name
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

interface ICategories {
  id: string;
  title: string;
}

export interface IPost {
  node: {
    id: string;
    title: string;
    description: string;
    publishedAt: string;
    updatedAt: string;
    slug: {
      current: string;
    };
    categories: Array<ICategories>;
    mainImage: {
      asset: {
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
    author: {
      name: string;
      image: {
        asset: {
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
}

interface IAllSanityPost {
  allSanityPost: {
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
  const { allSanityPost: posts } = useStaticQuery(GET_ALL_POSTS) as IAllSanityPost;

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
              <StyledLink to={`/blog/${post.slug.current}`} key={post.id}>
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
