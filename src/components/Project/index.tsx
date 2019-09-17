import * as React from 'react';

import * as Styled from './style';

interface IProject {
  project: {
    frontmatter: {
      title: string;
      slug: string;
      meta_desc: string;
    };
  };
}

const Project: React.FunctionComponent<IProject> = ({ project }) => (
  <Styled.Card>
    <Styled.Heading>{project.frontmatter.title}</Styled.Heading>
    <Styled.Paragraph>{project.frontmatter.meta_desc}</Styled.Paragraph>
  </Styled.Card>
);

Project.displayName = 'Project';

export default Project;
