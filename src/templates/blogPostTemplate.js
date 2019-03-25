import React from 'react';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';

export const GET_POST = graphql`
  query GET_POST($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      timeToRead
      excerpt(pruneLength: 250)
      code {
        body
      }
      frontmatter {
        title
        date
        tags
        updated
      }
      fields {
        slug
      }
    }
  }
`;

const BlogPostTemplate = ({ data }) => {
  const post = data.mdx;

  const seo = {
    title: post.frontmatter.title,
    description: post.excerpt,
    siteUrl: `https://asjas.co.za/blog${post.fields.slug}`,
  };

  return (
    <Layout>
      <ErrorBoundary>
        <SEO {...seo} />
        <article className="post">
          <h1 className="post-heading">{post.frontmatter.title}</h1>
          <div className="post-content">
            <MDXRenderer>{post.code.body}</MDXRenderer>
          </div>
        </article>
      </ErrorBoundary>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      timeToRead: PropTypes.number.isRequired,
      excerpt: PropTypes.string.isRequired,
      code: PropTypes.shape({
        body: PropTypes.string.isRequired,
      }).isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
        updated: PropTypes.string.isRequired,
      }).isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPostTemplate;
