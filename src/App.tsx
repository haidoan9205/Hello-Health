import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import Counter from './components/Counter';
import Employee from './components/Employee';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/hello-health'  element={<Counter/>} />
        <Route path='/hello-health/employee' element={<Employee/>} />

      </Routes>
    </Router>
  );
}

export default App;
