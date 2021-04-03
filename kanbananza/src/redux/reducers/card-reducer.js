import { cards } from "../../default-state-normalized";

export default (state = cards, action) => {
	const { type, payload } = action;

	switch (type) {
		case "CARD_CREATE": {
			const { card, cardId } = payload;
			return {
				...state,
				entities: { ...state.entities, [cardId]: card },
				ids: [...state.ids, cardId],
			};
		}

		default: {
			return state;
		}
	}
};
