import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../../atoms/Footer';
import Header from '../../organisms/Header';
import NavBar from '../../organisms/Navbar';
import './style.css';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const Layout = ({ children }) => (
  <>
    <NavBar />
    <div className="main-container">
      <Header />
      <main>{children}</main>
    </div>
    <Footer>Copyright Hacktiv8 2018</Footer>
  </>
);

Layout.propTypes = propTypes;

export default Layout;
