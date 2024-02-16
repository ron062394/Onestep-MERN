import './Header.css'

function Header() {
    return (
      <header className="header-section">
        <span className="logo"><span className="yellow-color">O</span>NES<span className="yellow-color">T</span>E<span className="yellow-color">P</span></span>
        <input className="search-input" type="text" placeholder="Search"/>
        <nav>
            <ul className="link-list-container">
                <li className="selected"> Home</li>
                <li>About us</li>
                <li>Login</li>
                <li>|</li>
                <li>Signup</li>
            </ul>
        </nav>
      </header>
    );
  }
  
export default Header;
  