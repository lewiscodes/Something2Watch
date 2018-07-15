import settings from '../settings.json'
import { SET_NUMBER } from '../actions/meta';

const INITIAL_STATE = { api: settings.api };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_NUMBER:
      return {...state, number: action.payload}
    default:
      return state;
  }
}
