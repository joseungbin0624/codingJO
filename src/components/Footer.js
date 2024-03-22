// E:\project\codingJO\src\components\Footer.js
import React from 'react';
import '../styles/Footer.scss';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://facebook.com/yourPage" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://twitter.com/yourProfile" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com/yourAccount" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <p>© 2023 Project CodingJO. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
