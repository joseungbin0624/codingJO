import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAchievements } from '../store/achievementsSlice';
import AchievementItem from '../components/AchievementItem';
import '../styles/AchievementsPage.scss';

const AchievementsPage = () => {
    const dispatch = useDispatch();
    const achievements = useSelector(state => state.achievements.data);

    useEffect(() => {
        dispatch(fetchAchievements());
    }, [dispatch]);

    return (
        <div className="achievements-page">
            <h1>Achievements</h1>
            {achievements.map((achievement, index) => (
                <AchievementItem key={index} achievement={achievement} />
            ))}
        </div>
    );
};

export default AchievementsPage;
