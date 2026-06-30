import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CommunityImpact from './components/CommunityImpact';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GridBackground from './components/GridBackground';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0F172A] relative">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#F39C35] focus:text-white focus:px-4 focus:py-2 focus:rounded-xl"
        >
          Skip to content
        </a>
        <GridBackground />
        <div className="relative z-10">
          <Navbar />
          <main id="main">
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <CommunityImpact />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
