import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div>
        <button
          style={{ width: '5rem', height: '3rem' }}
          aria-label='Increment value'
          onClick={() => dispatch(increment())}>
          +
        </button>
        <span style={{ marginLeft: '2rem', marginRight: '2rem' }}>{count}</span>
        <button
          style={{ width: '5rem', height: '3rem' }}
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
}
