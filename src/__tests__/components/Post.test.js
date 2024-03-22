import React from 'react';
import { render, screen } from '@testing-library/react';
import Post from '../../components/Post';

describe('Post Component', () => {
  it('renders post content', () => {
    const post = {
      title: 'Test Post',
      content: 'This is a test post.',
      author: 'John Doe',
      date: '2023-01-01T00:00:00Z'
    };
    render(<Post post={post} />);
    
    expect(screen.getByText('Test Post')).toBeInTheDocument();
    expect(screen.getByText('This is a test post.')).toBeInTheDocument();
    expect(screen.getByText('Posted by John Doe')).toBeInTheDocument();
    expect(screen.getByText(/January 1, 2023/)).toBeInTheDocument();
  });
});
