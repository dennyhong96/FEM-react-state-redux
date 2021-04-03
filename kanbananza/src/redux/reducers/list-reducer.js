import { lists as defaultLists } from "../../default-state-normalized";
import { addChildIdToParent } from "../../utils";
import { CARD_CREATE } from "../actions/card-actions";

export default (lists = defaultLists, action) => {
	const { type, payload } = action;

	switch (type) {
		case CARD_CREATE: {
			const { cardId, listId } = payload;
			return addChildIdToParent({
				state: lists,
				parentId: listId,
				childId: cardId,
				childProperty: "cards",
			});
		}

		default: {
			return lists;
		}
	}
};
