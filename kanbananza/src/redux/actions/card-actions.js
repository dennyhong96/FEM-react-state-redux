import { mockAPI } from "../../utils";

export const CARD_CREATE = "CARD_CREATE";

export const createCardAction = ({ title, description, listId, id }) => async (dispatch) => {
	const response = await mockAPI({
		card: {
			id: Date.now().toString(),
			title,
			description,
		},
		listId,
		cardId: id,
	});

	dispatch({
		type: CARD_CREATE,
		payload: response,
	});
};
