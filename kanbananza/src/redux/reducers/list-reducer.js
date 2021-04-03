import { lists as defaultLists } from "../../default-state-normalized";
import { addChildIdToParent, removeChildIdFromParent } from "../../utils";
import { CARD_CREATE } from "../actions/card-actions";
import { CARD_MOVE } from "../actions/list-actions";

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

		case CARD_MOVE: {
			const { oldListId, newListId, cardId } = payload;

			const listsAfterCardRemoval = removeChildIdFromParent({
				state: lists,
				parentId: oldListId,
				childId: cardId,
				childProperty: "cards",
			});

			return addChildIdToParent({
				state: listsAfterCardRemoval,
				parentId: newListId,
				childId: cardId,
				childProperty: "cards",
			});
		}

		default: {
			return lists;
		}
	}
};
