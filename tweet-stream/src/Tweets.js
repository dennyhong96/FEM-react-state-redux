import React from 'react';
import { useSelector } from 'react-redux';

import Tweet from './Tweet';

const Tweets = () => {
  const tweets = useSelector(({ tweets }) => tweets);
  const isLoading = useSelector(({ loading }) => loading);

  return (
    <section className="Tweets">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        tweets.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
      )}
    </section>
  );
};

export default Tweets;
