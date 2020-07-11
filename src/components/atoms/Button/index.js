import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const Button = ({ children, className, ...rest }) => (
  <button type="button" className={classNames('btn btn-primary', className)} {...rest}>
    {children}
  </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
