
import React from 'react';

const Header = () => {
  return (
    <header className="py-4" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* Header container centralizado */}
          <div className="flex items-center justify-between" style={{ width: '1058px', height: '46px' }}>
            <div className="flex items-center">
              <div className="w-12 h-12 mr-3">
                <img src="/imgs/logo.png" alt="Lansutech" className="w-full h-full object-contain" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'DM Sans', fontWeight: 600 }}>
                LANSUTECH
              </h1>
            </div>
            
            <nav className="flex items-center space-x-8">
              <button 
                className="text-gray-700 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-black hover:text-white" 
                style={{ 
                  fontFamily: 'DM Sans',
                  width: '103px',
                  height: '31px',
                  borderRadius: '20px'
                }}
              >
                Sobre nós
              </button>
              <button 
                className="text-gray-700 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-black hover:text-white" 
                style={{ 
                  fontFamily: 'DM Sans',
                  width: '103px',
                  height: '31px',
                  borderRadius: '20px'
                }}
              >
                Serviços
              </button>
              <button 
                className="text-gray-700 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-black hover:text-white" 
                style={{ 
                  fontFamily: 'DM Sans',
                  width: '103px',
                  height: '31px',
                  borderRadius: '20px'
                }}
              >
                Contato
              </button>
              <button 
                className="text-gray-700 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-black hover:text-white" 
                style={{ 
                  fontFamily: 'DM Sans',
                  width: '103px',
                  height: '31px',
                  borderRadius: '20px'
                }}
              >
                Projetos
              </button>
              <button 
                className="text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-800" 
                style={{ 
                  backgroundColor: '#163030', 
                  fontFamily: 'DM Sans',
                  width: '103px',
                  height: '31px',
                  borderRadius: '20px'
                }}
              >
                Login
              </button>
            </nav>
          </div>
        </div>
        {/* Linha sutil elegante */}
        <div className="mt-4 mx-auto" style={{ width: '1058px', height: '1px', backgroundColor: '#163030', opacity: 0.1 }}></div>
      </div>
    </header>
  );
};

export default Header;
