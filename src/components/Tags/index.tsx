import * as React from 'react';

import ErrorBoundary from '../ErrorBoundary';

import * as Styled from './style';

interface ITags {
  tags: Array<string>;
}

const Tags: React.FunctionComponent<ITags> = ({ tags }) => {
  return (
    <Styled.Section>
      <Styled.Heading>All Tags</Styled.Heading>
      <ErrorBoundary>
        {tags.map(tag => (
          <Styled.TagLink key={tag} to={`/tags/${tag}`}>
            {`#${tag}`}
          </Styled.TagLink>
        ))}
      </ErrorBoundary>
    </Styled.Section>
  );
};

export default Tags;
