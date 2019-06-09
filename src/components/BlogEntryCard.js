import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { format, formatDistance } from 'date-fns';

function BlogEntryCard({ node }) {
  return (
    <section className="blogpost__section" key={node.id}>
      <Img
        className="blogpost__image"
        fluid={node.frontmatter.featured_image.childImageSharp.fluid}
        alt=""
      />
      <Link className="blogpost__link" to={`/blog${node.fields.slug}`}>
        <h2 className="blogpost__heading">{node.frontmatter.title}</h2>
      </Link>
      <span className="blogpost__date">
        Published:{' '}
        <time dateTime={format(new Date(node.frontmatter.date), 'yyyy-MM-dd')}>
          {formatDistance(new Date(node.frontmatter.date), new Date(), {
            addSuffix: true,
          })}
        </time>
      </span>
      <span className="blogpost__date">
        Last Updated:{' '}
        <time dateTime={format(new Date(node.frontmatter.updated_at), 'yyyy-MM-dd')}>
          {formatDistance(new Date(node.frontmatter.updated_at), new Date(), {
            addSuffix: true,
          })}
        </time>
      </span>
      <ul className="blogpost__tags">
        {node.frontmatter.tags.map(tag => (
          <Link key={tag} className="blogpost__tag" to={`/tags/${tag}`}>
            {`#${tag}`}
          </Link>
        ))}
      </ul>
    </section>
  );
}

BlogEntryCard.propTypes = {
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
};

export default BlogEntryCard;
