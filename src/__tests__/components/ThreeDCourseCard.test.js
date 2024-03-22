import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThreeDCourseCard from '../../components/ThreeDCourseCard'; // Update path as necessary

describe('ThreeDCourseCard Component', () => {
  it('renders course information', () => {
    const course = {
      title: '3D Modeling Basics',
      description: 'Learn the basics of 3D modeling',
      image: '3d-modeling-course.jpg'
    };
    render(<ThreeDCourseCard course={course} />);
    expect(screen.getByText(course.title)).toBeInTheDocument();
    expect(screen.getByText(course.description)).toBeInTheDocument();
    // Assuming your component uses img tag for image
    expect(screen.getByRole('img')).toHaveAttribute('src', course.image);
  });
});
