import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, deleteTask, toggleComplete }) => {
  return (
    <ul style={styles.list}>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

const styles = {
  list: {
    listStyleType: 'none',
    padding: 0,
  },
};

export default ToDoList;
