import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import CoursePage from './views/CoursePage';
import ForumPage from './views/ForumPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* 추가할 수 있는 라우트들... */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
