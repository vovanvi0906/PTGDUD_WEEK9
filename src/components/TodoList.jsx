// components/TodoList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../redux/todoSlice';

function TodoList() {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div>
      <h2>📋 To-do List</h2>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập công việc..."
          style={{ padding: 10, width: '70%' }}
        />
        <button onClick={handleAdd} style={{ marginLeft: 10 }}>
          Thêm
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: 20 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              padding: 10,
              marginBottom: 8,
              border: '1px solid #ccc',
              borderRadius: 6,
              textDecoration: todo.completed ? 'line-through' : 'none',
              background: todo.completed ? '#e0ffe0' : '#fff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{ cursor: 'pointer' }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              style={{ border: 'none', color: 'red', cursor: 'pointer' }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
