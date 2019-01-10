import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Container, Paragraph } from '../styles/blog';

const seo = {
  title: 'A-J Roos | Blog',
  description:
    'I am a Front-End Web Developer that blogs about JavaScript, React, Gatsby.js and Web Development in general. This is where I keep my collection of blogs.',
};

const About = () => (
  <Layout>
    <SEO title={seo.title} description={seo.description} />
    <Container>
      <Paragraph>To be added</Paragraph>
    </Container>
  </Layout>
);

export default About;
