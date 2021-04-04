import { combineReducers } from 'redux';
import { FETCH_CHARACTERS, FETCH_CHARACTERS_FULLFILLED } from './actions';

const charactersReducer = (characters = [], action) => {
  const { type, payload } = action;

  switch (type) {
    // epic is receiving and transforming `FETCH_CHARACTERS`
    // they are still passed to reducers
    // case FETCH_CHARACTERS: {
    //   return characters;
    // }

    case FETCH_CHARACTERS_FULLFILLED: {
      return payload;
    }

    default: {
      return characters;
    }
  }
};

export default combineReducers({
  characters: charactersReducer,
});
