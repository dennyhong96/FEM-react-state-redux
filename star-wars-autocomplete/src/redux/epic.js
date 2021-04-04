import { ajax } from 'rxjs/ajax';
import { map, mergeMap, tap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { FETCH_CHARACTERS, fullfillFetchCharacters } from './actions';

const API_ENDPOINT = 'https://star-wars-characters.glitch.me/api/search/';

// action comes in, actions go out
const fetchCharactersEpic = (action$, state) => {
  return action$.pipe(
    ofType(FETCH_CHARACTERS), // returns true of false
    mergeMap((action) => {
      /* action { payload: {searchTerm: "d"}
        type: "FETCH_CHARACTERS" } */

      const {
        payload: { searchTerm },
      } = action;

      return ajax.getJSON(`${API_ENDPOINT}${searchTerm}`).pipe(
        tap((val) => console.log({ val })),
        map((response) => fullfillFetchCharacters(response.results)),
      );
    }), // margeMap is like flatMap
  );
};

export default fetchCharactersEpic;
