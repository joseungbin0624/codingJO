import React from 'react';
import { render, screen } from '@testing-library/react';
import AchievementItem from '../../components/AchievementItem';

describe('AchievementItem Component', () => {
  it('renders correctly', () => {
    const mockAchievement = {
      title: 'Test Achievement',
      description: 'This is a test description.',
      achieved: true,
      icon: 'test-icon.png'
    };

    render(<AchievementItem achievement={mockAchievement} />);
    
    expect(screen.getByText('Test Achievement')).toBeInTheDocument();
    expect(screen.getByText('This is a test description.')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'test-icon.png');
    expect(screen.getByText('Achieved')).toBeInTheDocument();
  });
});
