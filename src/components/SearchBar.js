import React, { useState } from 'react';
import { debounce } from 'lodash';
import './SearchBar.scss';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSearch = debounce((query) => {
    onSearch(query);
  }, 300);

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
    handleSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;

