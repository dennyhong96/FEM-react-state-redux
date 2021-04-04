import React from 'react';
import { useSelector } from 'react-redux';

import Tweet from './Tweet';

const Tweets = () => {
  const tweets = useSelector(({ tweets }) => tweets);

  return (
    <section className="Tweets">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </section>
  );
};

export default Tweets;
