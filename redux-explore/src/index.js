const {
	createStore,
	combineReducers,
	bindActionCreators,
	applyMiddleware,
	compose,
} = require("redux");

const makeLouder = str => str.toUpperCase();
const repeatThreeTimes = str => str.repeat(3);
const embolden = str => str.bold(); // "<b>...</b>"

const composedFn = compose(embolden, repeatThreeTimes, makeLouder); // Pipe from last fn to first fn
console.log(composedFn("Hello"));

const counterReducer1 = (state = { counter: 0 }, action) => {
	const { type, payload } = action;
	switch (type) {
		case "ADD": {
			const { amount } = payload;
			return {
				...state,
				counter: state.counter + amount,
			};
		}

		default: {
			return state;
		}
	}
};

const counterReducer2 = (state = { counter: 999 }, action) => {
	const { type, payload } = action;
	switch (type) {
		case "SUBTRACT": {
			const { amount } = payload;
			return {
				...state,
				counter: state.counter - amount,
			};
		}

		default: {
			return state;
		}
	}
};

// Action creators
const createAddAction = amount => {
	return {
		type: "ADD",
		payload: { amount },
	};
};

const createSubtractAction = amount => {
	return {
		type: "SUBTRACT",
		payload: { amount },
	};
};

// Splitting up the store tree
// Action flows through all reducers
const rootReducer = combineReducers({
	counter1: counterReducer1,
	counter2: counterReducer2,
});

const store = createStore(rootReducer);

console.log(store);
/*
{
  dispatch: [Function: dispatch],
  subscribe: [Function: subscribe],
  getState: [Function: getState],
  replaceReducer: [Function: replaceReducer],
  [Symbol(observable)]: [Function: observable]
}
*/

const unsubscribe = store.subscribe(() => {
	console.log("STORE ->", store.getState());
});

const handrolledDispathAdd = amount => store.dispatch(createAddAction(amount));
handrolledDispathAdd(1);

const dispatchAdd = bindActionCreators(createAddAction, store.dispatch);
dispatchAdd(1);

const handrolledDispatchSubtract = amount => store.dispatch(createSubtractAction(amount));
handrolledDispatchSubtract(2);

const dispatchSubtract = bindActionCreators(createSubtractAction, store.dispatch);
dispatchSubtract(2);

unsubscribe(); // Clean up
