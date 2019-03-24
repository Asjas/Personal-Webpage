import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from './ErrorBoundary';
import Navbar from './Navbar';
import '../styles/main.scss';
import setupLogRocket from '../utils/logrocket';

setupLogRocket();

const Layout = ({ children }) => (
  <ErrorBoundary>
    <div className="page-layout">
      <Navbar />
      <main className="main">{children}</main>
    </div>
  </ErrorBoundary>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
