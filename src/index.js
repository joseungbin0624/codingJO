import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // react-redux에서 Provider 컴포넌트를 임포트합니다.
import { store } from './store/store'; // 수정된 store 경로를 임포트합니다.
import App from './App';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}> 
    <App />
  </Provider>
);
