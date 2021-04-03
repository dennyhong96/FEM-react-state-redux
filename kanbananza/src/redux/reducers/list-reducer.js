import { lists } from "../../default-state-normalized";

export default (state = lists, action) => {
	const { type, payload } = action;

	switch (type) {
		case "CARD_CREATE": {
			const { cardId, listId } = payload;
			return {
				...state,
				entities: {
					...state.entities,
					[listId]: {
						...state.entities[listId],
						cards: [...state.entities[listId].cards, cardId],
					},
				},
			};
		}

		default: {
			return state;
		}
	}
};
