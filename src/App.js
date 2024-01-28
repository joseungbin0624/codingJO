import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './views/HomePage';
import CoursePage from './views/CoursePage';
import ForumPage from './views/ForumPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';

// Bootstrap CSS를 가져옵니다.
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
