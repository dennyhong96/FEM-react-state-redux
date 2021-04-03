import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { createSelector } from "reselect";
import { moveCardAction } from "../redux/actions/list-actions";

// Memoized selector
const selectLists = (list) => Object.values(list.entities);
const listsSelector = createSelector([selectLists], (lists) => lists);

const MoveCardToList = ({ listId, cardId }) => {
	const lists = useSelector(({ list }) => listsSelector(list));
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

export default MoveCardToList;
