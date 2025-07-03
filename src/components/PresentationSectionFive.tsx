
import React from 'react';

const PresentationSectionFive = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quinta seção de apresentação - invertida */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="lg:order-2">
              <div className="rounded-lg" style={{ width: '550px', height: '363px', backgroundColor: '#6FAFB0', borderRadius: '10px' }}></div>
            </div>
            <div className="lg:order-1">
              <h2 className="text-gray-900 mb-4" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '67.05px' }}>
                Apresentação
              </h2>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'DM Sans', fontSize: '18.26px' }}>
                Texto de apresentação da empresa seguindo o protótipo.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PresentationSectionFive;
