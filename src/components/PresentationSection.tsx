
import React from 'react';

const PresentationSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="h-48 rounded-lg" style={{ backgroundColor: '#163030' }}></div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Apresentação</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Texto de apresentação da empresa seguindo o protótipo.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="lg:order-2">
              <div className="h-48 rounded-lg" style={{ backgroundColor: '#163030' }}></div>
            </div>
            <div className="lg:order-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Apresentação</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Texto de apresentação da empresa seguindo o protótipo.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-left">
              <div className="h-40 rounded-lg mb-4" style={{ backgroundColor: '#163030' }}></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Apresentação</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Texto breve do card.
              </p>
            </div>
            <div className="text-left">
              <div className="h-40 rounded-lg mb-4" style={{ backgroundColor: '#163030' }}></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Apresentação</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Texto breve do card.
              </p>
            </div>
            <div className="text-left">
              <div className="h-40 rounded-lg mb-4" style={{ backgroundColor: '#163030' }}></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Apresentação</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Texto breve do card.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PresentationSection;
