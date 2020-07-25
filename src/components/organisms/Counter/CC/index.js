/* eslint-disable react/destructuring-assignment */
import { Button } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { decrementCounterCc, incrementCounterCc } from '../../../../redux/actions';
import './style.css';

const propTypes = {
  counter: PropTypes.number.isRequired,
  decrementCounterCc: PropTypes.func.isRequired,
  incrementCounterCc: PropTypes.func.isRequired,
};

class CounterCC extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      error: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { counter } = this.props;
    if (counter !== prevProps.counter) {
      this.setState({ counter }); // eslint-disable-line
    }
  }

  handleIncrement = () => {
    this.props.incrementCounterCc();
    this.setState({ error: false });
  };

  handleDecrement = () => {
    const { counter } = this.state;
    if (counter === 0) return this.setState({ error: true });
    this.props.decrementCounterCc();
  };

  render() {
    const { counter, error } = this.state;
    return (
      <div className="container">
        <h3>Class Component</h3>
        <div>{counter}</div>
        <div className="btn-container">
          <Button type="primary" className="btn-w-50" onClick={this.handleIncrement}>
            +
          </Button>
          <Button type="primary" className="btn-w-50 ml-1" onClick={this.handleDecrement}>
            -
          </Button>
        </div>
        {error && <p className="error-text">Minus is not allowed</p>}
      </div>
    );
  }
}

CounterCC.propTypes = propTypes;

const mapStateToProps = (state) => ({
  counter: state.counterCc,
});

const mapDispatchToProps = { incrementCounterCc, decrementCounterCc };

export default connect(mapStateToProps, mapDispatchToProps)(CounterCC);
