import "./Header.css";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function Header() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };

  return (
    <header className="header-section">
      <span className="logo">
        <Link className="no-text-decoration" to="/">
          <span className="yellow-color">O</span>NES
          <span className="yellow-color">T</span>E
          <span className="yellow-color">P</span>
        </Link>
      </span>
      <input className="search-input" type="text" placeholder="Search" />
      <nav>
        <ul className="link-list-container">
          <li className="selected">
            <Link className="no-text-decoration" to="/">
              Home
            </Link>
          </li>
          <li>About us</li>
          {user ? (
            <li>
              {user.firstName}|<button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <>
              <li>
                <Link className="no-text-decoration" to="/login">
                  Login
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link className="no-text-decoration" to="/register">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
