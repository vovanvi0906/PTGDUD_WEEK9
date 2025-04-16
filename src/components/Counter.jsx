// components/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: 50 }}>
      <h2>🧩 Counter</h2>
      <div
        style={{
          fontSize: 30,
          margin: 10,
          border: '2px solid #333',
          padding: 10,
          display: 'inline-block',
          borderRadius: 8,
        }}
      >
        {count}
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>Tăng</button>
        <button onClick={() => dispatch(decrement())} style={{ marginLeft: 10 }}>
          Giảm
        </button>
      </div>
    </div>
  );
}

export default Counter;
