import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../../components/SEO';
import Layout from '../../components/Layout';
import Tags from '../../components/Tags';
import BlogEntryCard from '../../components/BlogEntryCard';
import capitalize from '../../utils/capitalize';

import * as Styled from './style';

export const GET_TAG_PAGES = graphql`
  query GET_TAG_PAGES($tag: String) {
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
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
        }
      }
    }
  }
`;

interface IAllTags {
  data: {
    allMdx: {
      totalCount: number;
      edges: Array<ITag>;
    };
  };
  pageContext: {
    slug: string;
    tag: string;
    postTags: Array<string>;
  };
}

interface ITag {
  node: {
    id: string;
    frontmatter: {
      title: string;
      slug: string;
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
  };
}

const TagTemplate: React.FunctionComponent<IAllTags> = ({ pageContext, data }) => {
  const { slug, tag, postTags } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const seo = {
    title: `Blog posts tagged as ${capitalize(tag)} | A-J Roos`,
    description: `This is all the blog posts on my website tagged as ${capitalize(tag)}.`,
    siteUrl: `https://asjas.xyz${slug}`,
  };

  return (
    <>
      <SEO {...seo} />
      <Layout>
        <Styled.Heading>{`Blog posts tagged as ${capitalize(tag)}`}</Styled.Heading>
        <Styled.Paragraph>{`A collection of ${totalCount} blog post${totalCount === 1 ? '' : 's'}`}</Styled.Paragraph>
        <Tags tags={postTags} />
        <Styled.List>
          {edges.map(({ node }) => (
            <BlogEntryCard key={node.id} node={node} />
          ))}
        </Styled.List>
        <Styled.ReturnLink to="/blog">Go back</Styled.ReturnLink>
      </Layout>
    </>
  );
};

export default TagTemplate;
