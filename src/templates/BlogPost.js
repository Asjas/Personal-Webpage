import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const GET_BLOGPOST = graphql`
  query GET_BLOGPOST($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt(pruneLength: 350)
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

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  const seo = {
    title: post.frontmatter.title,
    description: post.excerpt,
    siteUrl: `https://asjas.co.za/blog${post.fields.slug}`,
  };

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} siteUrl={seo.siteUrl} />
      <h1>{seo.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

BlogPost.propTypes = {
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

export default BlogPost;
