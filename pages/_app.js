import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
<<<<<<< HEAD
import { theme, GlobalStyles } from '../theme';
=======
import { theme, GlobalStyles } from '../src/theme';
>>>>>>> 9ee9ba1... move theme into a separate folder
import Page from '../src/components/Page';

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
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
