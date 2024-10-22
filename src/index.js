import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './FrontPage'; 
import App from './App';             

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/other" element={<App />} />    
      </Routes>
    </Router>
  </React.StrictMode>
);
