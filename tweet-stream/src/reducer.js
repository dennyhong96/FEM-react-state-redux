import { combineReducers } from 'redux';

const tweets = (tweets = [], action) => {
  const { type, payload } = action;

  return tweets;
};

export default combineReducers({
  tweets,
});
