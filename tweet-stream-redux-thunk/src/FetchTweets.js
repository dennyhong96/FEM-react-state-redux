import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { listTweetsAction } from './actions';

const FetchTweets = () => {
  const dispatch = useDispatch();

  const { listTweets } = useMemo(
    () => bindActionCreators({ listTweets: listTweetsAction }, dispatch),
    [dispatch],
  );

  return <button onClick={listTweets}>Fetch Tweets</button>;
};

export default FetchTweets;
