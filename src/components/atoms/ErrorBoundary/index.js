import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

class ErrorBoundary extends React.Component {
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

    return <>{error ? <div className="error-text-block">Something went wrong</div> : children}</>;
  }
}

ErrorBoundary.propTypes = propTypes;

export default ErrorBoundary;
