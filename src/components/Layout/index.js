import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../../theme';
import { Container, Sidebar, Main } from './styles';
import Navbar from '../Navbar';

const Layout = ({ children }) => (
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
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
