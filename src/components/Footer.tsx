
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="mb-8">
            <div className="bg-red-900 h-32 rounded-lg mb-8"></div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Apresentação</h2>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
              Entre em contato conosco e descubra como a Lansutech pode transformar suas ideias em realidade. 
              Estamos prontos para ser seu parceiro estratégico na jornada de transformação digital, 
              oferecendo soluções personalizadas que geram resultados reais e sustentáveis para o seu negócio.
            </p>
          </div>

          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
              <div className="text-4xl text-gray-400">📧</div>
            </div>
            
            <div className="text-right">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Apresentação</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md ml-auto">
                Conecte-se conosco através de nossos canais de comunicação. Nossa equipe está sempre 
                disponível para esclarecer dúvidas e apresentar as melhores soluções para suas necessidades.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2024 Lansutech. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
