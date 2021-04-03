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
