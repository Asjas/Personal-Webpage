import React from 'react';
import {
  Navigation,
  NavMenu,
  StyledLink,
} from '../../ui/components/navbar/nav';

const Nav = () => (
  <Navigation>
    <NavMenu>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/portfolio/">Portfolio</StyledLink>
      <StyledLink to="/about/">About</StyledLink>
      <StyledLink to="/contact/">Contact</StyledLink>
    </NavMenu>
  </Navigation>
);

export default Nav;
