import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'; // Main styles
import store from './store/store';
import { Provider } from 'react-redux';

// Bootstrap CSS를 가져옵니다.
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
