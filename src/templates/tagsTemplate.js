import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import capitalize from '../utils/capitalize';
import BlogEntryCard from '../components/BlogEntryCard';

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
            tags
            published
            updated_at
          }
        }
      }
    }
  }
`;

function TagTemplate({ pageContext, data }) {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged as "${capitalize(
    tag,
  )}"`;
  const seo = {
    title: `Posts tagged as "${tag}"`,
  };

  return (
    <Layout>
      <SEO {...seo} />
      <section className="tagpage">
        <h1 className="tagpage__heading">{tagHeader}</h1>
        <ul className="blogpost__list">
          {edges.map(
            ({ node }) => node.frontmatter.published && <BlogEntryCard key={node.id} node={node} />,
          )}
        </ul>
        <Link to="/blog" className="tagpage__return">
          Go back
        </Link>
      </section>
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
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }).isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default TagTemplate;
