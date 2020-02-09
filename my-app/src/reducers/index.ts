import { combineReducers } from 'redux'
import newsReducers from './news'

const allReducers = combineReducers({
  cards: newsReducers
});

export default allReducers;
