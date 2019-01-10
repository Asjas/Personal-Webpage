import React from 'react';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Container, Heading } from '../styles/post';

export const GET_POST = graphql`
  query GET_POST($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
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

const Post = ({ data }) => {
  const post = data.mdx;

  const seo = {
    title: post.frontmatter.title,
    description: post.excerpt,
    siteUrl: `https://asjas.co.za/blog${post.fields.slug}`,
  };

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} siteUrl={seo.siteUrl} />
      <Container>
        <Heading>{seo.title}</Heading>
        <MDXRenderer>{post.code.body}</MDXRenderer> />
      </Container>
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
