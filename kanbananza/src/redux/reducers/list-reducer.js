import { lists } from "../../default-state-normalized";

export default (state = lists, action) => {
	const { type, payload } = action;

	switch (type) {
		case "": {
			return { ...state };
		}

		default: {
			return state;
		}
	}
};
