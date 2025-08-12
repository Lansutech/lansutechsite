import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Sistemas Empresariais',
    description: 'Soluções personalizadas para otimizar a gestão do seu negócio.',
    longDescription: 'Desenvolvemos sistemas empresariais sob medida que integram e otimizam processos chave da sua operação. Desde gestão de clientes (CRM) até planejamento de recursos (ERP), nossas soluções são desenhadas para aumentar a eficiência, reduzir custos e fornecer insights estratégicos para a tomada de decisão.',
    color: '#34495E', // Um tom de azul escuro
    imageUrl: 'https://images.unsplash.com/photo-1560461396-ec0ef7bb29dd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Imagem de escritório/negócios
  },
  {
    id: 2,
    title: 'Sistemas de Gestão',
    description: 'Controle total sobre suas operações financeiras e administrativas.',
    longDescription: 'Oferecemos sistemas de gestão robustos que simplificam o controle de estoque, finanças, vendas e RH. Nossas plataformas são intuitivas e seguras, garantindo a organização dos seus dados e a automação de tarefas rotineiras, permitindo que você foque no crescimento estratégico da sua empresa.',
    color: '#506C91', // Um tom de cinza escuro
    imageUrl: 'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R2VzdGFvfGVufDB8fDB8fHwy', // Imagem de gráficos/dados
  },
  {
    id: 3,
    title: 'Automações de Processos',
    description: 'Elimine tarefas repetitivas e impulsione a produtividade com automação inteligente.',
    longDescription: 'Implementamos automações de processos que transformam a maneira como sua empresa trabalha. Seja na entrada de dados, aprovações, relatórios ou comunicação, identificamos gargalos e aplicamos tecnologias que executam tarefas de forma autônoma, liberando sua equipe para atividades de maior valor.',
    color: '#5BC7C2', // Um tom de verde-água
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXV0b21hJUMzJUE3JUMzJUEzb3xlbnwwfHwwfHx8Mg%3D%3D', // Imagem de engrenagens/fluxo
  },
  {
    id: 4,
    title: 'Web Scraping / Raspagem de Dados',
    description: 'Colete informações valiosas da internet para análises e insights estratégicos.',
    longDescription: 'Realizamos web scraping e raspagem de dados de forma ética e eficiente, coletando informações específicas de websites para análise de mercado, monitoramento de preços, pesquisa de concorrência e muito mais. Entregamos dados estruturados e prontos para serem utilizados na sua estratégia de negócio.',
    color: '#F39C12', // Um tom de laranja
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Imagem de código/pesquisa
  },
  {
    id: 5,
    title: 'Bots de Atendimento',
    description: 'Automatize o suporte ao cliente e melhore a experiência do usuário.',
    longDescription: 'Desenvolvemos bots de atendimento inteligentes que podem responder a perguntas frequentes, guiar usuários, agendar serviços e muito mais. Disponíveis 24/7, nossos bots reduzem o tempo de espera, melhoram a satisfação do cliente e otimizam os recursos da sua equipe de suporte.',
    color: '#BD4A63', // Um tom de roxo
    imageUrl: 'https://images.unsplash.com/photo-1676573408178-a5f280c3a320?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hhdEJvdHxlbnwwfHwwfHx8Mg%3D%3D', // Imagem de robô/atendimento
  },
  {
    id: 6,  
    title: 'Landing Pages',
    description: 'Crie páginas de alta conversão para suas campanhas de marketing digital.',
    longDescription: 'Criamos landing pages focadas em resultados, projetadas para converter visitantes em leads ou clientes. Com design atraente, mensagens claras e calls-to-action estratégicos, garantimos que suas campanhas de marketing digital alcancem seu potencial máximo de conversão.',
    color: '#0D361F', // Um tom de verde brilhante
    imageUrl: 'https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Imagem de tela de site/marketing
  },
];

const CARD_SPACING = 32; // Espaçamento entre os cards
const LARGE_CARD_WIDTH = 580; // Largura do card ativo
const SMALL_CARD_WIDTH = 360; // Largura dos cards inativos
const CARD_HEIGHT_ACTIVE = 360; // Altura do card ativo
const CARD_HEIGHT_INACTIVE = CARD_HEIGHT_ACTIVE * 0.8; // Altura dos cards inativos

const CAROUSEL_DURATION = 0.6; // Duração da transição do carrossel

