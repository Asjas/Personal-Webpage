import React, { Component } from 'react';
import { ResponsiveNavMenu, ResponsiveStyledLink } from './styles';

class ResponsiveNav extends Component {
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
    const { menuOpen } = this.state;
    this.setState(() => ({ menuOpen }));
  };

  render() {
    const { menuOpen } = this.state;

    return (
      <ResponsiveNavMenu
        isOpen={menuOpen}
        onStateChange={state => this.handleStateChange(state)}
        right
      >
        <ResponsiveStyledLink prefetch href="/" onClick={() => this.closeMenu()}>
          Home
        </ResponsiveStyledLink>
        <ResponsiveStyledLink prefetch href="/portfolio/" onClick={() => this.closeMenu()}>
          Portfolio
        </ResponsiveStyledLink>
        <ResponsiveStyledLink prefetch href="/about/" onClick={() => this.closeMenu()}>
          About
        </ResponsiveStyledLink>
        <ResponsiveStyledLink prefetch href="/contact/" onClick={() => this.closeMenu()}>
          Contact
        </ResponsiveStyledLink>
      </ResponsiveNavMenu>
    );
  }
}

export default ResponsiveNav;
