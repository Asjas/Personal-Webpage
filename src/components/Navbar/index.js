import React from 'react';
import { Navigation, StyledLink, PageSection } from './styles';
import Footer from '../Footer';

const Nav = () => (
  <Navigation>
    <PageSection>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/portfolio/">Portfolio</StyledLink>
      <StyledLink to="/blog/">Blog</StyledLink>
      <StyledLink to="/contact/">Contact</StyledLink>
    </PageSection>
    <Footer />
  </Navigation>
);

export default Nav;
