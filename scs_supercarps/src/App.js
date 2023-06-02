import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages/index';
import Cars from './pages/cars';
import SignUp from './pages/signup';
import Contact from './pages/contact';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/index'  element={<Home />} />
				<Route path='/cars' element={<Cars />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/sign-up' element={<SignUp />} />
			</Routes>
		</Router>
	);
}

export default App;
