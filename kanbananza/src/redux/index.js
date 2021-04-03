import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const middlewares = [reduxThunk];

const store = createStore(
	rootReducer,
	// Use redux devtools in development
	process.env.NODE_ENV === "production"
		? applyMiddleware(...middlewares)
		: composeWithDevTools(applyMiddleware(...middlewares))
);

export const ReduxProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
