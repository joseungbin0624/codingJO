import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Router를 사용하는 컴포넌트 테스트에 필요
import TutorialCard from '../../components/TutorialCard';

describe('TutorialCard Component', () => {
  it('displays tutorial details and link', () => {
    const tutorial = {
      id: 'tutorial1',
      title: 'React Tutorial',
      description: 'Learn React step by step',
      thumbnail: 'react-tutorial.jpg'
    };
    render(
      <MemoryRouter>
        <TutorialCard tutorial={tutorial} />
      </MemoryRouter>
    );
    
    expect(screen.getByText(tutorial.title)).toBeInTheDocument();
    expect(screen.getByText(tutorial.description)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', tutorial.thumbnail);
    expect(screen.getByRole('link')).toHaveAttribute('href', `/tutorials/${tutorial.id}`);
  });
});
