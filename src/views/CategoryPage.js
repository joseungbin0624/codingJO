import React, { useState, useEffect } from 'react';
import CategoryItem from '../components/CategoryItem';
import { getCategories } from '../services/categoryService';
import '../styles/CategoryPage.scss';
import { Link } from 'react-router-dom';

function CategoryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <div className="category-page">
      <h1>Explore Categories</h1>
      <div className="category-list">
        {categories.length > 0 ? categories.map(category => (
          <CategoryItem key={category.id} category={category} />
        )) : <p>No categories found.</p>}
      </div>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
}

export default CategoryPage;
