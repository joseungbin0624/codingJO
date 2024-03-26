import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnalyticsData } from '../store/analyticsSlice';
import InteractiveGraph from '../components/InteractiveGraph';
import '../styles/AnalyticsPage.scss';

const AnalyticsPage = () => {
    const dispatch = useDispatch();
    const analyticsData = useSelector(state => state.analytics.data);

    useEffect(() => {
        dispatch(fetchAnalyticsData());
    }, [dispatch]);

    return (
        <div className="analytics-page">
            <h1>Analytics</h1>
            <InteractiveGraph data={analyticsData} />
        </div>
    );
};

export default AnalyticsPage;
