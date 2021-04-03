import React from "react";
import { useSelector } from "react-redux";

import Card from "./Card";
import CreateCard from "./CreateCard";

const List = ({ listId }) => {
	const list = useSelector(({ list }) => list.entities[listId]);

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

export default List;
