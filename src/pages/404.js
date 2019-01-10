import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Container, Heading, Paragraph, StyledLink } from '../styles/404';

const seo = {
  title: 'A-J Roos | 404 - Page not found',
  description:
    "Oops! Something went wrong. Either the page you tried to access doesn't exist or something mysterious happened.",
};

const FourOhFour = () => (
  <Layout>
    <SEO title={seo.title} description={seo.description} />
    <Container>
      <Heading data-testid="404-heading">PAGE NOT FOUND</Heading>
      <Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</Paragraph>
      <StyledLink to="/" data-testid="404-link">
        Go Home
      </StyledLink>
    </Container>
  </Layout>
);

export default FourOhFour;
