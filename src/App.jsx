import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';
import Home from '../components/Home';
import Mentor from '../components/Mentor';
import Mentee from '../components/Mentee';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/mentor">Mentor Page</Link>
          <Link to="/mentee">Mentee Page</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/mentee" element={<Mentee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
