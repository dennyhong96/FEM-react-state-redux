export const CARD_CREATE = "CARD_CREATE";

export const createCard = ({ title, description, listId, id }) => {
	return {
		type: CARD_CREATE,
		payload: {
			card: {
				id: Date.now().toString(),
				title,
				description,
			},
			listId,
			cardId: id,
		},
	};
};
