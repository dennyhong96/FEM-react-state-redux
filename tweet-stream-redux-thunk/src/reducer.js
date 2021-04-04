import { combineReducers } from 'redux';

const tweetsReducer = (tweets = [], action) => {
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

const loadingReducer = (isLoading = false, action) => {
  const { type } = action;

  switch (type) {
    case 'TWEETS_LOADING': {
      return true;
    }

    case 'TWEETS_LIST': {
      return false;
    }

    default: {
      return isLoading;
    }
  }
};

export default combineReducers({
  tweets: tweetsReducer,
  loading: loadingReducer,
});
