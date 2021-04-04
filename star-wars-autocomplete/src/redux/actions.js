export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_FULLFILLED = 'FETCH_CHARACTERS_FULLFILLED';

// "epic" takes in a steam of actions (fetchCharacters) dispatched
// and returns a stream of new actions (fullfillFetchCharacters) to dispatch

export const fetchCharacters = (searchTerm) => {
  return {
    type: FETCH_CHARACTERS,
    payload: { searchTerm },
  };
};

export const fullfillFetchCharacters = (payload) => {
  // payload represents what's returned from api
  return {
    type: FETCH_CHARACTERS_FULLFILLED,
    payload,
  };
};
