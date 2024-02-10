import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './FavoriteButton.scss';

const FavoriteButton = ({ isFavorite, toggleFavorite }) => {
  return (
    <button onClick={toggleFavorite} className="favorite-button">
      {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
    </button>
  );
};

export default FavoriteButton;

