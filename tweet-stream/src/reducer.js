import { combineReducers } from 'redux';

const tweets = (tweets = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case 'TWEETS_LIST': {
      return payload;
    }

    default: {
      return tweets;
    }
  }
};

export default combineReducers({
  tweets,
});
