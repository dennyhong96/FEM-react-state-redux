const API_ENDPOINT = 'http://tweet-stream.glitch.me/api/tweets';

export const listTweetsAction = () => async (dispatch) => {
  const res = await fetch(API_ENDPOINT);
  const { tweets } = await res.json();

  dispatch({
    type: 'TWEETS_LIST',
    payload: tweets,
  });
};
