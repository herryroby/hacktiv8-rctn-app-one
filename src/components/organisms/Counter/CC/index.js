import React from 'react';
import Button from '../../../atoms/Button';

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
        <h3 style={{ fontWeight: 600 }}>Class Component</h3>
        <div>{count}</div>
        <div style={{ margin: '10px' }}>
          <Button style={{ width: '50px' }} onClick={this.handleIncrement}>
            +
          </Button>
          <Button style={{ width: '50px', marginLeft: '10px' }} onClick={this.handleDecrement}>
            -
          </Button>
        </div>
        {error && <div style={{ color: '#f00' }}>Minus is not allowed</div>}
      </div>
    );
  }
}

export default CounterCC;
