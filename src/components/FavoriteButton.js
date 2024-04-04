import React, { useState, useEffect } from 'react';
import { addFavorite, removeFavorite, checkFavorite } from '../services/favoritesService';
import heartIcon from '../assets/icons/heart-solid.svg'; // 아이콘 경로 추가
import '../styles/FavoriteButton.scss';

function FavoriteButton({ userId, courseId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      try {
        const status = await checkFavorite(userId, courseId);
        setIsFavorite(status);
      } catch (error) {
        console.error('Error fetching favorite status:', error);
      }
    };
    fetchFavoriteStatus();
  }, [userId, courseId]);

  const toggleFavorite = async () => {
    try {
      if (isFavorite) {
        await removeFavorite(userId, courseId);
      } else {
        await addFavorite(userId, courseId);
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  return (
    <button className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`} onClick={toggleFavorite} aria-pressed={isFavorite}>
      <img src={heartIcon} alt="Favorite" className="favorite-icon" /> {/* 아이콘 추가 */}
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
}

export default FavoriteButton;
