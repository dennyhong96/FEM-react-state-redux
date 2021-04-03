import React, { memo } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

import MoveCardToList from "./MoveCardToList";

// Memoized selectors
const selectCards = (state, cardId) => {
	const cards = state.card.entities;
	return cards;
};
const selectCardId = (state, cardId) => cardId;
const selectCardById = createSelector([selectCards, selectCardId], (cards, cardId) => {
	// `cards` is what returned from `selectCards`
	// `cardId` is what returned from `selectCardId`
	return cards[cardId]; // if `selectCards` and `selectCardId` selectors returns the same value, this function will not re-run
});

const Card = ({ cardId, listId }) => {
	const card = useSelector((state) => selectCardById(state, cardId));

	console.log("card rerendered -->", card.title);

	return (
		<article className="Card">
			<h3>{card.title}</h3>
			<div className="Card-description">{card.description}</div>
			<MoveCardToList cardId={card.id} listId={listId} />
		</article>
	);
};

export default memo(Card);
