import { combineReducers } from 'redux';

import Lapis from './lapisReducer';
import Rams from './ramReducer';
import Filters from './filterReducer';

// Wrap all reducers in a container
export default combineReducers({
  Lapis,
  Rams,
  Filters,
});
