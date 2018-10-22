import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../theme';
import Page from '../src/components/Page';

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />Z
            <Page>
              <Component />
            </Page>
          </>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
