import { Button } from 'antd';
import React, { useState } from 'react';
import './style.css';

const CounterFC = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const handleIncrement = () => {
    setError(false);
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count === 0) return setError(true);
    setCount(count - 1);
  };

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
      <h3>Functional Component (Hooks)</h3>
      <div>{count}</div>
      <div className="btn-container">
        <Button type="primary" className="btn-w-50" onClick={handleIncrement}>
          +
        </Button>
        <Button type="primary" className="btn-w-50 ml-1" onClick={handleDecrement}>
          -
        </Button>
      </div>
      {error && <p className="error-text">Minus is not allowed</p>}
    </div>
  );
};

export default CounterFC;
