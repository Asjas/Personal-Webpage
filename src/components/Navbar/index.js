import React from 'react';
import { Navigation, NavMenu, StyledLink } from './styles';

const Nav = () => (
  <Navigation>
    <NavMenu>
      <StyledLink activeClassName="nav__link-active" href="/">
        <a>Home</a>
      </StyledLink>
      <StyledLink activeClassName="nav__link-active" href="/portfolio/">
        <a>Portfolio</a>
      </StyledLink>
      <StyledLink activeClassName="nav__link-active" href="/about/">
        <a>About</a>
      </StyledLink>
      <StyledLink activeClassName="nav__link-active" href="/contact/">
        <a>Contact</a>
      </StyledLink>
    </NavMenu>
  </Navigation>
);

export default Nav;
