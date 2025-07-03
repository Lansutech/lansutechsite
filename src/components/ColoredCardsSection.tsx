
import React from 'react';

const ColoredCardsSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ilustração central */}
        <div className="text-center mb-12">
          <div className="w-48 h-32 mx-auto mb-8 flex items-center justify-center">
            <div className="text-6xl text-gray-400">🎨</div>
          </div>
        </div>

        {/* Grid de cards coloridos - seguindo o PNG */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="h-32 rounded-lg" style={{ backgroundColor: '#B85450' }}></div>
          <div className="h-32 rounded-lg" style={{ backgroundColor: '#D4D4D4' }}></div>
          <div className="h-32 rounded-lg" style={{ backgroundColor: '#6FAFB0' }}></div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Apresentação</h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-sm">
            Nossa abordagem multidisciplinar permite atender diversos segmentos do mercado, desde startups 
            inovadoras até grandes corporações. Combinamos criatividade, tecnologia e estratégia para 
            entregar resultados excepcionais em cada projeto que assumimos. Com anos de experiência no 
            mercado de tecnologia, estabelecemos uma metodologia própria que garante qualidade e inovação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ColoredCardsSection;
