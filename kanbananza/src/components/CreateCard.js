import React, { useState } from "react";
import { useDispatch } from "react-redux";

const INITIAL_STATE = { title: "", description: "" };

const CreateCard = ({ listId }) => {
	const [{ title, description }, setState] = useState({ title: "", description: "" });
	const dispatch = useDispatch();

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setState((prev) => ({ ...prev, [name]: value }));
	};

	const isValid = () => title && description;

	const handleSubmit = (evt) => {
		evt.preventDefault();

		if (!isValid()) return;

		const id = Date.now().toString();

		dispatch({
			type: "CARD_CREATE",
			payload: {
				card: {
					id: Date.now().toString(),
					title,
					description,
				},
				listId,
				cardId: id,
			},
		});

		setState(INITIAL_STATE);
	};

	return (
		<form className="CreateCard" onSubmit={handleSubmit}>
			<input
				className="CreateCard-title"
				onChange={handleChange}
				name="title"
				placeholder="Title"
				type="text"
				value={title}
			/>
			<input
				className="CreateCard-description"
				onChange={handleChange}
				placeholder="Description"
				name="description"
				type="text"
				value={description}
			/>
			<input
				className="CreateCard-submit"
				type="submit"
				value="Create New Card"
				disabled={!isValid()}
			/>
		</form>
	);
};

export default CreateCard;
