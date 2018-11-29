import React from 'react';
import Layout from '../components/Layout';
import { Container, Heading, Paragraph, StyledLink } from '../styles/404';

const FourOhFour = () => (
  <Layout>
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
