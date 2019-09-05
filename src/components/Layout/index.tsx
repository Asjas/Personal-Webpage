import React from 'react';

import ErrorBoundary from '../ErrorBoundary';
import Navbar from '../Navbar';

import setupLogRocket from '../../utils/logrocket';
import { ThemeProvider } from '../../utils/themed-styled-components';
import { GlobalStyle, myTheme } from '../../utils/theme';

import * as Styled from './style';

if (process.env.NODE_ENV !== 'production') {
  setupLogRocket();
}

interface Props {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({ children }) => (
  <ThemeProvider theme={myTheme}>
    <ErrorBoundary>
      <GlobalStyle />
      <Styled.Layout>
        <Navbar />
        <Styled.Main>{children}</Styled.Main>
      </Styled.Layout>
    </ErrorBoundary>
  </ThemeProvider>
);

export default Layout;
