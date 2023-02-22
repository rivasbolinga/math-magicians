import { Link, Outlet } from 'react-router-dom';
import './Navbar.scss';
import Hamburger from './Hamburger';
import CloseButton from './CloseButton';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showMenu, setShowMenu] = useState(false);
// -- useEffect called to add an event to the window to set mobile version state 
//when the screen is - thank 768.
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

// -- When hamburger button is clicked, show menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

// -- when close menu called, close menu
  const closeMenu = () => {
    setShowMenu(false);
  };

// --when close menu clicked, call function close menu
  const handleLinkClick = () => {
    closeMenu();
  }

  const navBarClass = `navbar-nav ${showMenu ? 'open' : ''}`;
  return(
  <>
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
    <Outlet />
    </>
  ); 

};

export default Navbar;



