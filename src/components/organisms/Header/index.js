import React from 'react';
import Button from '../../atoms/Button';
import './style.css';

const Header = () => (
  <header>
    <div className="header-container">
      <div className="header-image" />
      <div className="header-info">
        <p className="header-title">Hacktiv8 Meetup</p>
        <p>
          Location<span className="info-location">Jakarta, Indonesia</span>
        </p>
        <p>
          Members
          <span className="info-members">1,078</span>
        </p>
        <p>
          Organizers <span className="info-organizers">Adhy Wiranata</span>
        </p>
        <Button className="btn-join-us">Join Us</Button>
      </div>
    </div>
  </header>
);

export default Header;
