import React from "react";
import ReactDOM from "react-dom";

import { ReduxProvider } from "./redux";
import Application from "./components/Application";

import "./index.scss";

ReactDOM.render(
	<ReduxProvider>
		<Application />
	</ReduxProvider>,
	document.getElementById("root")
);
