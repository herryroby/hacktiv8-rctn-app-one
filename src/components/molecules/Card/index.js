import { Button } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  className: '',
};

const Card = ({ children, className, title, ...rest }) => (
  <div className={classNames('card', className)} {...rest}>
    <div className="card-header">
      <p className="card-title">{title}</p>
      <hr />
    </div>
    <div className="card-body">
      {children}
      <Button type="primary" className="card-button">
        View
      </Button>
    </div>
  </div>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
