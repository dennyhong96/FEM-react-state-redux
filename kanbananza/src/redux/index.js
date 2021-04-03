import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const middlewares = [];

const store = createStore(rootReducer, composeWithDevTools(...middlewares));

export const ReduxProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
