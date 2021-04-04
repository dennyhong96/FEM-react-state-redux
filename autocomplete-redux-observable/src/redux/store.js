import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducer';
import rootEpic from './epic';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(epicMiddleware)
    : composeWithDevTools(applyMiddleware(epicMiddleware)),
);

// tell `epicMiddleware` to sit aside, listening to stream of actions
// and transform them to another stream of actions as needed
epicMiddleware.run(rootEpic);

// Provider
export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
