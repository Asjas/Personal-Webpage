import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ErrorBoundary from '../ErrorBoundary';

import * as Styled from './style';

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

interface Data {
  allMdx: {
    edges: Node[];
  };
}

interface Node {
  node: {
    frontmatter: {
      tags: Tags[];
    };
  };
}

interface Tags {
  tag: String;
}

function Tags(): React.ReactElement {
  const data: Data = useStaticQuery(GET_ALL_TAGS);

  return (
    <Styled.Section>
      <Styled.Heading>All Tags</Styled.Heading>
      <ErrorBoundary>
        {data.allMdx.edges.map(({ node }) =>
          node.frontmatter.tags.map(tag => (
            <Styled.TagLink key={tag} to={`/tags/${tag}`}>
              {`#${tag}`}
            </Styled.TagLink>
          )),
        )}
      </ErrorBoundary>
    </Styled.Section>
  );
}

export default Tags;
