import { Button, Drawer, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const handleClose = () => setVisible(false);

  return (
    <nav className="menu-bar">
      <div className="logo">
        <Link to="/">QTemu</Link>
      </div>
      <div className="menu-con">
        <div className="left-menu">
          <Menu mode="horizontal" className="navbar-top">
            <Menu.Item>
              <Link to="/" className="navbar-top-link">
                Create Meetup
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/" className="navbar-top-link">
                Explore
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/counter" className="navbar-top-link">
                Counter
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/star-wars" className="navbar-top-link">
                Star Wars
              </Link>
            </Menu.Item>
          </Menu>
        </div>
        <div className="right-menu">
          <Menu mode="horizontal" className="navbar-top">
            <Menu.Item>
              <Link to="/" className="navbar-top-link">
                Login
              </Link>
            </Menu.Item>
          </Menu>
        </div>
        <Button className="bars-menu" type="primary" onClick={showDrawer}>
          <span className="bars-btn" />
        </Button>
        <Drawer
          title="QTemu"
          className="drawer-container"
          placement="right"
          closable
          onClose={handleClose}
          visible={visible}
        >
          <Menu mode="inline">
            <Menu.Item key="1">
              <Link to="/">Create Meetup</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/">Explore</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/counter">Counter</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/star-wars">Star Wars</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/">Login</Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </nav>
  );
};

export default NavBar;
