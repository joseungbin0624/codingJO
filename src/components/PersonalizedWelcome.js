import React, { useEffect, useState } from 'react';
import { fetchCurrentUser } from '../services/userService';
import '../styles/PersonalizedWelcome.scss';

function PersonalizedWelcome() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user data', error);
      }
    };

    getUserData();
  }, []);

  // 사용자 이름이 없는 경우의 처리 추가
  return (
    <div className="personalized-welcome">
      {user ? <h1>Welcome back, {user.name}!</h1> : <h1>Welcome to CodingJO!</h1>}
    </div>
  );
}

export default PersonalizedWelcome;
