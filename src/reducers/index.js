import { combineReducers } from 'redux';
import MetaReducer from './reducer_meta';
import BaseShowReducer from './reducer_baseShow';
import ResultsReducer from './reducer_results';

const rootReducer = combineReducers({
  meta: MetaReducer,
  baseShow: BaseShowReducer,
  results: ResultsReducer
});

export default rootReducer;
