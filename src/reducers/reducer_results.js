import { getResultIDs } from '../helpers';
import { RECEIVED_INITIAL_RESULTS } from '../actions/results';

const INITIAL_STATE = { basicResults: {} , basicResultsImdbId: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case RECEIVED_INITIAL_RESULTS:
      return {...state, basicResults: {
        total_pages: action.payload.total_pages,
        page: action.payload.page,
        resultIDs: getResultIDs(action.payload.results)
      }};
    default:
      return state;
  }
}