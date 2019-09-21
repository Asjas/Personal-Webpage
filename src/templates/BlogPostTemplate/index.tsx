import React, { useEffect } from 'react';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from 'gatsby';
import { format, formatDistance } from 'date-fns';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';

import * as Styled from './style';

export const GET_POST_PAGE = graphql`
  query GET_POST_PAGE($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        meta_desc
        author
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
      body
    }
  }
`;

interface IPostPage {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        slug: string;
        meta_desc: string;
        author: string;
        date: string;
        updated_at: string;
        featured_image: {
          childImageSharp: {
            fluid: {
              aspectRatio: number;
              base64: string;
              sizes: string;
              src: string;
              srcSet: string;
              srcWebp: string;
              srcSetWebp: string;
            };
          };
        };
        tags: Array<string>;
      };
      body: any;
    };
  };
  pageContext: {
    slug: string;
    previous?: string;
    next?: string;
  };
}

const BlogPostTemplate: React.FunctionComponent<IPostPage> = ({ data, pageContext }) => {
  const post = data.mdx;

  const seo = {
    title: `${post.frontmatter.title} | A-J Roos`,
    description: post.frontmatter.meta_desc,
    author: post.frontmatter.author,
    image: post.frontmatter.featured_image.childImageSharp.fluid.src,
    siteUrl: `https://asjas.co.za/blog/${post.frontmatter.slug}`,
    isBlogPost: true,
  };

  // const disqusShortname = 'asjas';
  // const disqusConfig = {
  //   identifier: post.id,
  //   url: seo.siteUrl,
  //   title: post.frontmatter.title,
  // };

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
    <>
      <SEO {...seo} datePublished={post.frontmatter.date} dateModified={post.frontmatter.updated_at} />
      <Styled.ProgressContainer>
        <div className="progress__bar" id="myBar" />
      </Styled.ProgressContainer>
      <Layout>
        <ErrorBoundary>
          <Styled.Article>
            <header>
              <h1 className="post__heading">{post.frontmatter.title}</h1>
              <Img className="post__image" fluid={post.frontmatter.featured_image.childImageSharp.fluid} alt="" />
              <div className="post__dates">
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
              </div>
            </header>
            <MDXRenderer>{post.body}</MDXRenderer>
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
            {/* <ErrorBoundary>
            <Styled.Disqus shortname={disqusShortname} config={disqusConfig} />
          </ErrorBoundary> */}
          </Styled.Article>
        </ErrorBoundary>
      </Layout>
    </>
  );
};

export default BlogPostTemplate;
