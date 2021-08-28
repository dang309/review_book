import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

import TimeAgo from 'javascript-time-ago';

import vn from 'javascript-time-ago/locale/vi';

TimeAgo.addDefaultLocale(vn);
TimeAgo.addLocale(vn);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app'),
);
