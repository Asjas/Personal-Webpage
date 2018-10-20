import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Section, Aside, Main } from './styles';
import Meta from '../Meta';
import Navbar from '../Sidebar';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <>
        <Meta />
        <Section>
          <Aside>
            <Navbar />
          </Aside>
          <Main>{children}</Main>
        </Section>
      </>
    );
  }
}

export default Layout;
