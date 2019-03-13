import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Navbar from './Navbar';
import '../styles/main.scss';

const Layout = ({ children }) => (
  <ErrorBoundary>
    <div className="page-layout">
      <Navbar />
      <main className="main">{children}</main>
    </div>
  </ErrorBoundary>
);

export default Layout;
