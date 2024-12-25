import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ConnectedDevice from './components/ConnectedDevice';
import PilotTesting from './components/PilotTesting';
import SDGGoals from './components/SDGGoals';
import Updates from './components/Updates';
import Contact from './components/Contact';
// import Partners from './components/Partners.tsx';
import Team from './components/Team';
import Footer from './components/Footer';

// Utility function for smooth scrolling
const scrollToSection = (sectionId) => {
  document.querySelector(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate the original preloader
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return (
      <div id="preloader">
        <div id="loader"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={scrollToSection} />
      
      <main>
        <Hero />
        <Features />
        <ConnectedDevice />
        <PilotTesting />
        <SDGGoals />
        <Updates />
        <Contact />
        {/* <Partners /> */}
        <Team />
      </main>

      <Footer />

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary hover:bg-primary-dark text-white transition-colors"
        aria-label="Scroll to top"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    </div>
  );
};

export default App;