import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">CodingJO</Link>
      <div className="navbar-links">
        <Link to="/courses">Courses</Link>
        <Link to="/forum">Forum</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
