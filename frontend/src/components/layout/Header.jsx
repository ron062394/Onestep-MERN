import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

function Header() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-section">
      <span className="logo">
        <NavLink className="no-text-decoration" to="/" activeClassName="active" exact>
          <span className="yellow-color">O</span>NES
          <span className="yellow-color">T</span>E
          <span className="yellow-color">P</span>
        </NavLink>
      </span>
      <input className="search-input" type="text" placeholder="Search" />
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <nav>
        <ul className={`link-list-container ${isMenuOpen ? 'show' : ''}`}>
          <li>
            <NavLink className="no-text-decoration" to="/" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="no-text-decoration" to="/about-us" activeClassName="active">
              About us
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink className="no-text-decoration" to="/profile" activeClassName="active">
                  <span>Hi {user.firstName}</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="no-text-decoration" to="/cart" activeClassName="active">
                  Cart
                </NavLink>
              </li>
              <li>
                <span onClick={handleLogout}>Logout</span>
              </li> 
            </>
          ) : (
            <>
              <li>
                <NavLink className="no-text-decoration" to="/login" activeClassName="active">
                  Login
                </NavLink>
              </li>
              <li className="vl">|</li>
              <li>
                <NavLink className="no-text-decoration" to="/register" activeClassName="active">
                  Signup
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
