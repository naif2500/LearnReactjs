import React, { useState } from 'react';
import ToDoList from './ToDoList';

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTodos([...todos, { id: Date.now(), task: task, completed: false }]);
      setTask('');
    }
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={styles.container}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>Add</button>
      </div>
      <ToDoList
        todos={todos}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  input: {
    width: '70%',
    padding: '10px',
    fontSize: '16px',
  },
  addButton: {
    padding: '10px 20px',
    fontSize: '16px',
    marginLeft: '10px',
  },
};

export default ToDoApp;
