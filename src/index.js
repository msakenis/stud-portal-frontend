import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import 'normalize.css';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import AuthProvider from './contexts/Auth.context';
import HighlightIdProvider from './contexts/HighlightId.context';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <HighlightIdProvider>
          <Routes />
        </HighlightIdProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
