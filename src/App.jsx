// src/App.jsx

import React from 'react';
import Home from './components/Home';
import './App.css'; // Import global styles
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from './components/addBook';

function App() {
  
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addbook" element={<AddBook />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
