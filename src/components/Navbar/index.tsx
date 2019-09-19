import React, { useState, memo } from 'react';
import { Link } from 'gatsby';

import Footer from '../Footer';

import * as Styled from './style';

interface Props {
  handleClick(event: React.MouseEvent): void;
  handleKeyDown(event: React.KeyboardEvent): void;
}

const HamburgerIcon: React.FunctionComponent<Props> = memo(
  ({ handleClick, handleKeyDown }): React.ReactElement => (
    <Styled.HamburgerMenu
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-labelledby="menu"
      aria-pressed="false"
      aria-expanded="false"
      aria-controls="menu"
    >
      <span id="menu">Menu</span>
      <svg version="1.1" viewBox="0 0 32 32" width="32px" height="32px" xmlSpace="preserve">
        <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
      </svg>
    </Styled.HamburgerMenu>
  ),
);

const CloseIcon: React.FunctionComponent<Props> = memo(
  ({ handleClick, handleKeyDown }): React.ReactElement => (
    <Styled.HamburgerMenu
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-labelledby="menu"
      aria-pressed="true"
      aria-expanded="true"
      aria-controls="menu"
    >
      <span id="menu">Menu</span>
      <svg version="1.1" viewBox="0 0 54 54" width="32px" height="32px" xmlSpace="preserve">
        <g id="surface1">
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z " />
        </g>
      </svg>
    </Styled.HamburgerMenu>
  ),
);

function Nav(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    const { keyCode } = event;

    if (keyCode === 13) {
      setIsOpen(!isOpen);
    }
  }

  return (
    <>
      {isOpen ? (
        <CloseIcon handleClick={handleClick} handleKeyDown={handleKeyDown} />
      ) : (
        <HamburgerIcon handleClick={handleClick} handleKeyDown={handleKeyDown} />
      )}

      <Styled.Sidenav className={isOpen ? 'sidenav sidenav--show' : 'sidenav'}>
        <Styled.Navbar>
          <Styled.Image src={'/assets/logo_transparent.png'} alt="" />
          <Styled.NavbarLinks>
            <li>
              <Link activeClassName="navbar__link--active" to="/" data-testid="home">
                Home
              </Link>
            </li>
            <li>
              <Link activeClassName="navbar__link--active" to="/projects/" data-testid="projects">
                Projects
              </Link>
            </li>
            <li>
              <Link activeClassName="navbar__link--active" to="/blog/" data-testid="blog">
                Blog
              </Link>
            </li>
            <li>
              <Link activeClassName="navbar__link--active" to="/contact/" data-testid="contact">
                Contact
              </Link>
            </li>
          </Styled.NavbarLinks>
          <Footer />
        </Styled.Navbar>
      </Styled.Sidenav>
    </>
  );
}

HamburgerIcon.displayName = 'HamburgerIcon';
CloseIcon.displayName = 'CloseIcon';

export default Nav;
