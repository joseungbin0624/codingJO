import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// 페이지 임포트
import AchievementsPage from './views/AchievementsPage';
import AnalyticsPage from './views/AnalyticsPage';
import CategoryPage from './views/CategoryPage';
import ChatPage from './views/ChatPage';
import CollaborationPage from './views/CollaborationPage';
import CoursePage from './views/CoursePage';
import DashboardPage from './views/DashboardPage';
import EventsCalendarPage from './views/EventsCalendarPage';
import FavoritesPage from './views/FavoritesPage';
import FeedbackPage from './views/FeedbackPage';
import ForumPage from './views/ForumPage';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import NotificationPage from './views/NotificationPage';
import ProfilePage from './views/ProfilePage';
import RegisterPage from './views/RegisterPage';
import ReviewPage from './views/ReviewPage';
import SearchResultsPage from './views/SearchResultsPage';
import SettingsPage from './views/SettingsPage';
import SupportPage from './views/SupportPage';
import TutorialsPage from './views/TutorialsPage';
import UserContributionsPage from './views/UserContributionsPage';
import UserSettingPage from './views/UserSettingPage';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/chats" element={<ChatPage />} />
        <Route path="/collaboration" element={<CollaborationPage />} />
        <Route path="/courses/:courseId" element={<CoursePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/events-calendar" element={<EventsCalendarPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reviews/:courseId" element={<ReviewPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
        <Route path="/user-contributions" element={<UserContributionsPage />} />
        <Route path="/user-settings" element={<UserSettingPage />} />
        {/* 다른 필요한 라우트들을 여기에 추가하세요 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
