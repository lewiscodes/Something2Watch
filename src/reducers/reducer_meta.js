import settings from '../settings.json'
import { SET_SEARCH_TYPE, RECEIVE_GENRES } from '../actions/meta';

const INITIAL_STATE = { api: settings.api, resultsApi:settings.resultsApi, searchType: '', genres: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_SEARCH_TYPE:
      return {...state, searchType: action.payload}
    case RECEIVE_GENRES:
      return {...state, genres: action.payload.genres}
    default:
      return state;
  }
}
