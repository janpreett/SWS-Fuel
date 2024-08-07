import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo">SWS Fuel.</div>
        <div className="nav__menu-icon" onClick={toggleMenu}>
          {isOpen ? (
            <div className="nav__menu-icon--close">&times;</div>
          ) : (
            <div className="nav__menu-icon--open">&#9776;</div>
          )}
        </div>
        <ul className={`nav__list ${isOpen ? 'nav__list--open' : ''}`}>
          <li className="nav__item"><a href="#home" className="nav__link" onClick={handleLinkClick}>Home</a></li>
          <li className="nav__item"><a href="#services" className="nav__link" onClick={handleLinkClick}>Services</a></li>
          <li className="nav__item"><a href="#about" className="nav__link" onClick={handleLinkClick}>About</a></li>
          <li className="nav__item"><a href="#contact" className="nav__link" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;