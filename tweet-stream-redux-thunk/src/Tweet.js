import React from 'react';

const Tweet = ({ tweet }) => {
  console.log('re-rendered -->', `${tweet.text.slice(0, 10)}...`);

  return (
    <article className="Tweet">
      <header>
        <h2>{tweet.user.name} writes:</h2>
      </header>
      <p>{tweet.text}</p>
    </article>
  );
};

export default Tweet;
