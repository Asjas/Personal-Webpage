import React, { useEffect } from 'react';
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
        id
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

interface ICategories {
  id: string;
  title: string;
}

interface IPost {
  data: {
    sanityPost: {
      title: string;
      meta: string;
      publishedAt: string;
      updatedAt: string;
      slug: {
        current: string;
      };
      categories: Array<ICategories>;
      mainImage: {
        asset: {
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
      author: {
        name: string;
        image: {
          asset: {
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
      };
      _rawBody: any;
    };
  };
  pageContext: {
    slug: string;
    previous?: string;
    next?: string;
  };
}

const serializers = {
  types: {
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark;
      const href = `/${slug.current}`;
      return <a href={href}>{children}</a>;
    },
    link: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
    code: ({ node }) => (
      <pre data-language={node.language}>
        <code>{node.code}</code>
      </pre>
    ),
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube className="youtube" id={id} />;
    },
  },
};

const BlogPostTemplate: React.FunctionComponent<IPost> = ({ data, pageContext }) => {
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
      <SEO {...seo} datePublished={post.publishedAt} dateModified={post.updatedAt} />
      <Layout>
        <ErrorBoundary>
          <Styled.Article>
            <div className="progress__container">
              <div className="progress__bar" id="myBar" />
            </div>
            <Styled.Image fluid={post.mainImage.asset.fluid} alt={post.title} />
            <header>
              <h1 className="post__heading">{post.title}</h1>
              <span className="post__date">
                Published:{' '}
                <time dateTime={format(new Date(post.publishedAt), 'yyyy-MM-dd')}>
                  {formatDistance(new Date(post.publishedAt), new Date(), {
                    addSuffix: true,
                  })}
                </time>
              </span>
              <span className="post__date">
                Last Updated:{' '}
                <time dateTime={format(new Date(post.updatedAt), 'yyyy-MM-dd')}>
                  {formatDistance(new Date(post.updatedAt), new Date(), {
                    addSuffix: true,
                  })}
                </time>
              </span>
            </header>
            <BlockContent blocks={post._rawBody} serializers={serializers} />
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
