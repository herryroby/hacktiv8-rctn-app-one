import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="">QTemu</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="">Create Meetup</Nav.Link>
      <Nav.Link href="">Explore</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="">Login</Nav.Link>
    </Nav>
  </Navbar>
);

export default NavBar;
