import React from 'react';
import { Button } from './atoms';

const Header = () => (
  <header>
    <div className="header-container">
      <div className="header-image" />
      <div className="header-info">
        <p className="header-title">Hacktiv8 Meetup</p>
        <p>
          Location<span style={{ marginLeft: '45px' }}>Jakarta, Indonesia</span>
        </p>
        <p>
          Members
          <span style={{ marginLeft: '38px' }}>1,078</span>
        </p>
        <p>
          Organizers <span style={{ marginLeft: '25px' }}>Adhy Wiranata</span>
        </p>
        <Button className="btn-join-us">Join Us</Button>
      </div>
    </div>
  </header>
);

export default Header;
