import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar';

describe('Navbar Component', () => {
  it('renders brand and links', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);

    expect(screen.getByText('CodingJO')).toBeInTheDocument();
    expect(screen.getByText('Courses')).toBeInTheDocument();
    expect(screen.getByText('Forum')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
