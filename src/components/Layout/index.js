import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Meta from '../Meta';
import Navbar from '../Sidebar';
import Footer from '../Footer';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    const { children } = this.props;
    const title = 'Personal Portfolio';
    return (
      <>
        <Meta title={title} />
        <Navbar />
        {children}
        <Footer />
      </>
    );
  }
}

export default Layout;
