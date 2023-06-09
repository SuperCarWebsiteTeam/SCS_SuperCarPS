import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.js';
import Cars from './pages/cars.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cars">Cars</Link></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={<Cars />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} Supercar World. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
