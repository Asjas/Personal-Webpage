import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { media } from '../utils/media';

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
    width: 900px;
  `};

  ${media.xSmall``};
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
    width: 350px;
  `};

  ${media.xSmall``};
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

const Navbar = () => (
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
  </Nav>
);

export default Navbar;
