import React from 'react';
import { Container, Heading, Showcase } from '../styles/portfolio';
import Layout from '../components/Layout';
import Project from '../components/Project';

const PortfolioPage = () => (
  <Container>
    <Layout>
      <Heading>Here are some of the projects that I have worked on.</Heading>
      <Showcase>test</Showcase>
    </Layout>
  </Container>
);

export default PortfolioPage;
