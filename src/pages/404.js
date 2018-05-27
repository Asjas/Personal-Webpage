import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { media } from '../utils/media';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Heading = styled.h1`
  font-size: 4rem;
  line-height: 4.2rem;
`;

const Paragraph = styled.p`
  font-size: 2.5rem;
  line-height: 2.7rem;
`;

const StyledLink = styled(Link)`
  font-size: 1.8rem;
  line-height: 2rem;
  text-decoration: none;
  color: darkblue;
  padding: 3px;

  &:hover {
    color: lightcoral;
  }

  &:focus {
    outline: 1px solid darkblue;
  }
`;

const NotFoundPage = () => (
  <Container>
    <Heading>PAGE NOT FOUND</Heading>
    <Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</Paragraph>
    <StyledLink to={'/'}>Go Home</StyledLink>
  </Container>
);

export default NotFoundPage;
