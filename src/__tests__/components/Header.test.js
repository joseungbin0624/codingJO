import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header'; // 경로는 프로젝트에 따라 다를 수 있습니다.

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);
    // 예를 들어, Header 컴포넌트가 "Welcome" 텍스트를 렌더링한다고 가정
    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });
});
