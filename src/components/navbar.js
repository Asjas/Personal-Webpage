import React, { Component } from 'react';
import Link from 'gatsby-link';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import { media } from '../utils/media';
import '../styles/ResponsiveNav.css';

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 7px 0;
  position: relative;
  width: 100%;

  ${media.medium`
    max-width: 900px;
  `};

  ${media.small``};
`;

const Name = styled.a`
  color: #000;
  cursor: default;
  font-family: 'Playfair Display';
  font-size: 3.5rem;
  line-height: 4rem;
  outline: 0;
  pointer-events: none;
  text-decoration: none;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2), 2px 1px 0px rgba(0, 0, 0, 0.2);
  margin-top: 5px;

  ${media.medium`
    font-size: 3.2rem;
    line-height: 3.4rem;
    margin: 5px 0 0 10px;
  `};

  ${media.small`
    font-size: 3rem;
    line-height: 3.2rem;
  `};

  ${media.xSmall``};
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 5px 0 0;
  width: 460px;

  ${media.medium`
    display: none;
  `};
`;

const ResponsiveNavMenu = styled(Menu)`
  display: none;

  ${media.medium`
    display: block;
  `};
`;

const StyledLink = styled(Link)`
  & {
    color: #000;
    cursor: pointer;
    font-size: 2rem;
    letter-spacing: 0.03rem;
    line-height: 2.2rem;
    padding: 3px;
    position: relative;
    text-decoration: none;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2);

    &:before {
      background-color: #000;
      bottom: 0;
      content: '';
      height: 2px;
      left: 0;
      position: absolute;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
      visibility: hidden;
      width: 100%;
    }

    &:hover:before {
      transform: scaleX(1);
      visibility: visible;
    }

    &:focus {
      outline: 1px solid black;
    }
  }

  ${media.medium`
    & {
      font-size: 1.9rem;
      line-height: 2.1rem;
    }
  `};

  ${media.small`
    & {
      font-size: 1.8rem;
      line-height: 2rem;
    }
  `};

  ${media.xSmall``};
`;

const ResponsiveStyledLink = styled(Link)`
  color: #bdc3c7;
  cursor: pointer;
  font-size: 2.2rem;
  letter-spacing: 0.03rem;
  line-height: 1.5rem;
  padding: 10px;
  margin: 10px 0 10px 0;
  position: relative;
  text-decoration: none;
`;

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange = state => {
    this.setState({ menuOpen: state.isOpen });
  };

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <Nav>
        <Name href="#" tabIndex={-1}>
          Portfolio| A-J Roos
        </Name>
        <NavMenu>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/portfolio/">Portfolio</StyledLink>
          <StyledLink to="/about/">About</StyledLink>
          <StyledLink to="/contact/">Contact</StyledLink>
        </NavMenu>
        <ResponsiveNavMenu
          isOpen={!this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <ResponsiveStyledLink to="/" onClick={() => this.closeMenu()}>
            Home
          </ResponsiveStyledLink>
          <ResponsiveStyledLink
            to="/portfolio/"
            onClick={() => this.closeMenu()}
          >
            Portfolio
          </ResponsiveStyledLink>
          <ResponsiveStyledLink to="/about/" onClick={() => this.closeMenu()}>
            About
          </ResponsiveStyledLink>
          <ResponsiveStyledLink to="/contact/" onClick={() => this.closeMenu()}>
            Contact
          </ResponsiveStyledLink>
        </ResponsiveNavMenu>
      </Nav>
    );
  }
}

export default Navbar;
