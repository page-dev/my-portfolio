import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
        <Hero />
        <hr className="border-t-2 my-6" />
        <About />
        <hr className="border-t-2 my-6" />
        <Projects />
        <hr className="border-t-2 my-6" />
        <Contact />
    </div>
  )
}

export default App
