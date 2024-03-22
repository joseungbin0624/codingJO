import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseItem from '../../components/CourseItem';

describe('CourseItem Component', () => {
  it('displays course information', () => {
    const mockCourse = {
      title: 'Test Course',
      description: 'This is a test course description.'
    };

    render(<CourseItem course={mockCourse} />);
    
    expect(screen.getByText('Test Course')).toBeInTheDocument();
    expect(screen.getByText('This is a test course description.')).toBeInTheDocument();
  });
});
