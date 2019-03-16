import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import ErrorBoundary from './ErrorBoundary';

const GET_ALL_TAGS = graphql`
  query GET_ALL_TAGS {
    allMdx {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;

function Tags() {
  const data = useStaticQuery(GET_ALL_TAGS);

  return (
    <section className="tags">
      <h2 className="tags-heading">Tags</h2>
      <ErrorBoundary>
        {data.allMdx.edges.map(({ node }) =>
          node.frontmatter.tags.map(tag => (
            <Link key={tag} className="tag" to={`/tags/${tag}`}>
              {tag}
            </Link>
          )),
        )}
      </ErrorBoundary>
    </section>
  );
}

Tags.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              tags: PropTypes.array.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Tags;
