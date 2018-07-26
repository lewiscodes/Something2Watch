import { RECEIVE_RESULTS } from '../actions/results';

const INITIAL_STATE = { basicResults: {} };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case RECEIVE_RESULTS:
      return {...state, basicResults: {
        total_pages: action.payload.total_pages,
        page: action.payload.page,
        [`page${action.payload.page}results`]: getResultIDs(action.payload.results)
      }}
    default:
      return state;
  }
}

function getResultIDs (resultIds) {
  let ids = [];
  for (let x=0; x < Object.keys(resultIds).length; x++) {
    ids.push(resultIds[x].id)
  }

  return ids;
}