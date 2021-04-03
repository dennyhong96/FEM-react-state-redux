import React, { useMemo } from 'react';
import { render } from 'react-dom';

import { createStore, bindActionCreators } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

import './styles.scss';

// action types
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const RESET = 'RESET';

// reducer
const INITIAL_STATE = { count: 0 };

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREASE: {
      return { ...state, count: state.count + 1 };
    }

    case DECREASE: {
      return { ...state, count: state.count - 1 };
    }

    case RESET: {
      return INITIAL_STATE;
    }

    default: {
      return state;
    }
  }
};

// store
const store = createStore(reducer);

// action creators
const increaseCount = () => ({
  type: INCREASE,
});

const decreaseCount = () => ({
  type: DECREASE,
});

const resetCount = () => ({
  type: RESET,
});

const App = () => {
  const count = useSelector(({ count }) => count); // re-run when 'count' changes
  const dispatch = useDispatch();

  // bind dispatch to action creators
  const { increase, decrease, reset } = useMemo(
    () =>
      bindActionCreators(
        {
          increase: increaseCount,
          decrease: decreaseCount,
          reset: resetCount,
        },
        dispatch,
      ),
    [],
  );

  return (
    <main className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}>Decrement</button>
        <button onClick={reset}>Reset</button>
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
