import "./Header.css";
import { NavLink } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

function Header() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
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
      <nav>
        <ul className="link-list-container">
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
              {/* <span className="vertical-line">|</span> */}
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
              <li>|</li>
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
