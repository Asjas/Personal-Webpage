import React from 'react';
import { Navigation, StyledLink, Section } from './styles';
import Footer from '../Footer';

const Nav = () => (
  <Navigation>
    <Section>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/portfolio/">Portfolio</StyledLink>
      <StyledLink to="/blog/">Blog</StyledLink>
      <StyledLink to="/contact/">Contact</StyledLink>
    </Section>
    <Footer />
  </Navigation>
);

export default Nav;
