import React from 'react';
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
      <h2 className="tags__heading">All Tags</h2>
      <ErrorBoundary>
        {data.allMdx.edges.map(({ node }) =>
          node.frontmatter.tags.map((tag: string) => (
            <Link key={tag} className="blogpost__tag" to={`/tags/${tag}`}>
              {`#${tag}`}
            </Link>
          )),
        )}
      </ErrorBoundary>
    </section>
  );
}

export default Tags;
