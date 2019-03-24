import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

function Project({ data }) {
  return (
    <article className="card">
      <Img
        className="card-image"
        title={data.title.text}
        alt={data.image.alt}
        fixed={data.image.localFile.childImageSharp.fixed}
      />
      <h2 className="card-title">{data.title.text}</h2>
      <p className="card-text">{data.description.text}</p>
      <OutboundLink
        className="card-button github"
        href={data.github_url.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="button-content">Github</span>
      </OutboundLink>
      <OutboundLink
        className="card-button website"
        href={data.website_url.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="button-content">Website</span>
      </OutboundLink>
    </article>
  );
}

export default Project;
