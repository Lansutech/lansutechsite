
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PresentationSection from '../components/PresentationSection';
import PresentationSectionThree from '../components/PresentationSectionThree';
import ColoredCardsSection from '../components/ColoredCardsSection';
import PresentationSectionFour from '../components/PresentationSectionFour';
import PresentationSectionFive from '../components/PresentationSectionFive';
import ContentSection from '../components/ContentSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import PresentationSectionTwo from '@/components/PresentationSectionTwo';

const Index = () => {
  return (
   <div className="w-full min-h-screen bg-[#EAF3F3] overflow-x-hidden">
      <Header/>
      <Hero/>
      <PresentationSection/>
      <PresentationSectionTwo/>
      <PresentationSectionThree/>
      <ColoredCardsSection/>
      <PresentationSectionFour/>
      <PresentationSectionFive/>
      <ContentSection />
      <Footer />
      <ContactSection />
    </div>
  );
};

export default Index;
