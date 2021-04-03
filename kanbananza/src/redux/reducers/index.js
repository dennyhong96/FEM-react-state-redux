import { combineReducers } from "redux";

import list from "./list-reducer";
import card from "./card-reducer";

export default combineReducers({ list, card });
