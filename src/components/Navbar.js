import { Link } from 'react-router-dom'
import './Navbar.scss';
import Hamburger from './Hamburger';
const Navbar = () => {
  return(
<nav className="navbar">

  <div className='container-nav'>
    <a className='navbar-title'>Math Magicians</a>
    <div className='hamburger-container'>
     <Hamburger />
    </div>
    <ul className='navbar-nav'>
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