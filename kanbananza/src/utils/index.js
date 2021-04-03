export const addEntity = ({ state, id, entity }) => {
	return {
		...state,
		entities: { ...state.entities, [id]: entity },
		ids: [...state.ids, id],
	};
};

export const addChildIdToParent = ({ state, parentId, childId, childProperty }) => {
	return {
		...state,
		entities: {
			...state.entities,
			[parentId]: {
				...state.entities[parentId],
				[childProperty]: [...state.entities[parentId][childProperty], childId],
			},
		},
	};
};

export const removeChildIdFromParent = ({ state, parentId, childId, childProperty }) => {
	return {
		...state,
		entities: {
			...state.entities,
			[parentId]: {
				...state.entities[parentId],
				[childProperty]: state.entities[parentId][childProperty].filter(
					(id) => id !== childId
				),
			},
		},
	};
};

export const mockAPI = async (response) => {
	const randomDelay = (Math.ceil(Math.random() * 3) + 3) * 100;
	return await new Promise((resolve) => setTimeout(resolve.bind(this, response), randomDelay));
};
