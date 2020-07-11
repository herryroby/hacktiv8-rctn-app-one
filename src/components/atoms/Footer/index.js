import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const Footer = ({ children }) => <div className="footer">{children}</div>;

Footer.propTypes = propTypes;

export default Footer;
