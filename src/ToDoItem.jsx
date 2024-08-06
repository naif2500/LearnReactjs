import React from 'react';

const ToDoItem = ({ todo, deleteTask, toggleComplete }) => {
  return (
    <li style={styles.item}>
      <span
        style={{
          ...styles.task,
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.task}
      </span>
      <button onClick={() => deleteTask(todo.id)} style={styles.deleteButton}>Delete</button>
    </li>
  );
};

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  task: {
    flex: 1,
    cursor: 'pointer',
  },
  deleteButton: {
    marginLeft: '10px',
    padding: '5px 10px',
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ToDoItem;
