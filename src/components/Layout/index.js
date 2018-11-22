import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Nprogress from 'nprogress';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../../../theme';
import { Section, Aside, Main } from './styles';
import Meta from '../Meta';
import Navbar from '../Sidebar';

const Layout = ({ children }) => (
  /* eslint no-undef: "off" */
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            siteUrl
            googleSiteVerification
            description
            keywords
          }
        }
      }
    `}
    render={data => (
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
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
