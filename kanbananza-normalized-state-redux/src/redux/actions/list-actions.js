import { mockAPI } from "../../utils";

export const CARD_MOVE = "CARD_MOVE";

export const moveCardAction = ({ oldListId, newListId, cardId }) => async (dispatch) => {
	const response = await mockAPI({
		oldListId,
		newListId,
		cardId,
	});

	dispatch({
		type: "CARD_MOVE",
		payload: response,
	});
};
