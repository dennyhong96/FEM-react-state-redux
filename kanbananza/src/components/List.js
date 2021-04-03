import React, { memo } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

import Card from "./Card";
import CreateCard from "./CreateCard";

// Memoized selectors
const selectList = (list) => list.entities;
const selectListId = (list, listId) => listId;
const selectListById = createSelector([selectList, selectListId], (list, listId) => {
	return list[listId];
});

const List = ({ listId }) => {
	const list = useSelector(({ list }) => selectListById(list, listId));

	console.log("list rerendered -->", list.title);

	return (
		<article className="List">
			<h2>{list.title}</h2>
			<CreateCard listId={listId} />
			<div>
				{list.cards.map((cardId) => (
					<Card key={cardId} cardId={cardId} listId={listId} />
				))}
			</div>
		</article>
	);
};

export default memo(List);
