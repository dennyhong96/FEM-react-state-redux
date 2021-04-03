import React from "react";
import { useSelector } from "react-redux";

import MoveCardToList from "./MoveCardToList";

const Card = ({ cardId, listId }) => {
	const card = useSelector(({ card }) => card.entities[cardId]);

	console.log({ card });

	return (
		<article className="Card">
			<h3>{card.title}</h3>
			<div className="Card-description">{card.description}</div>
			{/* <MoveCardToList cardId={card.id} listId={listId} /> */}
		</article>
	);
};

export default Card;
