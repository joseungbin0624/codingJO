import React, { useState, useEffect } from 'react';
import { getAllForums } from '../services/forumService';
import '../styles/ForumPage.scss';
import { Link } from 'react-router-dom';

function ForumPage() {
  const [forums, setForums] = useState([]);

  useEffect(() => {
    async function fetchForums() {
      try {
        const data = await getAllForums();
        setForums(data);
      } catch (error) {
        console.error('Error fetching forums:', error);
      }
    }
    fetchForums();
  }, []);

  return (
    <div className="forum-page">
      <h1>Community Forums</h1>
      <div>
        {forums.length > 0 ? forums.map(forum => (
          <div key={forum.id}>
            {forum.title}
          </div>
        )) : <p>No forums found.</p>}
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ForumPage;
