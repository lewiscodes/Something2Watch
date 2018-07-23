import { SEARCH_RESULTS } from '../actions/results';

const INITIAL_STATE = { results: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SEARCH_RESULTS:
      return {...state, results: action.payload}
    default:
      return state;
  }
}
