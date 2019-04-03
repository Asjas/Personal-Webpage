import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from './ErrorBoundary';
import Navbar from './Navbar';
import '../styles/main.scss';
import setupLogRocket from '../utils/logrocket';

setupLogRocket();

const Layout = ({ children }) => (
  <ErrorBoundary>
    <div className="layout">
      <Navbar />
      <main className="main">{children}</main>
    </div>
  </ErrorBoundary>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
};

export default Layout;
