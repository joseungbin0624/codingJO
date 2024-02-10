import React from 'react';
import './CategoryItem.scss';

const CategoryItem = ({ category, onSelectCategory }) => {
  return (
    <div className="category-item" onClick={() => onSelectCategory(category)}>
      <span>{category.name}</span>
    </div>
  );
};

export default CategoryItem;

