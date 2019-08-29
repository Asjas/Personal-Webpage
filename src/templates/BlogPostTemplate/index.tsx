import React, { useEffect } from 'react';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import { format, formatDistance } from 'date-fns';
import BlockContent from '@sanity/block-content-to-react';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';

import * as Styled from './style';

export const GET_POST_PAGE = graphql`
  query GET_POST_PAGE($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      meta
      publishedAt
      updatedAt
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      categories {
        title
      }
      author {
        name
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const serializers = {
  types: {
    code: ({ node }) => (
      <pre data-language={node.language}>
        <code>{node.code}</code>
      </pre>
    ),
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube id={id} />;
    },
  },
};

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.sanityPost;

  const seo = {
    title: post.title,
    description: post.meta,
    author: post.author.name,
    authorImage: post.author.image.asset.fluid.src,
    image: post.mainImage.asset.fluid.src,
    siteUrl: `https://asjas.co.za/blog/${pageContext.slug}`,
    isBlogPost: true,
  };

  // const disqusShortname = 'asjas';
  // const disqusConfig = {
  //   identifier: post.id,
  //   url: seo.siteUrl,
  //   title: post.frontmatter.title,
  // };

  // function handleScroll() {
  //   const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  //   const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  //   const scrolled = (winScroll / height) * 100;

  //   const scrollBar = document.getElementById('myBar');

  //   if (scrollBar) {
  //     scrollBar.style.width = `${scrolled}%`;
  //   }
  // }

  // useEffect(() => {
  //   if (window) {
  //     window.onscroll = function() {
  //       handleScroll();
  //     };
  //   }
  // });

  return (
    <>
      <SEO {...seo} datePublished={post.publishedAt} dateModified={post.updatedAt} />
      <Layout>
        {console.log(post)}
        <BlockContent blocks={post._rawBody} serializers={serializers} />
        {/* <ErrorBoundary>

        <Styled.Article>
          <div className="progress__container">
            <div className="progress__bar" id="myBar" />
          </div>
          <header>
            <h1 className="post__heading">{seo.title}</h1>
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
          <ErrorBoundary>
            <Styled.Disqus shortname={disqusShortname} config={disqusConfig} />
          </ErrorBoundary>
        </Styled.Article>
      </ErrorBoundary> */}
      </Layout>
    </>
  );
};

export default BlogPostTemplate;
