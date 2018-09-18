import React from 'react';
import {
  Navigation,
  NavMenu,
  StyledLink,
} from '../../ui/components/navbar/nav';

const Nav = () => (
  <Navigation>
    <NavMenu>
      <StyledLink activeClassName="nav__link-active" to="/">
        Home
      </StyledLink>
      <StyledLink activeClassName="nav__link-active" to="/portfolio/">
        Portfolio
      </StyledLink>
      <StyledLink activeClassName="nav__link-active" to="/about/">
        About
      </StyledLink>
      <StyledLink activeClassName="nav__link-active" to="/contact/">
        Contact
      </StyledLink>
    </NavMenu>
  </Navigation>
);

export default Nav;
