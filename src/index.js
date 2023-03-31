import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './theme/GlobalStyle';
import { HashRouter } from 'react-router-dom';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
