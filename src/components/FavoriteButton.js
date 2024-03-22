import React, { useState, useEffect } from 'react';
import { addFavorite, removeFavorite, checkFavorite } from '../services/favoritesService';
import '../styles/FavoriteButton.scss';

function FavoriteButton({ userId, courseId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // 좋아요 상태를 확인하여 UI에 반영
    const fetchFavoriteStatus = async () => {
      try {
        const status = await checkFavorite(userId, courseId);
        setIsFavorite(status);
      } catch (error) {
        console.error('Error fetching favorite status:', error);
        // 오류 처리 로직 추가 (예: 사용자에게 피드백 제공)
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
      // 오류 처리 로직 추가 (예: 사용자에게 피드백 제공)
    }
  };

  return (
    <button className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`} onClick={toggleFavorite}>
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
}

export default FavoriteButton;
