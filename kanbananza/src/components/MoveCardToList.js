import React, { useMemo, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { createSelector } from "reselect";

import { moveCardAction } from "../redux/actions/list-actions";

const getList = (state) => {
	console.log("selector ran");
	return Object.values(state.list.entities);
};

// Memoized selector
const selectLists = (state) => getList(state);
const listsSelector = createSelector(
	[selectLists],
	(lists) => lists // if `selectLists` selector returns the same value, this function will not re-run
);

const MoveCardToList = ({ listId, cardId }) => {
	const lists = useSelector((state) => listsSelector(state)); // memoized selector
	// const lists = useSelector(getList); // unmemoized selector
	const dispatch = useDispatch();

	const { moveCard } = useMemo(() => bindActionCreators({ moveCard: moveCardAction }, dispatch), [
		dispatch,
	]);

	const handleChange = (evt) => {
		moveCard({ oldListId: listId, newListId: evt.target.value, cardId });
	};

	return (
		<select className="Card-move" value={listId} onChange={handleChange}>
			{lists.map((list) => (
				<option value={list.id} key={list.id}>
					{list.title}
				</option>
			))}
		</select>
	);
};

export default memo(MoveCardToList);
