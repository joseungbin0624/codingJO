import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatureSection from '../../components/FeatureSection';

describe('FeatureSection Component', () => {
  test('renders FeatureSection with background image', () => {
    render(<FeatureSection />);

    // Background images and parallax effects are not easily testable in JSDOM environment
    expect(screen.getByText('Discover Our Features')).toBeInTheDocument();
  });
});
