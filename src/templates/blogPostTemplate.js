import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { format, formatDistance } from 'date-fns';
import { graphql, Link } from 'gatsby';

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
      code {
        body
      }
    }
  }
`;

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.mdx;

  const seo = {
    title: post.frontmatter.title,
    description: post.frontmatter.meta_desc,
    image: `https://asjas.co.za${post.frontmatter.featured_image.childImageSharp.fluid.src}`,
    siteUrl: `https://asjas.co.za/blog${pageContext.slug}`,
    isBlogPost: true,
  };

  function handleScroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = `${scrolled}%`;
  }

  useEffect(() => {
    if (window) {
      window.onscroll = function() {
        handleScroll();
      };
    }
  });

  return (
    <Layout>
      <ErrorBoundary>
        <SEO
          {...seo}
          datePublished={post.frontmatter.date}
          dateModified={post.frontmatter.updated_at}
        />
        <article className="post">
          <div className="progress__container">
            <div className="progress__bar" id="myBar" />
          </div>
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
          <footer className="post__footer">
            {pageContext.previous && (
              <Link to={`/blog/${pageContext.previous}`} className="post__link previous">
                Previous Post
              </Link>
            )}
            {pageContext.next && (
              <Link to={`/blog${pageContext.next}`} className="post__link next">
                Next Post
              </Link>
            )}
          </footer>
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
        meta_desc: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired,
        featured_image: PropTypes.object.isRequired,
        tags: PropTypes.array.isRequired,
      }).isRequired,
      code: PropTypes.shape({
        body: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    isCreatedByStatefulCreatePages: PropTypes.bool.isRequired,
    previous: PropTypes.string,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPostTemplate;
