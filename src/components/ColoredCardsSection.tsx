import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const presentationData = [
  {
    id: 0,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    title: 'Dashboard Analítico',
    description: 'Plataforma de visualização de dados em tempo real para otimização de processos de negócio.',
    tools: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e541?q=80&w=2070&auto=format&fit=crop',
    title: 'E-commerce de Roupas',
    description: 'Loja virtual completa com sistema de pagamento integrado e painel administrativo.',
    tools: ['Next.js', 'Stripe', 'TailwindCSS', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: null,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop',
    title: 'Landing Page de App',
    description: 'Página de captura e apresentação para um novo aplicativo mobile, focada em conversão.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Framer Motion'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
  },
];

const contentContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1, // Aumentar ligeiramente o stagger para mais lentidão no conteúdo
        },
    },
};

const contentItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80, // Ajustado para mais lento no conteúdo
            damping: 15, // Ajustado para mais suave no conteúdo
        } as const,
    },
};

const ColoredCardsSection = () => {
    const initialActiveIndex = Math.floor(presentationData.length / 2);
    const [activeCardIndex, setActiveCardIndex] = useState(initialActiveIndex);

    const CARD_WIDTH_SELECTED = 820;
    const CARD_HEIGHT_SELECTED = 460;
    const CARD_WIDTH_SIDE = 670;
    const CARD_HEIGHT_SIDE = 377;
    const VISIBLE_GAP_BETWEEN_CARDS = 24;
    const VERTICAL_ALIGN_OFFSET = (CARD_HEIGHT_SELECTED - CARD_HEIGHT_SIDE) / 2;
    const TOTAL_STAGE_WIDTH = CARD_WIDTH_SELECTED + (2 * VISIBLE_GAP_BETWEEN_CARDS) + (2 * CARD_WIDTH_SIDE);

    const handleNext = () => {
        setActiveCardIndex((prev) => (prev + 1 < presentationData.length ? prev + 1 : prev));
    };

    const handlePrev = () => {
        setActiveCardIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
    };

    const handleClickCard = (clickedIndex) => {
        if (clickedIndex !== activeCardIndex) {
            setActiveCardIndex(clickedIndex);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') {
                handleNext();
            } else if (event.key === 'ArrowLeft') {
                handlePrev();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeCardIndex]);


    return (
         <section id="projetos" className="py-16 bg-[#EAF3F3] flex flex-col items-center justify-start overflow-hidden">
        <RevealOnScroll type="slide" direction="up" delay={0.1} duration={0.8} threshold={0.5}>
          <h2 className="text-4xl font-regular text-black mb-12 mt-8" style={{fontFamily: 'DM Sans', fontSize: '86px', marginTop: 52}}> Nossos Projetos </h2>
        </RevealOnScroll>

            <RevealOnScroll type="fade" delay={0.3} duration={1.0} threshold={0.3}>
              <div className="relative" style={{ height: `${CARD_HEIGHT_SELECTED}px`, width: '100vw', display: 'flex', justifyContent: 'center' }}>
                  <div className="absolute" style={{ left: '50%', transform: 'translateX(-50%)', width: `${TOTAL_STAGE_WIDTH}px`, height: '100%' }}>
                      {presentationData.map((card, index) => {
                          const isActive = index === activeCardIndex;
                          let cardAnimateProps = {};
                          let opacity = 0;
                          let zIndex = 10;
                          let cursor = 'default';

                          const visibleLeftIndex = activeCardIndex - 1;
                          const visibleRightIndex = activeCardIndex + 1;
                          const SLOT_LEFT_POS = 0;
                          const SLOT_CENTRAL_POS = CARD_WIDTH_SIDE + VISIBLE_GAP_BETWEEN_CARDS;
                          const SLOT_RIGHT_POS = SLOT_CENTRAL_POS + CARD_WIDTH_SELECTED + VISIBLE_GAP_BETWEEN_CARDS;
                          const OFFSCREEN_LEFT_DEFAULT = -CARD_WIDTH_SELECTED * 1.5;
                          const OFFSCREEN_RIGHT_DEFAULT = TOTAL_STAGE_WIDTH + CARD_WIDTH_SELECTED * 0.5;

                          if (isActive) {
                              cardAnimateProps = { left: `${SLOT_CENTRAL_POS}px`, top: '0px', width: `${CARD_WIDTH_SELECTED}px`, height: `${CARD_HEIGHT_SELECTED}px` };
                              opacity = 1; zIndex = 20;
                          } else if (index === visibleLeftIndex) {
                              cardAnimateProps = { left: `${SLOT_LEFT_POS}px`, top: `${VERTICAL_ALIGN_OFFSET}px`, width: `${CARD_WIDTH_SIDE}px`, height: `${CARD_HEIGHT_SIDE}px` };
                              opacity = 1; zIndex = 15; cursor = 'pointer';
                          } else if (index === visibleRightIndex) {
                              cardAnimateProps = { left: `${SLOT_RIGHT_POS}px`, top: `${VERTICAL_ALIGN_OFFSET}px`, width: `${CARD_WIDTH_SIDE}px`, height: `${CARD_HEIGHT_SIDE}px` };
                              opacity = 1; zIndex = 15; cursor = 'pointer';
                          } else {
                              const targetLeftPos = index < activeCardIndex ? OFFSCREEN_LEFT_DEFAULT : OFFSCREEN_RIGHT_DEFAULT;
                              cardAnimateProps = { left: `${targetLeftPos}px`, top: `${VERTICAL_ALIGN_OFFSET}px`, width: `${CARD_WIDTH_SIDE}px`, height: `${CARD_HEIGHT_SIDE}px` };
                              opacity = 0; zIndex = 5;
                          }

                          return (
                              <motion.div
                                  key={card.id}
                                  onClick={() => handleClickCard(index)}
                                  className="absolute rounded-lg shadow-xl overflow-hidden"

                                  animate={{
                                      ...cardAnimateProps,
                                      opacity,
                                      zIndex,
                                  }}
                                  style={{ cursor }}

                                  transition={{
                                    type: 'spring',
                                    stiffness: 60, // Ajustado para mais lento e suave
                                    damping: 15, // Ajustado para permitir assentamento suave e orgânico
                                    mass: 1.2 // Ajustado para mais inércia e lentidão
                                  }}
                                  whileHover={!isActive ? { scale: 1.05, y: VERTICAL_ALIGN_OFFSET - 10 } : {}}
                              >
                                  <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }}></div>
                                  <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                  <div className="relative z-10 p-8 flex flex-col justify-end h-full text-white">
                                      <AnimatePresence>
                                          {isActive && (
                                              <motion.div
                                                  variants={contentContainerVariants}
                                                  initial="hidden"
                                                  animate="visible"
                                                  exit="hidden"
                                              >
                                                  <motion.h3 variants={contentItemVariants} className="text-4xl font-bold">{card.title}</motion.h3>
                                                  <motion.p variants={contentItemVariants} className="mt-2 text-base text-gray-200">{card.description}</motion.p>
                                                  <motion.div variants={contentItemVariants} className="flex flex-wrap gap-2 mt-4">
                                                      {card.tools.map(tool => (
                                                          <span key={tool} className="text-xs font-medium bg-white/20 text-white px-2 py-1 rounded-full">{tool}</span>
                                                      ))}
                                                  </motion.div>
                                                  <motion.div variants={contentItemVariants} className="flex items-center gap-4 mt-6">
                                                      {card.githubUrl && (<a href={card.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-700/80 rounded-md hover:bg-gray-600 transition-colors"><Github size={18} /><span>Código</span></a>)}
                                                      {card.liveUrl && (<a href={card.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600/90 rounded-md hover:bg-blue-500 transition-colors"><ExternalLink size={18} /><span>Ver ao Vivo</span></a>)}
                                                  </motion.div>
                                              </motion.div>
                                          )}
                                      </AnimatePresence>
                                  </div>
                              </motion.div>
                          );
                      })}
                  </div>
              </div>
            </RevealOnScroll>
        </section>
    );
};

export default ColoredCardsSection;