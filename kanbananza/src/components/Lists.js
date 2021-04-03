import React from "react";

import { useSelector } from "react-redux";

import List from "./List";

const Lists = () => {
	const listIds = useSelector(({ list }) => list.ids);

	return (
		<section className="Lists">
			{listIds.map((listId) => (
				<List key={listId} listId={listId} />
			))}
		</section>
	);
};

export default Lists;
