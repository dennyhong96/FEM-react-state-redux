import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const middlewares = [];

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
