import React, { useEffect, useState } from 'react';
import { fetchCurrentUser } from '../services/authService';
import './UserProfile.scss'; // 가정한 스타일시트 경로

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    getUserData();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {/* 추가적인 사용자 정보 표시 */}
    </div>
  );
};

export default UserProfile;
