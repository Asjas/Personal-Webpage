import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from '../ErrorBoundary';
import { theme, GlobalStyles } from '../../theme';
import { Container, Sidebar, Main } from './styles';
import Navbar from '../Navbar';
import setupLogRocket from '../../utils/logrocket';

const Layout = ({ children }) => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <Sidebar>
            <Navbar />
          </Sidebar>
          <Main>{children}</Main>
        </Container>
      </>
    </ThemeProvider>
  </ErrorBoundary>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
