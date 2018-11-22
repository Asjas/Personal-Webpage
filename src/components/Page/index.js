import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Nprogress from 'nprogress';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../../../theme';
import { Section, Aside, Main } from './styles';
import Meta from '../Meta';
import Navbar from '../Sidebar';

Router.onRouteChangeStart = () => {
  Nprogress.start();
};

Router.onRouteChangeComplete = () => {
  Nprogress.done();
};

Router.onRouteChangeError = () => {
  Nprogress.done();
};

class Layout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Meta />
          <Section>
            <Aside>
              <Navbar />
            </Aside>
            <Main>{children}</Main>
          </Section>
        </>
      </ThemeProvider>
    );
  }
}

export default Layout;
