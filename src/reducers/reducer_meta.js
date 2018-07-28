import settings from '../settings.json';
import { SET_SEARCH_TYPE } from '../actions/meta';

const INITIAL_STATE = { api: settings.api, resultsApi:settings.resultsApi, searchType: '' };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_SEARCH_TYPE:
      return {...state, searchType: action.payload};
    default:
      return state;
  }
}
