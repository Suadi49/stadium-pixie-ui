import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar';
import './App.css'
import HomePage from './components/HomePage/HomePage'
import Tiketat from './components/Tiketat/Tiketat';
import Eventet from './components/Eventet/Eventet';
import Fans from './components/Fans/Fans';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <>
    <Router>
    <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="tiketat" element={<Tiketat />} />
          <Route path="/eventet" element={<Eventet />} />
          <Route path="/fans" element={<Fans />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
    </Router>
    </>
  )
}

export default App
