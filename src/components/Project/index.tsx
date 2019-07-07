import React, { memo } from 'react';

import * as Styled from './style';

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
    <Styled.Card>
      <Styled.Image
        title={data.title.text}
        alt={data.image.alt}
        fluid={data.image.localFile.childImageSharp.fluid}
      />
      <Styled.Heading>{data.title.text}</Styled.Heading>
      <Styled.Paragraph>{data.description.text}</Styled.Paragraph>
      <Styled.Button
        className="card__button github"
        href={data.github_url.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={0}
        role="button"
      >
        <span className="button__content">Github</span>
      </Styled.Button>
      <Styled.Button
        className="card__button website"
        href={data.website_url.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={0}
        role="button"
      >
        <span className="button__content">Website</span>
      </Styled.Button>
    </Styled.Card>
  ),
);

Project.displayName = 'Project';

export default Project;
