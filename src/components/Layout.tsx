import React, { ReactNode } from 'react';

import ErrorBoundary from './ErrorBoundary';
import Navbar from './Navbar';

import '../styles/main.scss';

import setupLogRocket from '../utils/logrocket';

setupLogRocket();

interface Props {
  children: ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({ children }): React.ReactElement => (
  <ErrorBoundary>
    <div className="layout">
      <Navbar />
      <main className="main">{children}</main>
    </div>
  </ErrorBoundary>
);

export default Layout;
