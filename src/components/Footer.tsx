import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { id: 1, title: 'Automatização com IA', description: 'Mostrando como funciona e como isso pode acelerar processos no seu negócio.', color: '#1B3937' },
  { id: 2, title: 'Otimização SEO', description: 'Melhore seu posicionamento nos buscadores com estratégias de SEO eficazes.', color: '#008080' },
  { id: 3, title: 'Marketing Digital', description: 'Campanhas digitais para alcançar seu público-alvo e aumentar suas vendas.', color: '#805880' },
  { id: 4, title: 'Consultoria de TI', description: 'Soluções personalizadas para otimizar sua infraestrutura tecnológica.', color: '#99904A' },
  { id: 5, title: 'Desenvolvimento Web', description: 'Criação de sites e aplicações modernas e responsivas.', color: '#4A6B99' },
];

const CARD_SPACING = 32;
const LARGE_CARD_WIDTH = 580;
const SMALL_CARD_WIDTH = 360;
const CARD_HEIGHT_ACTIVE = 360;
const CARD_HEIGHT_INACTIVE = CARD_HEIGHT_ACTIVE * 0.8;

const CAROUSEL_DURATION = 0.6;

const carouselTransition = {
  type: "tween",
  ease: [0.4, 0, 0.2, 1],
  duration: CAROUSEL_DURATION,
} as const;

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Começa no primeiro card do array original

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
    <section className="bg-[#EAF3F3] py-24 pl-20 pr-8 overflow-hidden relative"> {/* Adicionado 'relative' para posicionar as setas */}
      <div className="max-w-[1600px] mx-auto">
        <h2 className="mb-16" style={{ fontFamily: 'Gulzar', fontSize: '96px', color: '#000000' }}>
          Serviços
        </h2>

        {/* Container que gerencia a rolagem horizontal para os cards */}
        <div className="flex items-end mb-12 relative overflow-hidden" style={{ height: CARD_HEIGHT_ACTIVE + 20 }}>
          <motion.div
            className="flex flex-nowrap items-end"
            animate={{ x: -calculateOffset() }}
            transition={carouselTransition}
          >
            {services.map((service, index) => { // Usando o array 'services' original
              const isActive = index === currentIndex;
              const zIndex = isActive ? 3 : (index > currentIndex ? 2 : 1);

              return (
                <motion.div
                  key={service.id} // Key é apenas o ID do serviço, pois não há clones
                  className="rounded-xl shadow-lg cursor-pointer flex-shrink-0"
                  onClick={() => setCurrentIndex(index)} // Clicar em um card o torna ativo
                  animate={{
                    width: isActive ? LARGE_CARD_WIDTH : SMALL_CARD_WIDTH,
                    height: isActive ? CARD_HEIGHT_ACTIVE : CARD_HEIGHT_INACTIVE,
                    marginRight: CARD_SPACING,
                    zIndex: zIndex,
                  }}
                  transition={carouselTransition}
                  style={{
                    backgroundColor: service.color,
                    bottom: 0,
                  }}
                >
                  <div className="p-6 text-white flex flex-col justify-end h-full">
                    <AnimatePresence initial={false} mode="wait">
                      <motion.div
                        key={`${service.id}-${isActive ? '_active' : '_inactive'}`} // Key para AnimatePresence
                        initial={{ opacity: 0, y: isActive ? 10 : 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: isActive ? -10 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="font-semibold" style={{ fontSize: isActive ? '48px' : '28px', lineHeight: '1.2' }}>
                          {service.title}
                        </h3>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="font-semibold mt-2"
                            style={{ fontSize: '18.26px', lineHeight: '1.4' }}
                          >
                            {service.description}
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

        {/* Título e Subtítulo do card ativo (abaixo do carrossel) */}
        <div className="text-black max-w-[760px] mt-12 h-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeServiceForContent.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <h3 style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '48px', lineHeight: '1.2' }} className="mb-4">
                {activeServiceForContent.title}
              </h3>
              <p style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '18.26px', lineHeight: '1.4' }}>
                {activeServiceForContent.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;