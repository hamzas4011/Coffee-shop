
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 
import logo from '../images/coffee-icon.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={logo} alt="Coffee Shop Logo" className="navbar-logo" />
          <h1>Coffee Shop</h1>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;