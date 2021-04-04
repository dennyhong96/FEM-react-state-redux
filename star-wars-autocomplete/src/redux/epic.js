import { ajax } from 'rxjs/ajax';
import { map, mergeMap, takeUntil, tap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { FETCH_CHARACTERS, fullfillFetchCharacters } from './actions';

const API_ENDPOINT = 'https://star-wars-characters.glitch.me/api/search/';

// action comes in, actions go out
const fetchCharactersEpic = (action$, state) => {
  // action$ is the whole stream
  return action$.pipe(
    ofType(FETCH_CHARACTERS), // returns true of false
    tap((val) => val), // logging
    mergeMap((action) => {
      /* action { payload: {searchTerm: "d"}
        type: "FETCH_CHARACTERS" } */

      // takes every individual `FETCH_CHARACTERS` action, fires ajax and get json response
      return ajax.getJSON(`${API_ENDPOINT}${action.payload.searchTerm}`).pipe(
        // when we get the response, morph into `fullfillFetchCharacters` action to pass to redux
        map((response) => fullfillFetchCharacters(response.results)),

        // keep reading from the stream until a new `FETCH_CHARACTERS` action comes in,
        // cancel previous one if that happens
        takeUntil(
          action$.pipe(
            tap((val) => console.log('Canceling...', val)),
            ofType(FETCH_CHARACTERS),
          ),
        ),
      );
    }), // margeMap is like flatMap
  );
};

export default fetchCharactersEpic;
