import React from 'react';
import Homepage from './components/Homepage';
import Admissions from './components/Admissions';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import './index.css';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/admissions" element={<Admissions />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


