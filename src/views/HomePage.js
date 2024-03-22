import React, { useEffect, useState } from 'react';
import '../styles/HomePage.scss';
// 실제 존재하는 컴포넌트를 임포트합니다.
import Navbar from '../components/Navbar';
import { getAllCourses } from '../services/courseService';
import { getAllTutorials } from '../services/tutorialService';
import { getAllForums } from '../services/forumService';

function HomePage() {
  const [courses, setCourses] = useState([]);
  const [tutorials, setTutorials] = useState([]);
  const [forums, setForums] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // 실제 프로젝트에 존재하는 함수를 사용합니다.
      const fetchedCourses = await getAllCourses();
      const fetchedTutorials = await getAllTutorials();
      const fetchedForums = await getAllForums();
      // 각 섹션별로 데이터를 설정합니다.
      setCourses(fetchedCourses.slice(0, 4)); // 예시로 첫 4개만 사용
      setTutorials(fetchedTutorials.slice(0, 4)); // 예시로 첫 4개만 사용
      setForums(fetchedForums.slice(0, 3)); // 예시로 첫 3개만 사용
    }
    fetchData();
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      {/* 홈페이지 내용을 실제 프로젝트에 맞게 조정합니다. */}
      {/* 예시: 코스, 튜토리얼, 포럼 게시글 목록 등을 표시합니다. */}
      {/* 해당 컴포넌트들이 실제 존재하는지 확인하고, 필요에 따라 생성하거나 수정합니다. */}
    </div>
  );
}

export default HomePage;
