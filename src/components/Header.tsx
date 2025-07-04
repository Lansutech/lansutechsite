
import React from 'react';

const Header = () => {
  return (
    <header className="py-4" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ width: '1058px', margin: '0 auto' }}>
          {/* Logo no canto esquerdo */}
          <div className="flex items-center">
            <div className="w-12 h-12">
              <img src="/imgs/logo.png" alt="Lansutech" className="w-full h-full object-contain" />
            </div>
          </div>
          
          {/* Navegação centralizada */}
          <nav className="flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
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
          
          {/* Botão Sobre nós no canto direito com estilo diferenciado */}
          <div className="flex items-center">
            <button 
              className="text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-800 flex items-center justify-center" 
              style={{ 
                backgroundColor: '#163030', 
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
        
        {/* Linha sutil apenas pelos itens principais da navegação */}
        <div className="mt-4 flex justify-center">
          <div 
            className="flex justify-center" 
            style={{ width: '1058px' }}
          >
            <div 
              style={{ 
                width: '432px', // Largura aproximada para cobrir apenas os 4 botões centrais
                height: '1px', 
                backgroundColor: '#163030', 
                opacity: 0.1 
              }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
