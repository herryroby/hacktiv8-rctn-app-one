import React, { useState } from 'react';
import { Button } from '../atoms';

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
      <div style={{ margin: '10px' }}>
        <Button style={{ width: '50px' }} onClick={handleIncrement}>
          +
        </Button>
        <Button style={{ width: '50px', marginLeft: '10px' }} onClick={handleDecrement}>
          -
        </Button>
      </div>
      {error && <div style={{ color: '#f00' }}>Minus is not allowed</div>}
    </div>
  );
};

export default CounterFC;
