import React, { useEffect } from 'react';
import Img from 'gatsby-image';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { graphql, Link } from 'gatsby';
import { format, formatDistance } from 'date-fns';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';

import * as Styled from './style';

export const GET_POST = graphql`
  query GET_POST($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
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

  const disqusShortname = 'asjas';
  const disqusConfig = {
    identifier: post.id,
    url: seo.siteUrl,
    title: post.frontmatter.title,
  };

  function handleScroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    const scrollBar = document.getElementById('myBar');

    if (scrollBar) {
      scrollBar.style.width = `${scrolled}%`;
    }
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
        <Styled.Article>
          <div className="progress__container">
            <div className="progress__bar" id="myBar" />
          </div>
          <header>
            <h1 className="post__heading">{seo.title}</h1>
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
          <ErrorBoundary>
            <Styled.Disqus shortname={disqusShortname} config={disqusConfig} />
          </ErrorBoundary>
        </Styled.Article>
      </ErrorBoundary>
    </Layout>
  );
};

export default BlogPostTemplate;
