import { combineReducers } from 'redux';
import MetaReducer from './reducer_meta';
import BaseShowReducer from './reducer_baseShow';

const rootReducer = combineReducers({
  meta: MetaReducer,
  baseShow: BaseShowReducer
});

export default rootReducer;
