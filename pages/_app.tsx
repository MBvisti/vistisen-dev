import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css'
import { Layout } from '../components/layout';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4 {
    margin: 0;
  }

  p {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: #0A0C0D;
  }

  input:focus {
    outline: none !important;
  }
`;

// should probably have accentDark and accentLight
const lightTheme = {
    bg: '#F2F2F2',
    primary: '#0A0C0D',
    secondary: '#252626',
    accentOne: '#585959',
    accentTwo: '#F2F2F2',
};

function App({ Component, pageProps }: AppProps) {
    let theme = lightTheme;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
