import React from 'react';

const App = () => {
  return (
    <div>
      <form id="search">
        <label>Pattern keyword(s): </label>
        <input type="text" id="searchTerm" value="begin" />
        <input type="submit" value="search" />
      </form>
      <canvas id="mycanvas" width="720" height="360"></canvas>

      <h2 id="title">Title</h2>
    </div>
  );
};

export default App;
