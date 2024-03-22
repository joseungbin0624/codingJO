import React, { useEffect, useState } from 'react';
import InteractiveGraph from '../components/InteractiveGraph';
import { getAnalyticsData } from '../services/analyticsService';
import '../styles/AnalyticsPage.scss';
import { Link } from 'react-router-dom';

function AnalyticsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const analyticsData = await getAnalyticsData();
        setData(analyticsData);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="analytics-page">
      <h1>Analytics Overview</h1>
      <InteractiveGraph data={data} />
      <Link to="/">Go Back to Home</Link>
    </div>
  );
}

export default AnalyticsPage;
