import { combineReducers } from 'redux';
import MetaReducer from './reducer_meta'

const rootReducer = combineReducers({
  meta: MetaReducer
});

export default rootReducer;
