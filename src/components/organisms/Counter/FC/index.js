import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounterFc, incrementCounterFc } from '../../../../redux/actions';
import './style.css';

const CounterFC = () => {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(false);
  const counterSelector = useSelector((state) => state.counterFc);
  const dispatch = useDispatch();

  useEffect(() => {
    setCounter(counterSelector);
  }, [counterSelector]);

  const handleIncrement = () => {
    dispatch(incrementCounterFc());
    setError(false);
  };

  const handleDecrement = () => {
    if (counter === 0) return setError(true);
    dispatch(decrementCounterFc());
  };

  return (
    <div className="container">
      <h3>Functional Component (Hooks)</h3>
      <div>{counter}</div>
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
