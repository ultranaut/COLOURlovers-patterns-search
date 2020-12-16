import { combineReducers } from 'redux';

const fetchPatternsReducer = (patterns = [], action) => {
  switch (action.type) {
    case 'FETCH_PATTERNS':
      return action.payload;

    default:
      return patterns;
  }
};

export default combineReducers({
  patterns: fetchPatternsReducer,
});
