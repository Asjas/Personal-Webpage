import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../../theme';
import { Container, Main } from './styles';
import ErrorBoundary from '../ErrorBoundary';
import Sidebar from '../Sidebar';
import setupLogRocket from '../../utils/logrocket';
import '../../styles/global.css';

setupLogRocket();

const Layout = ({ children }) => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <Sidebar />
          <Main>{children}</Main>
        </Container>
      </>
    </ThemeProvider>
  </ErrorBoundary>
);

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Layout;
