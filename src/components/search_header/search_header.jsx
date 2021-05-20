import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({search}) => {

  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const query = inputRef.current.value;
    search(query);
    inputRef.current.value = '';
  }

  // console.log('header!');
  return (
    <header className={styles.header}>
      <div className={styles.logoWrap}>
        <img className={styles.logo} src="/images/logo.png" alt="logo"/>
        <h1>Youtube</h1>
      </div>
      <form className={styles.searchForm} onSubmit={onSubmit}>
        <input ref={inputRef} className={styles.input} type="search"/>
        <button className={styles.searchBtn} type="submit">
          <img src="/images/search.png" alt="search" />
        </button>
      </form>
    </header>
  );
});

export default SearchHeader;