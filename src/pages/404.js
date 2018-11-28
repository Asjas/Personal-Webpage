import React from 'react';
import { Container, Heading, Paragraph, StyledLink } from '../styles/404';

const NotFoundPage = () => (
  <Container>
    <Heading>PAGE NOT FOUND</Heading>
    <Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</Paragraph>
    <StyledLink to="/">Go Home</StyledLink>
  </Container>
);

export default NotFoundPage;
