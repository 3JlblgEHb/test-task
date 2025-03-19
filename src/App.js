import React from 'react';
import './App.css';
import Home from './pages/Home'; // Импортируем Home
import { BrowserRouter as Router } from 'react-router-dom';  // Импортируем BrowserRouter

function App() {
  return (
    <Router>  
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
