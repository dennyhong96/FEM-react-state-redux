const API_ENDPOINT = 'http://tweet-stream.glitch.me/api/tweets';

// async action creator
export const listTweetsAction = () => async (dispatch) => {
  dispatch(setTweetsLoading());

  const { tweets } = await fetch(API_ENDPOINT).then((res) => res.json());

  dispatch({
    type: 'TWEETS_LIST',
    payload: tweets,
  });
};

export const setTweetsLoading = () => (dispatch) => {
  dispatch({
    type: 'TWEETS_LOADING',
  });
};
