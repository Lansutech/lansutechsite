
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <div className="h-80 rounded-lg mb-8" style={{ backgroundColor: '#5D2E2E' }}></div>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Apresentação</h2>
            <p className="text-gray-700 text-sm leading-relaxed max-w-4xl mx-auto">
              Texto final seguindo o protótipo.
            </p>
          </div>
        </div>

        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="w-32 h-24 mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                <div className="text-4xl text-gray-400">✉️</div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Apresentação</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Texto de contato seguindo o protótipo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
