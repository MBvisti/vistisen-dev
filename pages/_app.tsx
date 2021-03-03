import '../styles/globals.css'
import React from 'react';
import { AppProps } from 'next/app';
import { Layout } from '../screens/layout';
import { ThemeProvider } from 'styled-components';
import Meta from '../screens/components/meta';

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
            <Meta />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
