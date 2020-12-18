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
