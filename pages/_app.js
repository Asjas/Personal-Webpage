import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Layout from '../src/components/Layout';
import { theme, GlobalStyles } from './styles/theme';

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <Layout>
              <Component />
            </Layout>
          </>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
