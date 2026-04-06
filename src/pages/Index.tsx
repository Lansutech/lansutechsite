
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ColoredCardsSection from '../components/ColoredCardsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
   <div className="w-full min-h-screen bg-[#EAF3F3] overflow-x-hidden">
      <Header/>
      <Hero/>
      <AboutSection/>
      <ColoredCardsSection/>
      <Footer />
      <ContactSection />
    </div>
  );
};

export default Index;
