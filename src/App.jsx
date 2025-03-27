// src/App.jsx

import React, { useState } from 'react';
import Home from './components/Home';
import './App.css'; // Import global styles
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from './components/AddBook';
import booksData from './booksData';

function App() {
  const [books, setBooks] = useState(booksData);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
  };
  
  return (  
      <Router>
        <Routes>
          <Route path="/" element={<Home books={books} />} />
          <Route path="/addbook" element={<AddBook addBook={addBook} />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
