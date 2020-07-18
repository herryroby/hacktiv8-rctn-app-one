import React from 'react';
import CounterCC from '../../organisms/Counter/CC';
import CounterFC from '../../organisms/Counter/FC';
import './style.css';

const Counter = () => (
  <div className="container">
    <h1 className="text-center">Counter</h1>
    <CounterCC />
    <CounterFC />
  </div>
);

export default Counter;
