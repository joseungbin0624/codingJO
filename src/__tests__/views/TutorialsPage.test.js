import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TutorialsPage from '../../views/TutorialsPage';
import { getAllTutorials } from '../../services/tutorialService';
jest.mock('../../services/tutorialService');

test('튜토리얼 페이지가 모든 튜토리얼을 불러와 표시하는지 확인', async () => {
  getAllTutorials.mockResolvedValue([
    { id: 1, title: 'React 입문', description: 'React를 배워봅시다.' },
    { id: 2, title: 'Vue.js 기초', description: 'Vue.js의 기본을 알아봅시다.' }
  ]);

  render(<TutorialsPage />);
  await waitFor(() => expect(getAllTutorials).toHaveBeenCalledTimes(1));

  expect(screen.getByText(/Explore Tutorials/i)).toBeInTheDocument();
  expect(screen.getByText(/React 입문/i)).toBeInTheDocument();
  expect(screen.getByText(/Vue.js 기초/i)).toBeInTheDocument();
});
