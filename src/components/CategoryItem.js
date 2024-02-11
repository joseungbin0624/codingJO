import React from 'react';
import './CategoryItem.scss';

const CategoryItem = ({ category, onSelectCategory }) => (
  <div className="category-item" onClick={() => onSelectCategory(category)}>
    {category.name}
  </div>
);

export default CategoryItem;
