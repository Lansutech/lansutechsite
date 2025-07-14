import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#EAF3F3' , fontFamily: 'DM Sans' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> {/* Adicionei py-16 aqui para padding vertical */}
        
        {/* Título "Serviços" */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-[#000000] mb-12" style={{fontSize: '60px'}}>
            Serviços
          </h2>
        </div>

        {/* Todo o conteúdo que estava abaixo do banner vermelho foi removido */}

      </div>
    </footer>
  );
};

export default Footer;