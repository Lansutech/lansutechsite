
import React from 'react';

const ContentSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Primeira seção com imagem à esquerda */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-48 rounded-lg"></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Apresentação</h2>
              <p className="text-gray-600 leading-relaxed">
                Acreditamos que a tecnologia deve ser uma ferramenta para simplificar e otimizar processos, 
                não complicá-los. Por isso, desenvolvemos soluções intuitivas e eficientes que se adaptam 
                perfeitamente às necessidades específicas de cada cliente e setor de atuação.
              </p>
            </div>
          </div>
        </div>

        {/* Segunda seção com texto completo */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Apresentação</h2>
          <p className="text-gray-600 leading-relaxed">
            Com anos de experiência no mercado de tecnologia, a Lansutech se estabeleceu como uma referência 
            em inovação e qualidade. Nossa equipe é formada por profissionais altamente qualificados que estão 
            sempre atualizados com as últimas tendências e melhores práticas do setor. Trabalhamos com metodologias 
            ágeis e focamos na entrega contínua de valor, garantindo que nossos clientes vejam resultados tangíveis 
            desde o início de cada projeto.
          </p>
        </div>

        {/* Terceira seção com imagem grande */}
        <div className="mb-12">
          <div className="w-32 h-32 mx-auto mb-8 bg-gray-200 rounded-full flex items-center justify-center">
            <div className="text-4xl text-gray-400">🎯</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
