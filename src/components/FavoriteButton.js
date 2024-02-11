import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import './FavoriteButton.scss';

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button className="favorite-button" onClick={() => setIsFavorite(!isFavorite)}>
      {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
    </button>
  );
};

export default FavoriteButton;
