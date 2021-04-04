import React from 'react';
import ReactDOM from 'react-dom';

import { ReduxProvider } from './redux/store';
import FetchCharacters from './FetchCharacters';
import Characters from './Characters';
import './styles.scss';

const Application = () => {
  return (
    <div className="Application">
      <h1>Star Wars Autocomplete</h1>
      <FetchCharacters />
      <Characters />
    </div>
  );
};

ReactDOM.render(
  <ReduxProvider>
    <Application />
  </ReduxProvider>,
  document.getElementById('root'),
);
