export const CARD_MOVE = "CARD_MOVE";

export const moveCardAction = ({ oldListId, newListId, cardId }) => {
	return {
		type: "CARD_MOVE",
		payload: {
			oldListId,
			newListId,
			cardId,
		},
	};
};
