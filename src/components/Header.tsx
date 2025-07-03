
import React from 'react';

const Header = () => {
  return (
    <header className="py-6" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="w-10 h-10 mr-3">
            <img src="/imgs/logo.png" alt="Lansutech" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">Lansutech</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
