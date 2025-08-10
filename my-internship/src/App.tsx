import React from 'react';
import Hero from './Hero';
import Skills from './Skills.tsx';
import WorkExperience from './WorkExperience.tsx';
import Awards from './Awards';
import Projects from './Projects';
import Contact from './Contact.tsx';
import Footer from './Footer';
import Navbar from './Navbar';
import { useScrollSEO } from './hooks/useScrollSEO';

const App: React.FC = () => {
  // Initialize SEO tracking
  useScrollSEO();

  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <WorkExperience />
      <Awards />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App; 