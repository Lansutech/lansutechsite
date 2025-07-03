
import React from 'react';

const PresentationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Primeira seção - Layout horizontal */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-800 h-64 rounded-lg"></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Apresentação</h2>
              <p className="text-gray-600 leading-relaxed">
                Na Lansutech, combinamos tecnologia de ponta com estratégias personalizadas para entregar soluções 
                que realmente fazem a diferença. Nossa equipe especializada trabalha em parceria com você para 
                entender suas necessidades específicas e desenvolver produtos digitais que superam expectativas.
              </p>
            </div>
          </div>
        </div>

        {/* Segunda seção - Layout horizontal invertido */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="bg-slate-800 h-64 rounded-lg"></div>
            </div>
            <div className="lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Apresentação</h2>
              <p className="text-gray-600 leading-relaxed">
                Oferecemos um portfólio completo de serviços, desde o desenvolvimento de aplicações web e mobile 
                até consultoria em transformação digital. Cada projeto é uma oportunidade de criar valor real 
                e duradouro para nossos clientes.
              </p>
            </div>
          </div>
        </div>

        {/* Terceira seção - Grid de três colunas */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-slate-800 h-48 rounded-lg mb-6"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Apresentação</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Desenvolvimento de aplicações web modernas e responsivas, 
                utilizando as mais recentes tecnologias do mercado.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-slate-800 h-48 rounded-lg mb-6"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Apresentação</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Soluções mobile nativas e híbridas para iOS e Android, 
                com foco na experiência do usuário.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-slate-800 h-48 rounded-lg mb-6"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Apresentação</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Consultoria especializada em transformação digital 
                e otimização de processos empresariais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
