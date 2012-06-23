/*global jQuery, $ */
var UN = (function() {
  var callAPI,
      makeStack,
      displayTitle,
      layTiles,
      cLovers,
      bgStack = [],
      canvas = document.getElementById("mycanvas"),
      context = canvas.getContext("2d"),
      my = {};

  cLovers = {
    url: "http://www.colourlovers.com/api/patterns/top",
    data: {
      keywords: null
    }
  };

  /* ******************************************************** */
  /* **             "PRIVATE" vars and methods             ** */
  /* ******************************************************** */
  // makes a call to an API and sets a callback function
  callAPI = function (api, term, fn) {
    $.ajax(api.url, {
      data: api.data,
      dataType: 'jsonp',
      jsonp: 'jsonCallback',
      success: fn
    });
  };

  // clears out the pattern stack and builds a new one with the new results
  makeStack = function (list) {
    var item;
    if (!list.length) {
      alert('Your search yielded no results.');
      return false;
    }
    bgStack.length = 0;
    for (item in list) {
      if (list.hasOwnProperty(item)) {
        bgStack.push({url: list[item].imageUrl, title: list[item].title});
      }
    }
    my.drawBg();
  };

  // swap out the copy in the h1
  displayTitle = function (title) {
    jQuery('#title').html(title);
  };

  // distributes the pattern tiles across the canvas
  // centering them vertically and horizontally
  layTiles = function (img) {
    var i, j, x, y,
        numCols = Math.ceil(canvas.width / img.width),
        numRows = Math.ceil(canvas.height /  img.height),
        xOffset = Math.floor(((numCols * img.width) - canvas.width) / 2),
        yOffset = Math.floor(((numRows * img.height) - canvas.height) / 2);

    this.clearCanvas();
    for (i = 0; i < numRows; i++) {
      y = i * img.height - yOffset;
      for (j = 0; j < numCols; j++) {
        x = j * img.width - xOffset;
        context.drawImage(img, x, y);
      }
    }
  };

  // wipes the canvas clean, this is the easiest way
  // that I've found to do this
  clearCanvas = function () {
    canvas.width = canvas.width;
  };


  /* ******************************************************** */
  /* **                     "PUBLIC" API                   ** */
  /* ******************************************************** */
  // takes a search term or gets what's in the input field,
  // gets the API info from the associated object and
  // invokes the API call
  my.search = function (term) {
    term = term || jQuery('#searchTerm').val();
    if (!term) { return false; }
    cLovers.data.keywords = term;
    callAPI(cLovers, term, makeStack);
    return false;
  };

  // handles the process of switching out the canvas and title
  my.drawBg = function (list) {
    var img = document.createElement('img'),
        pattern = bgStack.shift();

    img.src = pattern.url;
    img.onload = function () {
      layTiles(img);
      displayTitle(pattern.title);
    };
    bgStack.push(pattern);
  };

  return my;
})();

jQuery(document).ready(function () {
  console.log('load');
  UN.search('begin');
  jQuery('#mycanvas').bind('click', UN.drawBg);
  jQuery('#search').bind('submit', function () {
    UN.search();
    return false;
  });
});
