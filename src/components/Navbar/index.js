import React from 'react';
import { Navigation, StyledLink, Section } from './styles';
import Footer from '../Footer';

const Nav = () => (
  <Navigation>
    <Section>
      <StyledLink to="/">Landing Page</StyledLink>
      <StyledLink to="/contact/">Contact</StyledLink>
    </Section>
    <Footer />
  </Navigation>
);

export default Nav;
