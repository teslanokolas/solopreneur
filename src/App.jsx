import React from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <div className="bg-glow"></div>
      <Hero />
      <AboutMe />
      <Services />
      <Portfolio />
      <Contact />
      
      <footer className="section text-center text-secondary" style={{ padding: '40px 0', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <p>© 2024 AI Mastery. Built for Solopreneurs.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
