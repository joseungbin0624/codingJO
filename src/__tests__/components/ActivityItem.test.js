import React from 'react';
import { render, screen } from '@testing-library/react';
import ActivityItem from '../../components/ActivityItem';

describe('ActivityItem Component', () => {
  it('renders activity information', () => {
    const mockActivity = {
      title: 'Test Activity',
      description: 'This is a test activity.'
    };

    render(<ActivityItem activity={mockActivity} />);
    
    expect(screen.getByText('Test Activity')).toBeInTheDocument();
    expect(screen.getByText('This is a test activity.')).toBeInTheDocument();
  });
});
