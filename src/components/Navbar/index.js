import React from 'react';
import { Navigation, StyledLink, Section } from './styles';
import Footer from '../Footer';

const Nav = () => (
  <Navigation>
    <Section>
      <StyledLink prefetch href="/">
        Home
      </StyledLink>
      <StyledLink prefetch href="/portfolio/">
        Portfolio
      </StyledLink>
      <StyledLink prefetch href="/about/">
        About
      </StyledLink>
      <StyledLink prefetch href="/contact/">
        Contact
      </StyledLink>
    </Section>
    <Footer />
  </Navigation>
);

export default Nav;
