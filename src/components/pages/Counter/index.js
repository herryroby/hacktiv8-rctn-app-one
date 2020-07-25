import React from 'react';
import CounterCC from '../../organisms/Counter/CC';
import CounterFC from '../../organisms/Counter/FC';
import Layout from '../../templates/Layout';
import './style.css';

const Counter = () => (
  <Layout>
    <h1 className="text-center">Counter</h1>
    <CounterCC />
    <CounterFC />
  </Layout>
);

export default Counter;
