
import React from 'react';

const ColoredCardsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
            <div className="text-4xl text-gray-400">💡</div>
          </div>
        </div>

        {/* Grid de cards coloridos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-red-400 h-32 rounded-lg"></div>
          <div className="bg-gray-300 h-32 rounded-lg"></div>
          <div className="bg-teal-400 h-32 rounded-lg"></div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Apresentação</h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Nossa abordagem multidisciplinar permite atender diversos segmentos do mercado, desde startups 
            inovadoras até grandes corporações. Combinamos criatividade, tecnologia e estratégia para 
            entregar resultados excepcionais em cada projeto que assumimos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ColoredCardsSection;
