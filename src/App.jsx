import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CardDetails from './pages/CardDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
