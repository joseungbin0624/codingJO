import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss'; // Sass 파일을 사용할 경우

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">CodingJO</Link>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/forum">Forum</Link></li>
                    <li><Link to="/events">Events</Link></li>
                </ul>
            </nav>
            <div className="search">
                <input type="text" placeholder="Search..."/>
            </div>
            <div className="user-actions">
                <Link to="/login">Login</Link>
                <Link to="/register">Sign Up</Link>
            </div>
        </header>
    );
};

export default Header;
