import * as React from 'react';
import { format, formatDistance } from 'date-fns';

import ErrorBoundary from '../ErrorBoundary';
import { IPost } from '../../pages/blog';

import * as Styled from './style';

const BlogEntryCard: React.FunctionComponent<IPost> = ({ node }) => (
  <Styled.Card>
    {console.log(node)}
    <Styled.Image fluid={node.mainImage.asset.fluid} alt="" />
    <Styled.Heading>{node.title}</Styled.Heading>
    <Styled.BlogDate>
      Published:{' '}
      <time dateTime={format(new Date(node.publishedAt), 'yyyy-MM-dd')}>
        {formatDistance(new Date(node.publishedAt), new Date(), {
          addSuffix: true,
        })}
      </time>
    </Styled.BlogDate>
    <Styled.BlogDate>
      Last Updated:{' '}
      <time dateTime={format(new Date(node.updatedAt), 'yyyy-MM-dd')}>
        {formatDistance(new Date(node.updatedAt), new Date(), {
          addSuffix: true,
        })}
      </time>
    </Styled.BlogDate>
    <Styled.BlogTags>
      <ErrorBoundary>
        {node.categories.map(category => (
          <Styled.BlogLink
            key={category.id}
            className="blogpost__tag"
            to={`/tags/${category.title.toLowerCase()}`}
          >
            {`#${category.title}`}
          </Styled.BlogLink>
        ))}
      </ErrorBoundary>
    </Styled.BlogTags>
  </Styled.Card>
);

export default BlogEntryCard;
