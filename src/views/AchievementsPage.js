import React, { useEffect, useState } from 'react';
import AchievementItem from '../components/AchievementItem';
import { getAchievements } from '../services/achievementsService';
import '../styles/AchievementsPage.scss';
import { Link } from 'react-router-dom';

function AchievementsPage() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    async function fetchAchievements() {
      try {
        const data = await getAchievements();
        setAchievements(data);
      } catch (error) {
        console.error('Error fetching achievements:', error);
      }
    }
    fetchAchievements();
  }, []);

  return (
    <div className="achievements-page">
      <h1>Your Achievements</h1>
      <div className="achievements-list">
        {achievements.length > 0 ? achievements.map(achievement => (
          <AchievementItem key={achievement.id} achievement={achievement} />
        )) : <p>No achievements to display.</p>}
      </div>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
}

export default AchievementsPage;
