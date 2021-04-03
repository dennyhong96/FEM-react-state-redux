import { cards as defaultCards } from "../../default-state-normalized";
import { addEntity } from "../../utils";
import { CARD_CREATE } from "../actions/card-actions";

export default (cards = defaultCards, action) => {
	const { type, payload } = action;

	switch (type) {
		case CARD_CREATE: {
			const { card, cardId } = payload;
			return addEntity({
				state: cards,
				id: cardId,
				entity: card,
			});
		}

		default: {
			return cards;
		}
	}
};
