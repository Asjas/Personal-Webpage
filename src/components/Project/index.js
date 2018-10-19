import React from 'react';
import PropTypes from 'prop-types';
import {
  Content,
  Card,
  Title,
  Description,
  LinkDescription,
} from './styles.js';

const Project = ({ projectQuery }) => (
  <Content>
    <Card>
      <Title>{projectQuery.data.title.text}</Title>
      <LinkDescription>Link to the project:</LinkDescription>
    </Card>
  </Content>
);

Project.propTypes = {
  projectQuery: PropTypes.object.isRequired,
};

export default Project;
