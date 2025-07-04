
import React from 'react';

const Header = () => {
  return (
    <header className="py-4" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ width: '1400px', margin: '0 auto' }}>
          {/* Logo no canto esquerdo com mais destaque */}
          <div className="flex items-center">
            <div className="w-24 h-24">
              <img src="/lovable-uploads/b4660aca-4ebc-45ae-b0cd-d6bd944f1ab2.png" alt="Lansutech" className="w-full h-full object-contain" />
            </div>
          </div>
          
          {/* Navegação centralizada com mais espaçamento */}
          <nav className="flex items-center justify-center flex-1">
            <div className="flex items-center space-x-16">
              <button 
                className="text-gray-700 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-black hover:text-white flex items-center justify-center" 
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
                className="text-gray-700 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-black hover:text-white flex items-center justify-center" 
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
                className="text-gray-700 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-black hover:text-white flex items-center justify-center" 
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
                className="text-gray-700 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-black hover:text-white flex items-center justify-center" 
                style={{ 
                  fontFamily: 'DM Sans',
                  width: '103px',
                  height: '31px',
                  borderRadius: '20px'
                }}
              >
                Projetos
              </button>
            </div>
          </nav>
          
          {/* Botão Sobre nós no canto direito com cor preta */}
          <div className="flex items-center">
            <button 
              className="text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-800 flex items-center justify-center" 
              style={{ 
                backgroundColor: '#000000', 
                fontFamily: 'DM Sans',
                width: '103px',
                height: '31px',
                borderRadius: '20px'
              }}
            >
              Sobre nós
            </button>
          </div>
        </div>
        
        {/* Linha mais próxima dos botões e mais ampla */}
        <div className="mt-1 flex justify-center">
          <div 
            className="flex justify-center" 
            style={{ width: '1400px' }}
          >
            <div 
              style={{ 
                width: '800px',
                height: '2px', 
                backgroundColor: '#000000'
              }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
