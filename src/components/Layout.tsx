import React, { ReactNode } from 'react';
import styled from 'styled-components';

import ErrorBoundary from './ErrorBoundary';
import Navbar from './Navbar';

import '../styles/main.scss';

import setupLogRocket from '../utils/logrocket';

setupLogRocket();

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 360px 1fr;
  grid-template-areas: 'sidenav main';

  @media (max-width: $laptopL) {
    grid-template-columns: 300px 1fr;
  }

  @media (max-width: $laptop) {
    grid-template-columns: 1fr;
    grid-template-areas: 'main';
  }
`;

const Main = styled.main`
  grid-area: main;
  margin: 60px 0;
`;

interface Props {
  children: ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({ children }): React.ReactElement => (
  <ErrorBoundary>
    <StyledLayout>
      <Navbar />
      <Main>{children}</Main>
    </StyledLayout>
  </ErrorBoundary>
);

export default Layout;
