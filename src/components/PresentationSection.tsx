
import React from 'react';

const PresentationSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Primeira seção - Retângulo escuro à esquerda */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="h-48 rounded-lg" style={{ backgroundColor: '#163030' }}></div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Apresentação</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Na Lansutech, combinamos tecnologia de ponta com estratégias personalizadas para entregar soluções 
                que realmente fazem a diferença. Nossa equipe especializada trabalha em parceria com você para 
                entender suas necessidades específicas e desenvolver produtos digitais que superam expectativas.
                Oferecemos um portfólio completo de serviços, desde o desenvolvimento de aplicações web e mobile 
                até consultoria em transformação digital.
              </p>
            </div>
          </div>
        </div>

        {/* Segunda seção - Retângulo escuro à direita */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="lg:order-2">
              <div className="h-48 rounded-lg" style={{ backgroundColor: '#163030' }}></div>
            </div>
            <div className="lg:order-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Apresentação</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Acreditamos que a tecnologia deve ser uma ferramenta para simplificar e otimizar processos, 
                não complicá-los. Por isso, desenvolvemos soluções intuitivas e eficientes que se adaptam 
                perfeitamente às necessidades específicas de cada cliente e setor de atuação.
                Nossa abordagem multidisciplinar permite atender diversos segmentos do mercado.
              </p>
            </div>
          </div>
        </div>

        {/* Grid de três cards escuros */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-left">
              <div className="h-40 rounded-lg mb-4" style={{ backgroundColor: '#163030' }}></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Apresentação</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Desenvolvimento de aplicações web modernas e responsivas, 
                utilizando as mais recentes tecnologias do mercado para 
                garantir performance e usabilidade excepcionais.
              </p>
            </div>
            <div className="text-left">
              <div className="h-40 rounded-lg mb-4" style={{ backgroundColor: '#163030' }}></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Apresentação</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Soluções mobile nativas e híbridas para iOS e Android, 
                com foco na experiência do usuário e integração perfeita 
                com sistemas existentes.
              </p>
            </div>
            <div className="text-left">
              <div className="h-40 rounded-lg mb-4" style={{ backgroundColor: '#163030' }}></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Apresentação</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Consultoria especializada em transformação digital 
                e otimização de processos empresariais para maximizar 
                eficiência e resultados.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PresentationSection;
