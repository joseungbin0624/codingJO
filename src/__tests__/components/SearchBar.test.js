import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../../components/SearchBar';

describe('SearchBar Component', () => {
  it('submits search query', () => {
    const onSearchMock = jest.fn();
    render(<SearchBar onSearch={onSearchMock} />);
    
    fireEvent.change(screen.getByPlaceholderText('Search...'), { target: { value: 'query' } });
    fireEvent.click(screen.getByText('Search'));
    
    expect(onSearchMock).toHaveBeenCalledWith('query');
  });
});
