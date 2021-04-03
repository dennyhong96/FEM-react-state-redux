import { schema, normalize } from "normalizr";

import defaultState from "./default-state.json";

// Normalize default state

const userSchema = new schema.Entity("users");
const cardSchema = new schema.Entity("cards", { assignedTo: userSchema });
const listSchema = new schema.Entity("lists", { cards: [cardSchema] });

const normalizedLists = normalize(defaultState.lists, [listSchema]);
const normalizedUsers = normalize(defaultState.users, [userSchema]);

export const lists = {
	entities: normalizedLists.entities.lists,
	ids: normalizedLists.result,
};

export const users = {
	entities: normalizedUsers.entities.users,
	ids: normalizedUsers.result,
};

export const cards = {
	entities: normalizedLists.entities.cards,
	ids: Object.keys(normalizedLists.entities.cards),
};
