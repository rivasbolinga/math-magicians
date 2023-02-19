import { Link } from 'react-router-dom'

const Navbar = () => {
  return(
<nav className="navbar">
  <div className='container-nav'>
    <a className='navbar-title' href='#'>Math Magicians</a>
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