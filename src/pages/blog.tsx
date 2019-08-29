import React from 'react';
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
  margin-bottom: 25px;
`;

export const GET_ALL_POSTS = graphql`
  query GET_ALL_POSTS {
    allSanityPost(filter: { slug: { current: { ne: null } } }) {
      edges {
        node {
          title
          updatedAt
          publishedAt
          slug {
            current
          }
          categories {
            title
          }
        }
      }
    }
  }
`;

interface IAllSanityProject {
  allSanityPost: {
    edges: Array<IPost>;
  };
}

interface IPost {
  node: {
    id: string;
    title: string;
    description: string;
    slug: {
      current: string;
    };
  };
}

const seo = {
  title: 'A-J Roos | Blog Posts',
  description:
    'This is where I blog about different Web Development topics. I write blog posts about HTML5, CSS3, JavaScript, React.js and Node.js. You can signup for my newsletter as well.',
  blogUrl: 'https://asjas.co.za/blog',
};

const BlogPage: React.FunctionComponent = (): React.ReactElement => {
  const { allSanityPost: posts } = useStaticQuery(GET_ALL_POSTS);

  return (
    <>
      <SEO {...seo} />
      <Layout>
        <Section>
          <header>
            <Heading>My collection of blog posts.</Heading>
            {/* <Tags /> */}
          </header>
          {posts.edges.map(({ node: post }) => (
            <Link to={`/blog/${post.slug.current}`} key={post.id}>
              <h2>{post.title}</h2>
            </Link>
          ))}
        </Section>
      </Layout>
    </>
  );
};

export default BlogPage;
