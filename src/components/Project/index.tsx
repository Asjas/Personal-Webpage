import React, { memo } from 'react';

import * as Styled from './style';

interface IProject {
  project: {
    id: string;
    title: string;
    description: string;
    image_url: string;
    website_url: string;
    github_url: string;
  };
}

const Project: React.FunctionComponent<IProject> = ({ project }): React.ReactElement => (
  <Styled.Card>
    <Styled.ImageContainer>
      <Styled.Image src={project.image_url} alt="" />
    </Styled.ImageContainer>
    <Styled.Heading>{project.title}</Styled.Heading>
    <Styled.Paragraph>{project.description}</Styled.Paragraph>
    <Styled.Button
      className="github"
      href={project.github_url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={0}
      role="button"
    >
      <span className="button__content">Github</span>
    </Styled.Button>
    <Styled.Button
      className="website"
      href={project.website_url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={0}
      role="button"
    >
      <span className="button__content">Website</span>
    </Styled.Button>
  </Styled.Card>
);

Project.displayName = 'Project';

export default Project;
