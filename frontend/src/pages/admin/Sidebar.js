import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-section">
      <div className="logo-container">
        <span className="logo">
          <NavLink
            className="no-text-decoration"
            to="/admin"
            activeClassName="active"
          >
            <span className="yellow-color">O</span>NES
            <span className="yellow-color">T</span>E
            <span className="yellow-color">P</span>
          </NavLink>
        </span>
      </div>
      <div className="sidebar-container">
        <ul>
          <li>Product</li>
          <li>Promotion</li>
          <li>Order Management</li>
          <li>Customers</li>
          <li>Inventory Management</li>
          <li>Content Management</li>
        </ul>
        <div className="sidebar-footer">
          <div className="admin-btn-container">
            <img src="https://i.imgur.com/2qvVjd4.png" alt="" />
            <span className="admin-logout-btn"> Logout</span>
          </div>

          <div>Copyrigt 2024 ONESTEP • theVeloperRon</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
