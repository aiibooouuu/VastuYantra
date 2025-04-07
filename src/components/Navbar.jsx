import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
          <img src="/vastu.png" alt="Vastu logo" />
      </div>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/chat">Chat with Us</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/calculate">Calculate Vastu Score</NavLink></li>
        <li><NavLink to="/remedies">Remedies</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
