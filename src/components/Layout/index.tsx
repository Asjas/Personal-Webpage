import React, { ReactNode } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/performance';

import ErrorBoundary from '../ErrorBoundary';
import Navbar from '../Navbar';

import setupLogRocket from '../../utils/logrocket';
import { ThemeProvider } from '../../utils/themed-styled-components';
import { GlobalStyle, myTheme } from '../../utils/theme';

import * as Styled from './style';

setupLogRocket();

const firebaseConfig = {
  apiKey: 'AIzaSyARArNM5Ps9wG-zSOS8Fe-tIzmNIu2lGBw',
  authDomain: 'personal-website-1213.firebaseapp.com',
  databaseURL: 'https://personal-website-1213.firebaseio.com',
  projectId: 'personal-website-1213',
  storageBucket: 'personal-website-1213.appspot.com',
  messagingSenderId: '436200487184',
  appId: '1:436200487184:web:a7cc904f69b93dd6',
};

firebase.initializeApp(firebaseConfig);
const perf = firebase.performance();

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
