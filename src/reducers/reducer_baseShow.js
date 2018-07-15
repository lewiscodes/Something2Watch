import { SET_SEARCH_STRING, RECEIVE_BASE_SHOW_SEARCH_RESULTS, RECEIVE_BASE_SHOW_EXTRA_SEARCH_RESULTS, RESET_SEARCH } from '../actions/baseShow';

const INITIAL_STATE = { searchString:'', searchResults: {}, searchResultsExtra: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_SEARCH_STRING:
      return {...state, searchString: action.payload}
    case RECEIVE_BASE_SHOW_SEARCH_RESULTS:
      return {...state, searchResults: action.payload}
    case RECEIVE_BASE_SHOW_EXTRA_SEARCH_RESULTS:
      let newArray = state.searchResultsExtra.concat(action.payload)
      newArray.sort(compare);
      return {...state, searchResultsExtra: newArray}
    case RESET_SEARCH:
      return {...state, searchResults: INITIAL_STATE.searchResults, searchResultsExtra: INITIAL_STATE.searchResultsExtra}
    default:
      return state;
  }
}

function compare(a, b) {
  if (isNaN(parseInt(a.imdbVotes, 10))) {a.imdbVotes = 0}
  if (isNaN(parseInt(b.imdbVotes, 10))) {b.imdbVotes = 0}
  return parseInt(a.imdbVotes, 10) > parseInt(b.imdbVotes, 10) ? -1 : 1;
}