const carouselTransition = {
  type: "tween",
  ease: [0.4, 0, 0.2, 1],
  duration: CAROUSEL_DURATION,
} as const;

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calcula o offset (posição X) para que o card ativo fique alinhado à esquerda
  const calculateOffset = useCallback(() => {
    let offset = 0;
    // Soma a largura de todos os cards ANTERIORES ao currentIndex
    for (let i = 0; i < currentIndex; i++) {
      offset += SMALL_CARD_WIDTH + CARD_SPACING; 
    }
    return offset;
  }, [currentIndex]);

  // Função para ir para o próximo card
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, services.length - 1));
  }, []);

  // Função para ir para o card anterior
  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Determina se os botões de navegação devem estar desabilitados
  const canGoNext = currentIndex < services.length - 1;
  const canGoPrev = currentIndex > 0;

  // O card ativo é simplesmente o serviço no currentIndex
  const activeServiceForContent = services[currentIndex];

  return (
    <section id="servicos" className="bg-[#EAF3F3] py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-[1600px] mx-auto">
        {/* TÍTULO RESPONSIVO */}
        <h2 className="mb-8 md:mb-16 text-4xl md:text-6xl lg:text-[86px] text-black" style={{ fontFamily: 'DM Sans' }}>
          Serviços
        </h2>

        {/* Container que gerencia a rolagem horizontal para os cards */}
        <div className="flex items-end mb-12 relative overflow-hidden" style={{ height: CARD_HEIGHT_ACTIVE + 20 }}>
          <motion.div
            className="flex flex-nowrap items-end"
            animate={{ x: -calculateOffset() }}
            transition={carouselTransition}
          >
            {services.map((service, index) => {
              const isActive = index === currentIndex;
              const zIndex = isActive ? 3 : (index > currentIndex ? 2 : 1);

              return (
                <motion.div
                  key={service.id}
                  // Adicionado 'group' para hover effects e ajuste na sombra
                  className="rounded-xl shadow-xl hover:shadow-2xl cursor-pointer flex-shrink-0 relative overflow-hidden group"
                  onClick={() => setCurrentIndex(index)}
                  animate={{
                    width: isActive ? LARGE_CARD_WIDTH : SMALL_CARD_WIDTH,
                    height: isActive ? CARD_HEIGHT_ACTIVE : CARD_HEIGHT_INACTIVE,
                    marginRight: CARD_SPACING,
                    zIndex: zIndex,
                  }}
                  transition={carouselTransition}
                  style={{ bottom: 0 }}
                >
                  {/* IMAGEM DE FUNDO E OVERLAY */}
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-xl"
                    style={{ backgroundImage: `url(${service.imageUrl})` }}
                  ></div>
                  <div
                    // Opacidade ajustada para 70% e transição suave no hover
                    className="absolute inset-0 rounded-xl opacity-70 group-hover:opacity-80 transition-opacity duration-300"
                    style={{ backgroundColor: service.color }}
                  ></div>

                  {/* CONTEÚDO DO CARD */}
                  <div className="p-6 text-white flex flex-col justify-end h-full relative z-10">
                    <AnimatePresence initial={false} mode="wait">
                      {/* AJUSTADO: Usando transição 'spring' para a animação do texto */}
                      <motion.div
                        key={`${service.id}-${isActive ? '_active' : '_inactive'}`} // Key para AnimatePresence
                        initial={{ opacity: 0, y: 20 }} // Começa um pouco abaixo
                        animate={{ opacity: 1, y: 0 }} // Desliza para a posição normal
                        exit={{ opacity: 0, y: -20 }} // Sai deslizando para cima
                        transition={{ 
                            type: "spring", // Usar transição tipo "mola" (spring) para fluidez
                            stiffness: 250, // Rigidez da mola (quanto mais alto, mais "dura")
                            damping: 25,    // Amortecimento (quanto mais alto, mais rápido a mola se estabiliza)
                            mass: 1         // Massa do objeto (influencia a inércia)
                        }}
                      >
                        <h3 
                          className="font-semibold text-3xl md:text-4xl lg:text-[48px] leading-tight mb-2" 
                          style={{ fontFamily: 'DM Sans', textShadow: '0 1px 2px rgba(0,0,0,0.7)' }} // Adicionado text-shadow
                        >
                          {service.title}
                        </h3>
                        {isActive && (
                          <motion.p
                            // A animação do parágrafo pode ter um pequeno atraso para efeito cascata
                            initial={{ opacity: 0, y: 10 }} // Começa um pouco abaixo do título
                            animate={{ opacity: 1, y: 0 }} // Desliza para a posição normal
                            exit={{ opacity: 0, y: -10 }} // Sai deslizando para cima
                            transition={{ duration: 0.3, delay: 0.1 }} // Mantém uma pequena duração e atraso
                            className="font-semibold text-base md:text-lg lg:text-[18.26px] leading-relaxed" 
                            style={{ fontFamily: 'DM Sans', textShadow: '0 1px 2px rgba(0,0,0,0.7)' }} // Adicionado text-shadow
                          >
                            {service.longDescription} {/* Exibe a descrição detalhada */}
                          </motion.p>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Botões de Navegação */}
        <div className="flex justify-start items-center mt-12 gap-4">
          <button
            onClick={goToPrev}
            disabled={!canGoPrev}
            className={`p-3 rounded-full bg-white shadow-md transition-all duration-300 ${!canGoPrev ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={goToNext}
            disabled={!canGoNext}
            className={`p-3 rounded-full bg-white shadow-md transition-all duration-300 ${!canGoNext ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
