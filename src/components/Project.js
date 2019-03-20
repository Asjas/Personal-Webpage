import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

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
      <a
        className="card-button github"
        href={data.github_url.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="button-content">Github</span>
      </a>
      <a
        className="card-button website"
        href={data.website_url.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="button-content">Website</span>
      </a>
    </article>
  );
}

export default Project;
