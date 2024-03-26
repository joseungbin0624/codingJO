import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserFavorites } from '../store/favoritesSlice';
import FavoriteCoursesList from '../components/FavoriteCoursesList'; // 수정 필요
import '../styles/FavoritesPage.scss'; // 정확한 경로로 수정 필요


const FavoritesPage = () => {
    const dispatch = useDispatch();
    const { favorites } = useSelector(state => state.favorites);

    useEffect(() => {
        dispatch(fetchUserFavorites());
    }, [dispatch]);

    return (
        <div className="favorites-page">
            <h1>Favorites</h1>
            <FavoriteCoursesList favorites={favorites} />
        </div>
    );
};

export default FavoritesPage;
