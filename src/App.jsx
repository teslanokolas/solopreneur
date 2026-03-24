import React from 'react';
import Hero from './components/Hero';
import Reality from './components/Reality';
import Framework from './components/Framework';
import UseCases from './components/UseCases';
import Founder from './components/Founder';
import Offer from './components/Offer';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="app-container">
      <div className="bg-glow"></div>
      <Hero />
      <Reality />
      <Framework />
      <UseCases />
      <Founder />
      <Offer />
      <FAQ />
      
      <footer className="section text-center text-secondary" style={{ padding: '40px 0', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <p>© 2024 AI Mastery for Solos. Built for Solopreneurs.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
