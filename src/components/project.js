import React from 'react';
import PropTypes from 'prop-types';
import {
  Content,
  Card,
  Title,
  StyledImg,
  StyledLink,
  Description,
  LinkDescription,
} from '../ui/components/project';

const Project = ({ projectQuery }) => (
  <Content>
    <Card>
      <Title>{projectQuery.data.title.text}</Title>
      <StyledImg
        title={projectQuery.data.title.text}
        alt={projectQuery.data.image.alt}
        sizes={projectQuery.data.image.localFile.childImageSharp.sizes}
      />
      <Description>{projectQuery.data.description.text}</Description>
      <LinkDescription>
        Link to the project:
        <StyledLink href={projectQuery.data.link.url} target="_blank">
          {projectQuery.data.link.url}
        </StyledLink>
      </LinkDescription>
    </Card>
  </Content>
);

Project.propTypes = {
  projectQuery: PropTypes.object.isRequired,
};

export default Project;
