import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage.js';
import Cars from './pages/cars.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cars">Cars</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to ="contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={<Cars />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
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
