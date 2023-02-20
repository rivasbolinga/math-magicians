import { Link } from 'react-router-dom';
import './Navbar.scss';
import Hamburger from './Hamburger';
import CloseButton from './CloseButton';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleLinkClick = () => {
    closeMenu();
  }

  const navBarClass = `navbar-nav ${showMenu ? 'open' : ''}`;

  return (
    <nav className="navbar">
      <div className='container-nav'>
        <a className='navbar-title'>Math Magicians</a>
        {isMobile && (
          <div className='hamburger-container' onClick={toggleMenu}>
            {showMenu ? (
              <CloseButton onClick={closeMenu} />
            ) : (
              <Hamburger />
            )}
          </div>
        )}
        <ul className={navBarClass}>
          {!isMobile && (
            <li className='navbar-item'>
              <Hamburger onClick={toggleMenu} />
            </li>
          )}
          <li className='navbar-item'>
            <Link to="/" className='navbar-link' onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className='navbar-item'>
            <Link
              to="/Calculator"
              className='navbar-link'
              onClick={handleLinkClick}
            >
              Calculator
            </Link>
          </li>
          <li className='navbar-item'>
            <Link
              to="/Quote"
              className='navbar-link'
              onClick={handleLinkClick}
            >
              Quote
            </Link>
          </li>      
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



