import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(loggerMiddleware);
}

export const middlewareEnhancer = applyMiddleware(...middlewares);
