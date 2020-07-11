import React from 'react';
import CounterCC from '../organisms/Counter/CC';
import CounterFC from '../organisms/Counter/FC';

const Counter = () => (
  <div style={{ marginBottom: '50px' }}>
    <h1 style={{ display: 'flex', justifyContent: 'center', fontWeight: 600 }}>Counter</h1>
    <CounterCC />
    <CounterFC />
  </div>
);

export default Counter;
