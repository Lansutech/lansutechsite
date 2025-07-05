
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const ColoredCardsSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="w-48 h-32 mx-auto mb-8 flex items-center justify-center">
            <div className="text-6xl text-gray-400">🎨</div>
          </div>
        </div>

        {/* Carousel container mais amplo */}
        <div className="mx-auto relative" style={{ width: '1400px', height: '485px', paddingLeft: '56px', paddingRight: '56px' }}>
          <Carousel className="w-full h-full">
            <CarouselContent className="h-full">
              <CarouselItem className="basis-1/3 h-full px-3">
                <div className="rounded-lg h-full" style={{ backgroundColor: '#B85450', borderRadius: '10px' }}></div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 h-full px-3">
                <div className="rounded-lg h-full" style={{ backgroundColor: '#B85450', borderRadius: '10px' }}></div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 h-full px-3">
                <div className="rounded-lg h-full" style={{ backgroundColor: '#B85450', borderRadius: '10px' }}></div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 h-full px-3">
                <div className="rounded-lg h-full" style={{ backgroundColor: '#163030', borderRadius: '10px' }}></div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 h-full px-3">
                <div className="rounded-lg h-full" style={{ backgroundColor: '#6FAFB0', borderRadius: '10px' }}></div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 h-full px-3">
                <div className="rounded-lg h-full" style={{ backgroundColor: '#D4D4D4', borderRadius: '10px' }}></div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 h-full px-3">
                <div className="rounded-lg h-full" style={{ backgroundColor: '#B85450', borderRadius: '10px' }}></div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 h-full px-3">
                <div className="rounded-lg h-full" style={{ backgroundColor: '#163030', borderRadius: '10px' }}></div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 h-full px-3">
                <div className="rounded-lg h-full" style={{ backgroundColor: '#6FAFB0', borderRadius: '10px' }}></div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 h-full px-3">
                <div className="rounded-lg h-full" style={{ backgroundColor: '#B85450', borderRadius: '10px' }}></div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 h-full px-3">
                <div className="rounded-lg h-full" style={{ backgroundColor: '#D4D4D4', borderRadius: '10px' }}></div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 h-full px-3">
                <div className="rounded-lg h-full" style={{ backgroundColor: '#6FAFB0', borderRadius: '10px' }}></div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-gray-900 mb-6" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '67.05px' }}>
            Apresentação
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'DM Sans', fontSize: '18.26px' }}>
            Texto de apresentação seguindo o protótipo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ColoredCardsSection;
