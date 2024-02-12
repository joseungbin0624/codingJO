// src/store/index.js

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // 모든 리듀서를 결합한 rootReducer 파일 경로를 적절히 지정하세요.

// Redux DevTools 확장 프로그램을 사용할 수 있도록 설정
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 스토어 생성
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
