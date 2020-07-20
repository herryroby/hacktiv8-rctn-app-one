import { Button } from 'antd';
import React from 'react';
import './style.css';

class CounterCC extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      error: false,
    };
  }

  handleIncrement = () => {
    const { count } = this.state;
    this.setState({ error: false, count: count + 1 });
  };

  handleDecrement = () => {
    const { count } = this.state;
    if (count === 0) return this.setState({ error: true });
    this.setState({ count: count - 1 });
  };

  render() {
    const { count, error } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '50px',
        }}
      >
        <h3>Class Component</h3>
        <div>{count}</div>
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

export default CounterCC;
