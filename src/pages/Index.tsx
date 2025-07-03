
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PresentationSection from '../components/PresentationSection';
import ColoredCardsSection from '../components/ColoredCardsSection';
import ContentSection from '../components/ContentSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <PresentationSection />
      <ColoredCardsSection />
      <ContentSection />
      <Footer />
    </div>
  );
};

export default Index;
