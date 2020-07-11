import React from 'react';
import './style.css';

const NavBar = () => (
  <div className="navbar bg-primary">
    <a href="/" className="navbar-brand">
      QTemu
    </a>
    <div className="mr-auto">
      <a href="/" className="nav-link">
        Create Meetup
      </a>
      <a href="/" className="nav-link">
        Explore
      </a>
    </div>
    <div>
      <a href="/" className="nav-link">
        Login
      </a>
    </div>
  </div>
);

export default NavBar;
