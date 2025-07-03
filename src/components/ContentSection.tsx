
import React from 'react';

const ContentSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="h-32 rounded-lg bg-gray-300"></div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Apresentação</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Texto seguindo o protótipo.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Apresentação</h2>
          <p className="text-gray-700 text-sm leading-relaxed max-w-4xl mx-auto">
            Texto centralizado seguindo o protótipo.
          </p>
        </div>

        <div className="text-center">
          <div className="w-48 h-32 mx-auto mb-8 flex items-center justify-center">
            <div className="text-6xl text-gray-400">🚀</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContentSection;
