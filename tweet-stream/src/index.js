import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import FetchTweets from './FetchTweets';
import Tweets from './Tweets';
import './styles.scss';

const store = createStore(
  reducer,
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(reduxThunk)
    : composeWithDevTools(applyMiddleware(reduxThunk)),
);

const Application = () => {
  return (
    <div className="Application">
      <h1>Tweet Stream</h1>
      <FetchTweets />
      <Tweets />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);
