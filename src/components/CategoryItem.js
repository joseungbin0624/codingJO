import React from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위해 필요
import '../styles/CategoryItem.scss';

const CategoryItem = ({ category }) => {
  let navigate = useNavigate(); // 페이지 이동을 위한 훅

  const handleClick = () => {
    navigate(`/categories/${category.id}`); // 해당 카테고리 페이지로 이동
  };

  return (
    <div className="category-item" onClick={handleClick}>
      {category.image && <img src={category.image} alt={category.name} className="category-image" />}
      <div className="category-info">
        <h3 className="category-name">{category.name}</h3>
        <p className="category-description">{category.description}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
