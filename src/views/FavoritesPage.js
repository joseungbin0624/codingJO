import React, { useEffect, useState } from 'react';
import CourseItem from '../components/CourseItem';
import { getUserFavorites } from '../services/favoritesService';
import '../styles/FavoritesPage.scss';
import { Link } from 'react-router-dom';

function FavoritesPage() {
  const [favoriteCourses, setFavoriteCourses] = useState([]);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const data = await getUserFavorites();
        setFavoriteCourses(data);
      } catch (error) {
        console.error('Error fetching favorite courses:', error);
      }
    };
    fetchFavorites();
  }, []);

  return (
    <div className="favorites-page">
      <h1>Your Favorites</h1>
      <div className="favorite-courses-list">
        {favoriteCourses.length > 0 ? favoriteCourses.map(course => (
          <CourseItem key={course.id} course={course} />
        )) : <p>No favorite courses added yet.</p>}
      </div>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
}

export default FavoritesPage;
