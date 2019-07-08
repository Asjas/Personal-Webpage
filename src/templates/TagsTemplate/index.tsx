import React from 'react';
import PropTypes from 'prop-types';
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
          fields {
            slug
          }
          frontmatter {
            title
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

function TagTemplate({ pageContext, data }) {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} blog post${totalCount === 1 ? '' : 's'} tagged as "${capitalize(
    tag,
  )}"`;

  const seo = {
    title: `Blog posts tagged as "${tag}"`,
    description: `This is all the blog posts on my website tagged as "${tag}".`,
    siteUrl: `https://asjas.co.za/tags/${tag}`,
  };

  return (
    <Layout>
      <SEO {...seo} />
      <Styled.Section>
        <Styled.Heading>{tagHeader}</Styled.Heading>
        <Tags />
        <Styled.List>
          {edges.map(({ node }) => (
            <BlogEntryCard key={node.id} node={node} />
          ))}
        </Styled.List>
        <Styled.ReturnLink to="/blog">Go back</Styled.ReturnLink>
      </Styled.Section>
    </Layout>
  );
}

TagTemplate.propTypes = {
  pageContext: PropTypes.shape({
    isCreatedByStatefulCreatePages: PropTypes.bool.isRequired,
    tag: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }).isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              updated_at: PropTypes.string.isRequired,
              featured_image: {
                childImageSharp: PropTypes.shape({
                  fluid: PropTypes.any.isRequired,
                }).isRequired,
              },
              tags: PropTypes.array.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default TagTemplate;
