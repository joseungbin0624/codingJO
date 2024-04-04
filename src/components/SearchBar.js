import React, { useState } from 'react';
import searchIcon from '../assets/icons/magnifying-glass-solid.svg'; // 아이콘 경로 추가
import '../styles/SearchBar.scss';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <img src={searchIcon} alt="Search" className="search-icon" /> {/* 아이콘 추가 */}
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default SearchBar;
