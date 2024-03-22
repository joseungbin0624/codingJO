import React, { useState, useEffect } from 'react';
import TutorialCard from '../components/TutorialCard';
import { getAllTutorials } from '../services/tutorialService'; // 수정: 함수 사용 변경
import '../styles/TutorialsPage.scss';

function TutorialsPage() {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    async function fetchTutorials() {
      try {
        const data = await getAllTutorials(); // 수정: 함수 사용 변경
        setTutorials(data);
      } catch (error) {
        console.error('Error fetching tutorials:', error);
      }
    }

    fetchTutorials();
  }, []);

  return (
    <div className="tutorials-page">
      <h1>Explore Tutorials</h1>
      <div className="tutorials-list">
        {tutorials.map(tutorial => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
    </div>
  );
}

export default TutorialsPage;
