import React from 'react';
import { Navigation, StyledLink, Section } from './styles';
import Footer from '../Footer';

const Nav = () => (
  <Navigation>
    <Section>
      <StyledLink prefetch to="/">
        Home
      </StyledLink>
      <StyledLink prefetch to="/portfolio/">
        Portfolio
      </StyledLink>
      <StyledLink prefetch to="/about/">
        About
      </StyledLink>
      <StyledLink prefetch to="/contact/">
        Contact
      </StyledLink>
    </Section>
    <Footer />
  </Navigation>
);

export default Nav;
