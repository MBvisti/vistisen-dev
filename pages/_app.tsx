import React from "react";
import { AppProps } from 'next/app';
import { Layout } from "../screens/layout";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from 'styled-components';

// TODO: try out: proxima-nova, sans-serif

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
  }
  
  input:focus {
    outline: none !important;
  }
`;

const darkTheme = {
    bg: "#0A0C0D",
    primary: "#F2F2F2",
    secondary: "#8C8C8C",
    accentOne: "#585959",
    accentTwo: "#252626",
}

function App({ Component}: AppProps) {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <Layout>
                <Component />
            </Layout>
        </ThemeProvider>
    )
}

export default App;