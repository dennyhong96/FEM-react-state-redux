import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

import './styles.scss';

const INITIAL_STATE = { count: 0 };

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INCREASE': {
      return { ...state, count: state.count + 1 };
    }

    case 'DECREASE': {
      return { ...state, count: state.count - 1 };
    }

    case 'RESET': {
      return INITIAL_STATE;
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

const increaseCount = (dispatch) => () => {
  dispatch({
    type: 'INCREASE',
  });
};

const decreaseCount = (dispatch) => () => {
  dispatch({
    type: 'DECREASE',
  });
};

const resetCount = (dispatch) => () => {
  dispatch({
    type: 'RESET',
  });
};

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <main className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increaseCount(dispatch)}>Increment</button>
        <button onClick={decreaseCount(dispatch)}>Decrement</button>
        <button onClick={resetCount(dispatch)}>Reset</button>
      </section>
    </main>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
