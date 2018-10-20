import React from 'react';
import { Navigation, StyledLink } from './styles';
import Footer from '../Footer';

const Nav = () => (
  <Navigation>
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
    <Footer />
  </Navigation>
);

export default Nav;
