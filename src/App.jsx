import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import AIChat from './Components/AIChat/AIChat'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './falling.css';   // 👈 create this file

const App = () => {
  return (
    <div className="app-container">

      {/* 🌌 Falling Background */}
      <div className="falling-bg">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <Navbar/>
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
      <AIChat />

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App