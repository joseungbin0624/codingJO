import React from 'react';
import { render, screen } from '@testing-library/react';
import ForumList from '../../components/ForumList';

describe('ForumList Component', () => {
  it('renders a list of forum items', () => {
    const forums = [
      { id: 1, title: 'Forum 1', description: 'Description 1' },
      { id: 2, title: 'Forum 2', description: 'Description 2' },
    ];
    render(<ForumList forums={forums} />);
    expect(screen.getByText('Forum 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Forum 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });
});
