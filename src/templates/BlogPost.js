import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export const GET_BLOGPOST = graphql`
  query GET_BLOGPOST($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>{' '}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPost;
