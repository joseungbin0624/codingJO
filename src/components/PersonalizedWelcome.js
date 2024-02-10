import React from 'react';
import { userService } from '../services/userService';
import './PersonalizedWelcome.scss';

const PersonalizedWelcome = ({ userId }) => {
  const [userName, setUserName] = React.useState('');

  React.useEffect(() => {
    userService.getUserName(userId).then(setUserName);
  }, [userId]);

  return (
    <div className="personalized-welcome">
      <h1>Welcome back, {userName}!</h1>
    </div>
  );
};

export default PersonalizedWelcome;

