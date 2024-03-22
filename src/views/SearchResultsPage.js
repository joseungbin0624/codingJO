import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { performSearch } from '../services/searchService';
import '../styles/SearchResultsPage.scss';

function SearchResultsPage() {
  const query = new URLSearchParams(useLocation().search).get('q');
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchSearchResults() {
      try {
        const searchResults = await performSearch(query);
        setResults(searchResults);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
    fetchSearchResults();
  }, [query]);

  return (
    <div className="search-results-page">
      <h1>Search Results for "{query}"</h1>
      <div>
        {results.length > 0 ? results.map(result => (
          <div key={result.id}>
            {result.title}
          </div>
        )) : <p>No results found for "{query}". Try a different search term.</p>}
      </div>
    </div>
  );
}

export default SearchResultsPage;
