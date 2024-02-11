import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// 개발 환경에서 Redux DevTools와 함께 Thunk 미들웨어를 사용하기 위한 설정
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

export const configureMiddleware = () => applyMiddleware(...middlewares);

export const composeWithDevTools = composeEnhancers(configureMiddleware());

