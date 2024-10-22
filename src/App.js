// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Counter from './Counter';
import Calculator from './Calculator';
import ToDoApp from './ToDoApp';
import FormComponent from './FormComponent';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div style={{ marginLeft: '200px', paddingTop: '60px', paddingLeft: '20px' }}>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/todoapp" element={<ToDoApp />} />
          <Route path="/formcomponent" element={<FormComponent />} />
          <Route path="/" element={<h1>Welcome to Multi-Page App</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
