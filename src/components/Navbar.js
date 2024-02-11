import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="logo">CodingJO</Link>
    <div className="nav-links">
      <Link to="/courses">Courses</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
