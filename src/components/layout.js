import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import 'normalize.css/normalize.css';

import '../styles/index.css';

import Navbar from './navbar';
import Footer from './footer';

import setupLogRocket from '../utils/logrocket';

// Start logrocket
setupLogRocket();

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
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'siteUrl', content: data.site.siteMetadata.siteUrl },
            {
              name: 'google-site-verification',
              content: data.site.siteMetadata.googleSiteVerification,
            },
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        />
        <Navbar />
        {children}
        <Footer />
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
