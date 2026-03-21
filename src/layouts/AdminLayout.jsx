import { Outlet, Link } from "react-router-dom";
import "./Styles/AdminLayout.css";

const AdminLayout = () => {

  

  return (
    <div className="admin-container">

      {/* ===== Sidebar ===== */}
      <div className="sidebar">
        <h2 className="sidebar-logo">Admin Panel</h2>

        <ul className="sidebar-menu">
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/admin/manage-packages">Manage Packages</Link></li>
          <li><Link to="/admin/manage-bookings">Manage Bookings</Link></li>
          <li><Link to="/admin/manage-users">Manage Users</Link></li>
          <li><Link to="/admin/manage-hotels">Manage Hotels</Link></li>
          <li><Link to="/admin/manage-transport">Manage Transport</Link></li>
        </ul>
      </div>

      {/* ===== Main Content ===== */}
      <div className="admin-main">

        {/* Topbar */}
        <div className="topbar">
          <h3>Welcome Admin 👋</h3>
          <button className="logout-btn">Logout</button>
        </div>

        {/* Dynamic Page */}
        <div className="admin-content">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;