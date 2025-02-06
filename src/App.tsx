import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CommunityImpact from './components/CommunityImpact';
import Contact from './components/Contact';
import GridBackground from './components/GridBackground';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0F172A] relative">
        <GridBackground />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <CommunityImpact />
          <Contact />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;