import {
  SET_SEARCH_STRING,
  RECEIVE_BASE_SHOW_SEARCH_RESULTS,
  RECEIVE_BASE_SHOW_EXTRA_SEARCH_RESULTS,
  RESET_SEARCH, SET_BASE_SHOW,
  RECEIVE_BASE_SHOW_RESULTS_API_ID,
  RECEIVE_BASE_SHOW_GENRES_FROM_RESULTS_API,
  GET_BASE_SHOW_GENRES_FROM_RESULTS_API
} from '../actions/baseShow';

const INITIAL_STATE = { 
  searchString:'',
  searchResults: {},
  searchResultsExtra: [],
  baseShowImdbId: null,
  baseShowResultsApiId: null,
  baseShowResultsApiGenres: null,
  gotBaseShowGenres: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_SEARCH_STRING:
      return {...state, searchString: action.payload}
    case RECEIVE_BASE_SHOW_SEARCH_RESULTS:
      return {...state, searchResults: action.payload}
    case RECEIVE_BASE_SHOW_EXTRA_SEARCH_RESULTS:
      let receiveBaseShowExtraSearchResultsArray = state.searchResultsExtra.concat(action.payload)
      receiveBaseShowExtraSearchResultsArray.sort(compare);
      return {...state, searchResultsExtra: receiveBaseShowExtraSearchResultsArray}
    case RESET_SEARCH:
      return {...state, searchResults: INITIAL_STATE.searchResults, searchResultsExtra: INITIAL_STATE.searchResultsExtra}
    case SET_BASE_SHOW:
      return {...state, baseShowImdbId: action.payload}
    case RECEIVE_BASE_SHOW_RESULTS_API_ID:
      return {...state, baseShowResultsApiId: action.payload}
    case RECEIVE_BASE_SHOW_GENRES_FROM_RESULTS_API:
      return {...state, baseShowResultsApiGenres: action.payload}
    case GET_BASE_SHOW_GENRES_FROM_RESULTS_API:
      return {...state, gotBaseShowGenres: true}
    default:
      return state;
  }
}

function compare(a, b) {
  if (isNaN(parseInt(a.imdbVotes, 10))) {a.imdbVotes = 0}
  if (isNaN(parseInt(b.imdbVotes, 10))) {b.imdbVotes = 0}
  return parseInt(a.imdbVotes, 10) > parseInt(b.imdbVotes, 10) ? -1 : 1;
}