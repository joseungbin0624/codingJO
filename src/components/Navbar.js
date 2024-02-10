import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/about">About</Link>
      {/* 추가 링크 */}
    </nav>
  );
};

export default Navbar;
 
