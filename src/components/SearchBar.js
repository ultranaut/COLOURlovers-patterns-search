import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <form className={styles.search}>
      <label>Pattern keyword(s): </label>
      <input type="text" id="searchTerm" value="begin" />
      <input type="submit" value="search" />
    </form>
  );
};

export default SearchBar;
