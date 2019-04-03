import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

function Project({ data }) {
  return (
    <section className="card">
      <Img
        className="card__image"
        title={data.title.text}
        alt={data.image.alt}
        fixed={data.image.localFile.childImageSharp.fixed}
      />
      <h2 className="card__title">{data.title.text}</h2>
      <p className="card__text">{data.description.text}</p>
      <OutboundLink
        className="card__button github"
        href={data.github_url.url}
        target="_blank"
        rel="noopener noreferrer"
        tabindex="0"
        role="button"
      >
        <span className="button__content">Github</span>
      </OutboundLink>
      <OutboundLink
        className="card__button website"
        href={data.website_url.url}
        target="_blank"
        rel="noopener noreferrer"
        tabindex="0"
        role="button"
      >
        <span className="button__content">Website</span>
      </OutboundLink>
    </section>
  );
}

Project.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fixed: PropTypes.shape({
            height: PropTypes.number.isRequired,
            width: PropTypes.number.isRequired,
            src: PropTypes.string.isRequired,
            srcSet: PropTypes.string.isRequired,
            srcSetWebp: PropTypes.string.isRequired,
            srcWebp: PropTypes.string.isRequired,
            tracedSVG: PropTypes.string.isRequired,
          }),
        }).isRequired,
      }).isRequired,
    }).isRequired,
    title: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
    github_url: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    website_url: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default Project;
