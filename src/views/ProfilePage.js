// ProfilePage.js
import React, { useEffect, useState } from 'react';
import UserProfileCard from '../components/UserProfileCard';
import { fetchCurrentUser } from '../services/authService';
import '../styles/ProfilePage.scss';
import { Link } from 'react-router-dom';

// 추가된 이미지
import userProfileIcon from '../assets/icons/user-solid.svg';

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUserProfile() {
      try {
        const userData = await fetchCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };
    getUserProfile();
  }, []);

  return (
    <div className="profile-page">
      <img src={userProfileIcon} alt="User Profile" className="user-profile-icon"/>
      <h1>User Profile</h1>
      {user ? <UserProfileCard user={user} /> : <div>Loading...</div>}
      <Link to="/settings">Edit Profile</Link>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ProfilePage;
