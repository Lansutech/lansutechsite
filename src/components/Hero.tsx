
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 pb-12" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-12">
          <div className="mb-8">
            {/* Ilustração/desenho como no PNG */}
            <div className="w-48 h-32 mx-auto mb-6 flex items-center justify-center">
              <div className="text-6xl text-gray-400">✏️</div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lansutech
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
