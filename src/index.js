import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'

import Routes from './Routes';
import GlobalStyle from './shared/globalStyle';
import theme from './shared/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
