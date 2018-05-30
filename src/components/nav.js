import React from 'react';
import { Navigation, Name, NavMenu, StyledLink } from '../ui/components/nav';

const Nav = () => (
  <Navigation>
    <Name href="#" tabIndex={-1}>
      Portfolio| A-J Roos
    </Name>
    <NavMenu>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/portfolio/">Portfolio</StyledLink>
      <StyledLink to="/about/">About</StyledLink>
      <StyledLink to="/contact/">Contact</StyledLink>
    </NavMenu>
  </Navigation>
);

export default Nav;
