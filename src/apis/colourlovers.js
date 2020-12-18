import jsonp from 'jsonp';

const colourlovers = (keyword = 'begin', callback) => {
  const baseURL = 'http://www.colourlovers.com/api/patterns/top';
  jsonp(`${baseURL}?keywords=${keyword}`, { param: 'jsonCallback' }, callback);
};

export default colourlovers;
