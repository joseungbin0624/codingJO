// UserProfileCard 컴포넌트가 user prop을 올바르게 받고 렌더링한다고 가정
import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfileCard from '../../components/UserProfileCard'; // 수정된 부분: 컴포넌트 경로 확인
import { BrowserRouter } from 'react-router-dom';

describe('UserProfileCard Component', () => {
  it('renders user profile information', () => {
    const user = { name: 'Jane Doe', bio: 'Software Developer' };
    render(
      <BrowserRouter>
        <UserProfileCard user={user} /> 
      </BrowserRouter>
    );
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Software Developer')).toBeInTheDocument();
  });
});
