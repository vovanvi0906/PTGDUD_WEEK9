import { useState } from 'react'

import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: 50, border: '2px solid #333' , padding: 40 }}>
      <h1> Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: 10 }}>
        Giảm
      </button>
    </div>
    </>
  )
}

export default App
