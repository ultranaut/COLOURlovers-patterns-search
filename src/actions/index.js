import colourlovers from '../apis/colourlovers';

export const fetchPatterns = (keyword = 'begin') => (dispatch) => {
  const callback = (err, data) => {
    dispatch({
      type: 'FETCH_PATTERNS',
      payload: data,
    });
  };

  colourlovers(keyword, callback);
};

export const setSelectedPattern = (pattern = null) => {
  return {
    type: 'SET_SELECTED_PATTERN',
    payload: pattern,
  };
};
