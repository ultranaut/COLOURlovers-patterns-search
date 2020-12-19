import { combineReducers } from 'redux';

const fetchPatternsReducer = (patterns = [], action) => {
  switch (action.type) {
    case 'FETCH_PATTERNS':
      return action.payload;

    default:
      return patterns;
  }
};

const setSelectedPatternReducer = (pattern = null, action) => {
  switch (action.type) {
    case 'SET_SELECTED_PATTERN':
      return action.payload;
    default:
      return pattern;
  }
};

export default combineReducers({
  patterns: fetchPatternsReducer,
  selectedPattern: setSelectedPatternReducer,
});
