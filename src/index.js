import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap js
import 'bootstrap/dist/js/bootstrap.bundle.min';

import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
