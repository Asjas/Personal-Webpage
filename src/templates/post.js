import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const GET_POST = graphql`
  query GET_POST($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      timeToRead
      excerpt(pruneLength: 350)
      html
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
    }
  }
`;

const Post = ({ data }) => {
  const post = data.markdownRemark;

  const seo = {
    title: post.frontmatter.title,
    description: post.excerpt,
    siteUrl: `https://asjas.co.za/blog${post.fields.slug}`,
  };

  return (
    <Layout>
      <SEO {...seo} />
      <article className="post">
        <h1 className="post-heading">{post.frontmatter.title}</h1>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      timeToRead: PropTypes.number.isRequired,
      excerpt: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }).isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Post;
