import { SET_SEARCH_STRING, RECEIVE_BASE_SHOW_SEARCH_RESULTS, RECEIVE_BASE_SHOW_EXTRA_SEARCH_RESULTS, RESET_SEARCH } from '../actions/baseShow';

const INITIAL_STATE = { searchString:'', searchResults: {}, searchResultsExtra: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_SEARCH_STRING:
      return {...state, searchString: action.payload}
    case RECEIVE_BASE_SHOW_SEARCH_RESULTS:
      return {...state, searchResults: action.payload}
    case RECEIVE_BASE_SHOW_EXTRA_SEARCH_RESULTS:
      return {...state, searchResultsExtra: state.searchResultsExtra.concat(action.payload)}
    case RESET_SEARCH:
      return {...state, searchResults: INITIAL_STATE.searchResults, searchResultsExtra: INITIAL_STATE.searchResultsExtra}
    default:
      return state;
  }
}
