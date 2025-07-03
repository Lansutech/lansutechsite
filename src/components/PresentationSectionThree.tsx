
import React from 'react';

const PresentationSectionThree = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terceira seção - três cartões */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-left">
              <div className="rounded-lg mb-4" style={{ width: '100%', maxWidth: '363px', height: '242px', backgroundColor: '#163030', borderRadius: '10px' }}></div>
              <h3 className="text-gray-900 mb-2" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '45px' }}>
                Apresentação
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'DM Sans', fontSize: '16px' }}>
                Texto breve do card.
              </p>
            </div>
            <div className="text-left">
              <div className="rounded-lg mb-4" style={{ width: '100%', maxWidth: '363px', height: '242px', backgroundColor: '#163030', borderRadius: '10px' }}></div>
              <h3 className="text-gray-900 mb-2" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '45px' }}>
                Apresentação
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'DM Sans', fontSize: '16px' }}>
                Texto breve do card.
              </p>
            </div>
            <div className="text-left">
              <div className="rounded-lg mb-4" style={{ width: '100%', maxWidth: '363px', height: '242px', backgroundColor: '#163030', borderRadius: '10px' }}></div>
              <h3 className="text-gray-900 mb-2" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '45px' }}>
                Apresentação
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'DM Sans', fontSize: '16px' }}>
                Texto breve do card.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PresentationSectionThree;
