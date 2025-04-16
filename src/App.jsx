import { useState } from 'react'

import './App.css'
import Counter from './components/Counter';
import TodoList from './components/TodoList'; 

function App() {

  return (
    <>
      <div style={{ maxWidth: 600, margin: 'auto', padding: 20, textAlign: 'center' }}>
      <h1> Couter App</h1>
      <Counter />
      <hr />
      <h1> ToDo App</h1>
      <TodoList />
    </div>
    </>
  )
}

export default App
