import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './theme/GlobalStyle';
import { HashRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
