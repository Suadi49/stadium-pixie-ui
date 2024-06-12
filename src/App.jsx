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
import LiveScore from './components/Livescore/LiveScore';
import Tours from './components/Tours/Tours';
import ArritjaKetu from './components/Tours/ArritjaKetu';
import Autobuset from './components/Tours/Autobuset';
import Disability from './components/Tours/Disability';
import Objektet from './components/Tours/Objektet';
import VirtualTour from './components/Tours/VirtualTour';
import Stadium from './components/stadiumi/stadiumi';


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
          <Route path="/livescore" element={<LiveScore />} />
          <Route path="/tours" element={<Tours />} />
          {/* <Route path="/arritja-ketu" element={<ArritjaKetu/>} /> */}
          <Route path="/autobuset" element={<Autobuset />} />
          <Route path="/disability" element={<Disability />} />
          <Route path="/objektet" element={<Objektet />} />
          <Route path="/virtualTour" element={<VirtualTour />} />
          <Route path="/stadiumi" element={<Stadium/>} />

        </Routes>
    </Router>
    </>
  )
}

export default App
