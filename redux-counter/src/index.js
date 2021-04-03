import React from 'react';
import { render } from 'react-dom';

import './styles.scss';

const App = () => {
  return (
    <main className="Counter">
      <p className="count">0</p>
      <section className="controls">
        <button>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
      </section>
    </main>
  );
};

render(<App />, document.getElementById('root'));
