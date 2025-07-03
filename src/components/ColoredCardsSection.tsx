
import React from 'react';

const ColoredCardsSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="w-48 h-32 mx-auto mb-8 flex items-center justify-center">
            <div className="text-6xl text-gray-400">🎨</div>
          </div>
        </div>

        {/* Carousel container with Figma specifications */}
        <div className="mx-auto" style={{ width: '1237px', height: '485px', paddingLeft: '56px', paddingRight: '56px' }}>
          <div className="flex gap-6 h-full">
            <div className="rounded-lg flex-1" style={{ backgroundColor: '#B85450', borderRadius: '10px' }}></div>
            <div className="rounded-lg flex-1" style={{ backgroundColor: '#D4D4D4', borderRadius: '10px' }}></div>
            <div className="rounded-lg flex-1" style={{ backgroundColor: '#6FAFB0', borderRadius: '10px' }}></div>
          </div>
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
