
import React from 'react';

const Header = () => {
  return (
    <header className="py-4" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 mr-3">
              <img src="/imgs/logo.png" alt="Lansutech" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'DM Sans', fontWeight: 600 }}>
              LANSUTECH
            </h1>
          </div>
          
          <nav className="flex items-center space-x-8">
            <button className="text-white px-6 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#163030', fontFamily: 'DM Sans' }}>
              Sobre nós
            </button>
            <button className="text-gray-700 text-sm font-medium" style={{ fontFamily: 'DM Sans' }}>
              Sobre nós
            </button>
            <button className="text-gray-700 text-sm font-medium" style={{ fontFamily: 'DM Sans' }}>
              Sobre nós
            </button>
            <button className="text-gray-700 text-sm font-medium" style={{ fontFamily: 'DM Sans' }}>
              Sobre nós
            </button>
            <button className="text-white px-6 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#163030', fontFamily: 'DM Sans' }}>
              Sobre nós
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
