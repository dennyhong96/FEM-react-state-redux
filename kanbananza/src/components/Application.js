import React from "react";

import Users from "./Users";
import CreateList from "./CreateList";
import Lists from "./Lists";

import "../normolized-state";

const Application = () => {
	return (
		<main className="Application">
			<Users />
			<section>
				<CreateList />
				<Lists />
			</section>
		</main>
	);
};

export default Application;
