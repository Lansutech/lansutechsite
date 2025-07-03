
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
              <div className="text-4xl text-gray-400">🚀</div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Lansutech
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluções tecnológicas inovadoras para impulsionar o seu negócio. 
            Transformamos ideias em realidade digital com expertise e dedicação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
