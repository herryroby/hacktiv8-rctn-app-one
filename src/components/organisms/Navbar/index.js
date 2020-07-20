import { Button, Drawer, Menu } from 'antd';
import React, { useState } from 'react';
import './style.css';

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const handleClose = () => setVisible(false);

  return (
    <nav className="menu-bar">
      <div className="logo">
        <a href="/">QTemu</a>
      </div>
      <div className="menu-con">
        <div className="left-menu">
          <Menu mode="horizontal" className="navbar-top">
            <Menu.Item>
              <a href="/" className="navbar-top-link">
                Create Meetup
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href="/" className="navbar-top-link">
                Explore
              </a>
            </Menu.Item>
          </Menu>
        </div>
        <div className="right-menu">
          <Menu mode="horizontal" className="navbar-top">
            <Menu.Item>
              <a href="/" className="navbar-top-link">
                Login
              </a>
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
              <a href="/">Create Meetup</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="/">Explore</a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="/">Login</a>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </nav>
  );
};

export default NavBar;
