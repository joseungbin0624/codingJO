import React, { useEffect, useState } from 'react';
import UserProfileCard from '../components/UserProfileCard'; // 이 부분을 추가
import { fetchCurrentUser } from '../services/authService';
import '../styles/ProfilePage.scss';
import { Link } from 'react-router-dom';

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
      <h1>User Profile</h1>
      {user ? <UserProfileCard user={user} /> : <div>Loading...</div>} // UserProfileCard 사용
      <Link to="/settings">Edit Profile</Link>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ProfilePage;
