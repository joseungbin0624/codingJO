import React, { useEffect, useState } from 'react';
import { fetchCurrentUser } from '../services/authService';
import userIcon from '../assets/icons/user-solid.svg'; // 아이콘 경로 추가
import '../styles/UserProfile.scss';

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
      <img src={userIcon} alt="User Profile" className="user-profile-icon" /> {/* 아이콘 추가 */}
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default UserProfile;
