// CategoryItem.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // 경로 변경 확인 필요 없음
import '../styles/CategoryItem.scss'; // 경로 확인: '../styles/CategoryItem.scss'가 존재해야 함

const CategoryItem = ({ category }) => {
  let navigate = useNavigate(); // 함수 이름 및 사용법 변경 없음

  const handleClick = () => {
    navigate(`/categories/${category.id}`); // 함수 사용법 변경 없음
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
