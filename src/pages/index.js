import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Container, Paragraph } from '../styles/index';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Container>
      <Paragraph>Soon to be my new webpage</Paragraph>
    </Container>
  </Layout>
);

export default IndexPage;
