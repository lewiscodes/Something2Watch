import { compare } from '../helpers';

import {
  SET_SEARCH_STRING,
  RECEIVE_BASE_SHOW_SEARCH_RESULTS,
  RECEIVE_BASE_SHOW_EXTRA_SEARCH_RESULTS,
  RESET_SEARCH,
  SET_BASE_SHOW
} from '../actions/baseShow';

import { 
  RECEIVED_SELECTED_BASE_SHOW_ID, 
  RECEIVED_SELECTED_BASE_SHOW_GENRES
} from '../actions/results';

const INITIAL_STATE = { 
  searchString:'',
  searchResults: {},
  searchResultsExtra: [],
  baseShowImdbId: null,
  gotBaseShowGenres: false,
  selectedBaseShowId: null,
  selectedBaseShowGenres: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_SEARCH_STRING:
      return {...state, searchString: action.payload};
    case RECEIVE_BASE_SHOW_SEARCH_RESULTS:
      return {...state, searchResults: action.payload};
    case RECEIVE_BASE_SHOW_EXTRA_SEARCH_RESULTS:
      let receiveBaseShowExtraSearchResultsArray = state.searchResultsExtra.concat(action.payload);
      receiveBaseShowExtraSearchResultsArray.sort(compare);
      return {...state, searchResultsExtra: receiveBaseShowExtraSearchResultsArray};
    case RESET_SEARCH:
      return {...state, searchResults: INITIAL_STATE.searchResults, searchResultsExtra: INITIAL_STATE.searchResultsExtra};
    case SET_BASE_SHOW:
      return {...state, baseShowImdbId: action.payload};
    case RECEIVED_SELECTED_BASE_SHOW_ID:
      return {...state, selectedBaseShowId: action.payload};
    case RECEIVED_SELECTED_BASE_SHOW_GENRES:
      return {...state, selectedBaseShowGenres: action.payload};
    default:
      return state;
  }
}