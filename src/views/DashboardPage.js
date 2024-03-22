import React, { useEffect, useState } from 'react';
import ActivityItem from '../components/ActivityItem';
import { getUserActivities } from '../services/dashboardService';
import '../styles/DashboardPage.scss';
import { Link } from 'react-router-dom';

function DashboardPage() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function fetchActivities() {
      try {
        const data = await getUserActivities();
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };
    fetchActivities();
  }, []);

  return (
    <div className="dashboard-page">
      <h1>Your Dashboard</h1>
      <div className="activities-list">
        {activities.length > 0 ? activities.map(activity => (
          <ActivityItem key={activity.id} activity={activity} />
        )) : <p>No recent activities.</p>}
      </div>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
}

export default DashboardPage;
