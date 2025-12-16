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
import ScrollReveal from "./components/ScrollReveal";

function App() {
  return (
    <div>
      <Navbar />
      
      {/* Hero - No animation, immediately visible */}
      <ScrollReveal id="home">
        <Hero />
      </ScrollReveal>
      <hr className="border-t-2 my-6" />
      
      {/* About - Reveals on scroll */}
      <ScrollReveal id="about">
        <About />
      </ScrollReveal>
      
      <hr className="border-t-2 my-6" />
      
      {/* Projects - Reveals on scroll */}
      <ScrollReveal id="projects">
        <Projects />
      </ScrollReveal>
      
      <hr className="border-t-2 my-6" />
      
      {/* Contact - Reveals on scroll */}
      <ScrollReveal id="contact">
        <Contact />
      </ScrollReveal>
    </div>
  )
}

export default App