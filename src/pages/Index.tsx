
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PresentationSection from '../components/PresentationSection';
import PresentationSectionTwo from '../components/PresentationSectionTwo';
import PresentationSectionThree from '../components/PresentationSectionThree';
import ColoredCardsSection from '../components/ColoredCardsSection';
import PresentationSectionFour from '../components/PresentationSectionFour';
import PresentationSectionFive from '../components/PresentationSectionFive';
import ContentSection from '../components/ContentSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EAF3F3' }}>
      <Header />
      <Hero />
      <PresentationSection />
      <PresentationSectionTwo />
      <PresentationSectionThree />
      <ColoredCardsSection />
      <PresentationSectionFour />
      <PresentationSectionFive />
      <ContentSection />
      <Footer />
    </div>
  );
};

export default Index;
