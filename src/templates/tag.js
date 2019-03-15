import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostListing from '../components/PostListing';

function TagTemplate({ pageContext, data }) {
  const { tag } = pageContext;
  const postEdges = data.allMdx.edges;

  return (
    <Layout>
      <div className="tag-container">
        <Helmet title={`Posts tagged as "${tag}"`} />
        <PostListing postEdges={postEdges} />
      </div>
    </Layout>
  );
}

export default TagTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
  }
`;
