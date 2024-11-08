import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Ensure the CSS file is correctly linked

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1><Link to="/">Campus Connect</Link></h1>
        
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/connect">Connect</Link></li>
        <li><Link to="/career-development">CareerResources</Link></li>
        <li><Link to="/registration">Registration</Link></li>
        <li><Link to="/mentorship-program">MentorshipProgram</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/account-settings">Settings</Link></li>
      </ul>

      <div className="navbar-profile">
        <Link to="/profile" className="profile-link">My Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
