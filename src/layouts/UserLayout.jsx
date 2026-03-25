import { Outlet, Link } from "react-router-dom";
import "./Styles/UserLayout.css";

const UserLayout = () => {
  return (
    <div className="main-container">

      {/* ===== Navbar ===== */}
      <nav className="navbar">
        <div className="logo">TourBook</div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/my-bookings">My Bookings</Link></li>
          {/* <li><Link to="/login" className="login-btn">Login</Link></li> */}
        </ul>
      </nav>

      {/* ===== Hero Section ===== */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Book Your Dream Vacation</h1>

          <div className="tabs">
            <button className="active-tab">Holidays</button>
            <button>Hotels</button>
            <button>Transport</button>
          </div>

          <div className="search-box">
            <input type="text" placeholder="From City" />
            <input type="text" placeholder="Destination" />
            <input type="date" />
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>

      {/* ===== Page Content ===== */}
      <div className="content">
        <Outlet />
      </div>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="footer-container">

          <div>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>

          <div>
            <h4>Support</h4>
            <p>Customer Care</p>
            <p>FAQ</p>
            <p>Cancellation Policy</p>
          </div>

          <div>
            <h4>Services</h4>
            <p>Tour Packages</p>
            <p>Hotel Booking</p>
            <p>Transport Booking</p>
          </div>

          <div>
            <h4>Follow Us</h4>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>

        </div>

        <div className="copyright">
          © 2026 TourBook. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
};

export default UserLayout;