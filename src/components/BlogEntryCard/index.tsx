import * as React from 'react';
import { format, formatDistance } from 'date-fns';

import ErrorBoundary from '../ErrorBoundary';
import { IPost } from '../../pages/blog';

import * as Styled from './style';

const BlogEntryCard: React.FunctionComponent<IPost> = ({ node }) => (
  <Styled.Card>
    {console.log(node)}
    <Styled.Image fluid={node.frontmatter.featured_image.childImageSharp.fluid} alt="" />
    <Styled.Heading>{node.frontmatter.title}</Styled.Heading>
    <Styled.BlogDate>
      Published:{' '}
      <time dateTime={format(new Date(node.frontmatter.date), 'yyyy-MM-dd')}>
        {formatDistance(new Date(node.frontmatter.date), new Date(), {
          addSuffix: true,
        })}
      </time>
    </Styled.BlogDate>
    <Styled.BlogDate>
      Last Updated:{' '}
      <time dateTime={format(new Date(node.frontmatter.updated_at), 'yyyy-MM-dd')}>
        {formatDistance(new Date(node.frontmatter.updated_at), new Date(), {
          addSuffix: true,
        })}
      </time>
    </Styled.BlogDate>
    <Styled.BlogTags>
      <ErrorBoundary>
        {node.frontmatter.tags.map(tag => (
          <Styled.BlogLink key={tag} className="blogpost__tag" to={`/tags/${tag.toLowerCase()}`}>
            {`#${tag}`}
          </Styled.BlogLink>
        ))}
      </ErrorBoundary>
    </Styled.BlogTags>
  </Styled.Card>
);

export default BlogEntryCard;
