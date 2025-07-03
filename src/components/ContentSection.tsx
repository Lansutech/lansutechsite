
import React from 'react';

const ContentSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Seção com retângulo cinza à esquerda */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="h-32 rounded-lg bg-gray-300"></div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Apresentação</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Com anos de experiência no mercado de tecnologia, a Lansutech se estabeleceu como uma referência 
                em inovação e qualidade. Nossa equipe é formada por profissionais altamente qualificados que estão 
                sempre atualizados com as últimas tendências e melhores práticas do setor.
              </p>
            </div>
          </div>
        </div>

        {/* Seção de texto completo centralizado */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Apresentação</h2>
          <p className="text-gray-700 text-sm leading-relaxed max-w-4xl mx-auto">
            Trabalhamos com metodologias ágeis e focamos na entrega contínua de valor, garantindo que nossos 
            clientes vejam resultados tangíveis desde o início de cada projeto. Nossa filosofia se baseia na 
            transparência, comunicação efetiva e compromisso com a excelência em todos os aspectos do desenvolvimento.
          </p>
        </div>

        {/* Ilustração central */}
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
