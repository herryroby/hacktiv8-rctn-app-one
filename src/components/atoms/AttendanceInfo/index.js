import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const propTypes = {
  total: PropTypes.number,
};

const defaultProps = {
  total: 0,
};

const AttendanceInfo = ({ total }) => (
  <p>
    {total} <span className="went">went</span>
  </p>
);

AttendanceInfo.propTypes = propTypes;
AttendanceInfo.defaultProps = defaultProps;

export default AttendanceInfo;
