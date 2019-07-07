import React, { ReactNode } from 'react';
import { ThemeProvider } from '../../utils/themed-styled-components';
import { GlobalStyle, myTheme } from '../../utils/theme';

import ErrorBoundary from '../ErrorBoundary';
import Navbar from '../Navbar';

import setupLogRocket from '../../utils/logrocket';

import * as Styled from './style';

setupLogRocket();

interface Props {
  children: ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({ children }): React.ReactElement => (
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
