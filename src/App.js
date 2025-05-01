import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Testimonials from './Pages/Testimonials';
import Contact from './Pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
