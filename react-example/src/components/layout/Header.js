import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <span className="header__logo-icon">✨</span>
          <span className="header__logo-text">Creative Space</span>
        </div>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <a href="#home" className="header__link">Home</a>
          <a href="#projects" className="header__link">Projects</a>
          <a href="#skills" className="header__link">Skills</a>
          <a href="#about" className="header__link">About</a>
        </nav>

        <button
          className="header__menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`header__menu-icon ${isMenuOpen ? 'header__menu-icon--open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
