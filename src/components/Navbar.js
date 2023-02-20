import { Link } from 'react-router-dom';
import './Navbar.scss';
import Hamburger from './Hamburger';
import CloseButton from './CloseButton';
import React, { useState } from 'react';
const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    if (!hamburgerOpen) {
      setShowCloseButton(true);
    }
  }
  
  const handleClose = () => {
    setHamburgerOpen(false);
    setShowCloseButton(false);
  }

  const navBarClass = `navbar-nav ${hamburgerOpen ? 'open' : ''}`;

  return (
    <nav className="navbar">
      <div className='container-nav'>
        <a className='navbar-title'>Math Magicians</a>
        <div className='hamburger-container' onClick={toggleHamburger}>
          {showCloseButton ? <CloseButton onClick={handleClose}/> : <Hamburger />}
        </div>
        <ul className={navBarClass}>
          <li className='navbar-item'>
            <Link to="/" className='navbar-link'>Home</Link>
          </li>
          <li className='navbar-item'>
            <Link to="/Calculator" className='navbar-link'>Calculator</Link>
          </li>
          <li className='navbar-item'>
            <Link to="/Quote" className='navbar-link'>Quote</Link>
          </li>      
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


