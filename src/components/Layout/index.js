import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../../theme';
import { Section, Aside, Main } from './styles';
import Navbar from '../Sidebar';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {/* <Meta /> */}
      <Section>
        <Aside>
          <Navbar />
        </Aside>
        <Main>{children}</Main>
      </Section>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
