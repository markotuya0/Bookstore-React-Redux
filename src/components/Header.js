import React from 'react';
import { Link } from 'react-router-dom';
import contactImage from '../images/contact-icon.png';

const Header = () => (
  <header className="font1">
    <div className="icon">
      <img src={contactImage} className="image" alt="contact-icon" />
    </div>
    <h1>Library</h1>
    <nav>
      <Link to="/">BOOKS</Link>
      <Link to="/categories">CATEGORIES</Link>
    </nav>
  </header>
);

export default Header;
