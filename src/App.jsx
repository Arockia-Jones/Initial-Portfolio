import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />

      {/* ✅ Toast must be here */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App