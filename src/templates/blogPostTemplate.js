import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { format, formatDistance } from 'date-fns';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';

export const GET_POST = graphql`
  query GET_POST($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        meta_desc
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
      excerpt(pruneLength: 250)
      code {
        body
      }
    }
  }
`;

const BlogPostTemplate = ({ data }) => {
  const post = data.mdx;

  const seo = {
    title: post.frontmatter.title,
    description: post.frontmatter.meta_desc,
    siteUrl: `https://asjas.co.za/blog${post.fields.slug}`,
    isBlogPost: true,
  };

  return (
    <Layout>
      <ErrorBoundary>
        <SEO
          {...seo}
          datePublished={post.frontmatter.date}
          dateModified={post.frontmatter.updated_at}
        />
        <article className="post">
          <header>
            <Img
              className="post__image"
              fluid={post.frontmatter.featured_image.childImageSharp.fluid}
              alt=""
            />
            <span className="post__date">
              Published:{' '}
              <time dateTime={format(new Date(post.frontmatter.date), 'yyyy-MM-dd')}>
                {formatDistance(new Date(post.frontmatter.date), new Date(), {
                  addSuffix: true,
                })}
              </time>
            </span>
            <span className="post__date">
              Last Updated:{' '}
              <time dateTime={format(new Date(post.frontmatter.updated_at), 'yyyy-MM-dd')}>
                {formatDistance(new Date(post.frontmatter.updated_at), new Date(), {
                  addSuffix: true,
                })}
              </time>
            </span>
          </header>
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </article>
      </ErrorBoundary>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
      }).isRequired,
      excerpt: PropTypes.string.isRequired,
      code: PropTypes.shape({
        body: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPostTemplate;
