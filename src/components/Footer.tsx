import React from 'react';


const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Automatização com IA',
      description: 'Mostrando como funciona e como isso pode acelerar processos no seu negócio.',
      color: '#1B3937',
    },
    {
      id: 2,
      title: 'Otimização SEO',
      description: 'Melhore seu posicionamento nos buscadores com estratégias de SEO eficazes.',
      color: '#008080',
    },
    {
      id: 3,
      title: 'Marketing Digital',
      description: 'Campanhas digitais para alcançar seu público-alvo e aumentar suas vendas.',
      color: '#805880',
    },
    {
      id: 4,
      title: 'Consultoria de TI',
      description: 'Soluções personalizadas para otimizar sua infraestrutura tecnológica.',
      color: '#99904A',
    },
  ];

  const activeCard = services[0]; // Card maior, principal

  return (
    <section className="bg-[#EAF3F3] py-24 pl-20 pr-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Título principal */}
        <h2
          className="mb-16"
          style={{
            fontFamily: 'Gulzar',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '96px',
            lineHeight: '100%',
            letterSpacing: '0',
            color: '#000000',
          }}
        >
          Serviços
        </h2>

        {/* Cards alinhados pela base */}
        <div className="flex gap-8 items-end mb-12">
          {services.map((service, index) => {
            const isActive = index === 0;

            return (
              <div
                key={service.id}
                className={`rounded-xl shadow-lg transition-all duration-300 ${
                  isActive ? 'w-[580px] h-[360px]' : 'w-[360px] h-[220px]'
                }`}
                style={{ backgroundColor: service.color }}
              ></div>
            );
          })}
        </div>

        {/* Título e Subtítulo do card ativo (fora do card) */}
        <div className="text-black max-w-[760px]">
          <h3
            style={{
              fontFamily: 'DM Sans',
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '0',
            }}
            className="mb-4"
          >
            {activeCard.title}
          </h3>
          <p
            style={{
              fontFamily: 'DM Sans',
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '18.26px',
              lineHeight: '100%',
              letterSpacing: '0',
            }}
          >
            {activeCard.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
