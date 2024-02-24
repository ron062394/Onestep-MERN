import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header className="header-section">
        <span className="logo"><span className="yellow-color">O</span>NES<span className="yellow-color">T</span>E<span className="yellow-color">P</span></span>
        <input className="search-input" type="text" placeholder="Search"/>
        <nav>
            <ul className="link-list-container">
                <li className="selected">
                  <Link className='no-text-decoration' to="/">Home</Link>
                </li>
                <li>About us</li>
                <li>
                  <Link className='no-text-decoration' to="/login">Login</Link>
                </li>
                <li>|</li>
                <li>
                  <Link className='no-text-decoration' to="/register">Signup</Link>
                </li>
            </ul>
        </nav>
      </header>
    );
  }
  
export default Header;
  