import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Footer from './Footer';

const HamburgerIcon = memo(function HamburgerIcon({ handleClick, handleKeyDown }) {
  return (
    <a
      className="hamburger-menu"
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
    </a>
  );
});

const CloseIcon = memo(function CloseIcon({ handleClick, handleKeyDown, handleBlur }) {
  return (
    <a
      className="hamburger-close"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
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
    </a>
  );
});

function Nav() {
  const [showNav, setShow] = useState(false);

  function handleClick() {
    setShow(!showNav);
  }

  function handleKeyDown(event) {
    const { keyCode } = event;

    if (keyCode === 13) {
      setShow(!showNav);
    }
  }

  return (
    <>
      {!showNav && <HamburgerIcon handleClick={handleClick} handleKeyDown={handleKeyDown} />}
      {showNav && <CloseIcon handleClick={handleClick} handleKeyDown={handleKeyDown} />}
      <div className={showNav ? 'sidenav show-nav' : 'sidenav'}>
        <nav className="navbar">
          <ul className="navbar-links">
            <li className="navbar-item">
              <Link className="navbar-link" to="/">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/portfolio/">
                Portfolio
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/blog/">
                Blog
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/contact/">
                Contact
              </Link>
            </li>
          </ul>
          <Footer />
        </nav>
      </div>
    </>
  );
}

HamburgerIcon.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
};

CloseIcon.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
};

export default Nav;
