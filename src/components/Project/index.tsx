import * as React from 'react';

import * as Styled from './style';

interface IProject {
  project: {
    id: string;
    title: string;
    description: string;
    slug: {
      current: string;
    };
  };
}

const Project: React.FunctionComponent<IProject> = ({ project }) => (
  <Styled.Card>
    <Styled.Heading>{project.title}</Styled.Heading>
    <Styled.Paragraph>{project.description}</Styled.Paragraph>
  </Styled.Card>
);

Project.displayName = 'Project';

export default Project;
