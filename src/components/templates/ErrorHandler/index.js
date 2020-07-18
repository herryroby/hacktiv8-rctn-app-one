import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

class ErrorHandler extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    if (error) {
      this.setState({
        error: true,
      });
    }
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    return <>{error ? <div className="error-text">Something went wrong</div> : children}</>;
  }
}

ErrorHandler.propTypes = propTypes;

export default ErrorHandler;
