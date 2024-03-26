import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserActivities } from '../store/dashboardSlice';
import ActivityItem from '../components/ActivityItem';
import '../styles/DashboardPage.scss';

const DashboardPage = () => {
    const dispatch = useDispatch();
    const activities = useSelector(state => state.dashboard.activities);

    useEffect(() => {
        dispatch(fetchUserActivities());
    }, [dispatch]);

    return (
        <div className="dashboard-page">
            <h1>Dashboard</h1>
            {activities.map((activity, index) => (
                <ActivityItem key={index} activity={activity} />
            ))}
        </div>
    );
};

export default DashboardPage;
