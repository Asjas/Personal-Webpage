import React, { memo } from 'react';
import Img from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

interface Props {
  data: {
    title: {
      text: string;
    };
    description: {
      text: string;
    };
    image: {
      localFile: {
        childImageSharp: {
          fluid: {
            aspectRatio: number;
            base64: string;
            sizes: string;
            src: string;
            srcSet: string;
            srcSetWebp: string;
            srcWebp: string;
          };
        };
      };
      alt: string;
    };
    github_url: {
      url: string;
    };
    website_url: {
      url: string;
    };
  };
}

const Project: React.FunctionComponent<Props> = memo(
  ({ data }): React.ReactElement => (
    <section className="card">
      <Img
        className="card__image"
        title={data.title.text}
        alt={data.image.alt}
        fluid={data.image.localFile.childImageSharp.fluid}
      />
      <h2 className="card__title">{data.title.text}</h2>
      <p className="card__text">{data.description.text}</p>
      <OutboundLink
        className="card__button github"
        href={data.github_url.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={0}
        role="button"
      >
        <span className="button__content">Github</span>
      </OutboundLink>
      <OutboundLink
        className="card__button website"
        href={data.website_url.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={0}
        role="button"
      >
        <span className="button__content">Website</span>
      </OutboundLink>
    </section>
  ),
);

Project.displayName = 'Project';

export default Project;
