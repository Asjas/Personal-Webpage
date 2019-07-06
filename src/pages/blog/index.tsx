import React, { memo } from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Tags from '../../components/Tags';
import BlogEntryCard from '../../components/BlogEntryCard';
import ErrorBoundary from '../../components/ErrorBoundary';

export const GET_ALL_POSTS = graphql`
  query GET_ALL_POSTS {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            updated_at
            featured_image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 98) {
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

interface Props {
  data: {
    allMdx: {
      edges: Node[];
    };
  };
}

interface Node {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
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

const seo = {
  title: 'A-J Roos | Blog Posts',
  description:
    'This is where I blog about different Web Development topics. I write blog posts about HTML5, CSS3, JavaScript, React.js and Node.js. You can signup for my newsletter as well.',
  blogUrl: 'https://asjas.co.za/blog',
};

const BlogPage: React.FunctionComponent<Props> = memo(
  ({ data }): React.ReactElement => (
    <>
      <SEO {...seo} />
      <Layout>
        <div className="blog">
          <header>
            <h1 className="blog__heading">My collection of blog posts.</h1>
            <Tags />
          </header>
          <ErrorBoundary>
            {data.allMdx.edges.map(({ node }) => (
              <BlogEntryCard key={node.id} node={node} />
            ))}
          </ErrorBoundary>
        </div>
      </Layout>
    </>
  ),
);

BlogPage.displayName = 'BlogPage';

export default BlogPage;
