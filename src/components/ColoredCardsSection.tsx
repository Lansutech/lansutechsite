import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, Variants, useMotionValue } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// O componente RevealOnScroll foi completamente removido daqui,
// pois o objetivo é otimizar a performance removendo essa funcionalidade.

const presentationData = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    title: "Dashboard Analítico",
    description:
      "Plataforma de visualização de dados em tempo real para otimização de processos de negócio.",
    tools: ["React", "TypeScript", "D3.js", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1555099962-4199c345e541?q=80&w=2070&auto=format&fit=crop",
    title: "E-commerce de Roupas",
    description:
      "Loja virtual completa com sistema de pagamento integrado e painel administrativo.",
    tools: ["Next.js", "Stripe", "TailwindCSS", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: null,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop",
    title: "Landing Page de App",
    description:
      "Página de captura e apresentação para um novo aplicativo mobile, focada em conversão.",
    tools: ["HTML5", "CSS3", "JavaScript", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
];

const contentContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const contentItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
};

const ColoredCardsSection = () => {
  const initialActiveIndex = Math.floor(presentationData.length / 2);
  const [activeCardIndex, setActiveCardIndex] = useState(initialActiveIndex);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0); // Para rastrear a posição do drag no mobile
  const dragBuffer = 50; // Buffer em pixels para decidir o snap no mobile

  // Refs para medir a largura real de cada card no mobile
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calcula constraints para limitar o drag no mobile
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  
  useEffect(() => {
    if (isMobile && carouselRef.current && cardRefs.current.length > 0 && cardRefs.current[0]) {
      const containerWidth = carouselRef.current.offsetWidth; // Largura do div pai do motion.div flex
      const cardWidth = cardRefs.current[0].offsetWidth; // Largura de um card (w-[90vw])
      const gapWidth = 16; // gap-4
      
      // Calculate total width of all cards including gaps between them
      let totalContentWidth = 0;
      cardRefs.current.forEach((cardEl, index) => {
        if (cardEl) {
          totalContentWidth += cardEl.offsetWidth + gapWidth;
        }
      });
      // Adjust for the last gap not being on the right side of the container.
      if (totalContentWidth > 0) { // Garante que não haja totalContentWidth negativo ou zero para arrays vazios
          totalContentWidth -= gapWidth; 
      }

      // The draggable area starts 16px from the left due to px-4 on the parent
      // So, the actual usable width of the viewport for content is window.innerWidth - 32px
      const visibleViewportContentWidth = window.innerWidth - (2 * 16); // 16px de padding de cada lado do section.

      // Se o conteúdo total for menor que a viewport visível, não há necessidade de arrastar
      if (totalContentWidth <= visibleViewportContentWidth) {
        setConstraints({ left: 0, right: 0 });
      } else {
        const maxDragLeft = -(totalContentWidth - visibleViewportContentWidth);
        setConstraints({ left: maxDragLeft, right: 0 });
      }
    } else if (!isMobile) {
        // Reset constraints for desktop if not mobile, or if carouselRef isn't ready
        setConstraints({ left: 0, right: 0 });
    }
  }, [isMobile, presentationData.length, carouselRef.current, cardRefs.current]);


  // Função para snap ao soltar drag no mobile
  const handleDragEnd = useCallback((_event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    
    if (carouselRef.current && cardRefs.current[activeCardIndex]) {
      const cardWidth = cardRefs.current[activeCardIndex]?.offsetWidth || 0;
      const snapThreshold = cardWidth * 0.4; // 40% da largura do card para snap
      
      let newActiveIndex = activeCardIndex;

      // Determine if a significant drag or swipe occurred
      if (offset < -dragBuffer || velocity < -200) { // Swiped left or dragged past buffer to the left
        newActiveIndex = Math.min(activeCardIndex + 1, presentationData.length - 1);
      } else if (offset > dragBuffer || velocity > 200) { // Swiped right or dragged past buffer to the right
        newActiveIndex = Math.max(activeCardIndex - 1, 0);
      }
      
      // Update active card index
      setActiveCardIndex(newActiveIndex);
    }
  }, [activeCardIndex, presentationData.length, dragBuffer]);


  // Constants for desktop, kept as is
  const CARD_WIDTH_SELECTED = 820;
  const CARD_HEIGHT_SELECTED = 460;
  const CARD_WIDTH_SIDE = 670;
  const CARD_HEIGHT_SIDE = 377;
  const VISIBLE_GAP_BETWEEN_CARDS = 24;
  const VERTICAL_ALIGN_OFFSET = (CARD_HEIGHT_SELECTED - CARD_HEIGHT_SIDE) / 2;
  const TOTAL_STAGE_WIDTH =
    CARD_WIDTH_SELECTED + 2 * VISIBLE_GAP_BETWEEN_CARDS + 2 * CARD_WIDTH_SIDE;

  // Calculates the target X position for the mobile carousel to center the active card
  const getMobileCarouselTargetX = useCallback(() => {
    if (!isMobile || !carouselRef.current || !cardRefs.current[activeCardIndex]) return 0;

    const viewportWidth = window.innerWidth;
    const parentPadding = 16; // px-4 on section
    const visibleViewportContentWidth = viewportWidth - (2 * parentPadding);

    const cardWidth = cardRefs.current[activeCardIndex]?.offsetWidth || 0;
    const gapWidth = 16; // gap-4 (16px)

    let cumulativeWidthBeforeActive = 0;
    for (let i = 0; i < activeCardIndex; i++) {
        const prevCardWidth = cardRefs.current[i]?.offsetWidth || 0;
        cumulativeWidthBeforeActive += prevCardWidth + gapWidth;
    }

    // Center of the active card relative to the start of the draggable container
    const activeCardCenterInContainer = cumulativeWidthBeforeActive + cardWidth / 2;

    // Desired x for motion.div: viewportCenter - activeCardCenterInContainer - parentPaddingLeft
    // This takes into account the left padding of the section container
    const targetX = (visibleViewportContentWidth / 2) - activeCardCenterInContainer;
    
    // Apply constraints to the targetX to prevent over-dragging beyond content limits
    const { left, right } = constraints;
    return Math.max(Math.min(targetX, right), left);

  }, [activeCardIndex, isMobile, constraints, presentationData.length]);


  return (
    <section id="projetos" className="py-16 bg-[#EAF3F3] flex flex-col items-center overflow-hidden">
      {/* Título foi mantido diretamente sem animação RevealOnScroll */}
      <h2
        className="text-black mb-12 mt-8 text-center"
        style={{ fontFamily: "DM Sans", fontSize: isMobile ? "42px" : "86px", marginTop: 52 }}
      >
        Nossos Projetos
      </h2>

      {/* Carrossel de Cards foi mantido diretamente sem animação RevealOnScroll */}
      {isMobile ? (
        // ----- MOBILE CARROSSEL COM FRAMER MOTION PARA DRAG E SNAP -----
        <div ref={carouselRef} className="w-full overflow-hidden px-4">
          <motion.div
            className="flex gap-4 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={constraints}
            dragElastic={0.2} // Elasticidade para sensação natural
            style={{ x: dragX }} // Drag control by MotionValue
            animate={{ x: getMobileCarouselTargetX() }} // Anima para centralizar o card ativo
            transition={{ type: "spring", stiffness: 300, damping: 30 }} // Animação suave para snap
            onDragEnd={handleDragEnd}
          >
            {presentationData.map((card, index) => (
              <motion.div
                key={card.id}
                ref={(el) => { cardRefs.current[index] = el; }} // Atribuir ref para cada card
                // Ajustes para mobile: w-[90vw] para largura e h-[580px] para altura fixa vertical
                className="flex-shrink-0 w-[90vw] h-[580px] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col cursor-pointer"
                animate={{
                  scale: index === activeCardIndex ? 1 : 0.95,
                  opacity: index === activeCardIndex ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  // Ajustado h-[45%] para a imagem para mais verticalidade
                  className="w-full h-[45%] bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="bg-black text-white p-4 flex flex-col justify-between h-[55%]"> {/* h-[55%] para o conteúdo de texto */}
                  <div>
                    <h3 className="text-lg font-bold line-clamp-2">{card.title}</h3>
                    <p className="mt-1 text-sm line-clamp-4">{card.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {card.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    {card.githubUrl && (
                      <a
                        href={card.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-gray-700/80 rounded-md text-xs hover:bg-gray-600 transition-colors"
                      >
                        <Github size={16} />
                        <span>Código</span>
                      </a>
                    )}
                    {card.liveUrl && (
                      <a
                        href={card.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-blue-600/90 rounded-md text-xs hover:bg-blue-500 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Ver ao Vivo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : (
        // DESKTOP (mantido igual, pois funciona)
        <div
          className="relative"
          style={{
            height: `${CARD_HEIGHT_SELECTED}px`,
            width: "100vw",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="absolute"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              width: `${TOTAL_STAGE_WIDTH}px`,
              height: "100%",
            }}
          >
            {presentationData.map((card, index) => {
              const isActive = index === activeCardIndex;
              let cardAnimateProps: any = {};
              let opacity = 0;
              let zIndex = 10;
              let cursor = "default";

              const visibleLeftIndex = activeCardIndex - 1;
              const visibleRightIndex = activeCardIndex + 1;
              const SLOT_LEFT_POS = 0;
              const SLOT_CENTRAL_POS =
                CARD_WIDTH_SIDE + VISIBLE_GAP_BETWEEN_CARDS;
              const SLOT_RIGHT_POS =
                SLOT_CENTRAL_POS + CARD_WIDTH_SELECTED + VISIBLE_GAP_BETWEEN_CARDS;
              const OFFSCREEN_LEFT_DEFAULT = -CARD_WIDTH_SELECTED * 1.5;
              const OFFSCREEN_RIGHT_DEFAULT =
                TOTAL_STAGE_WIDTH + CARD_WIDTH_SELECTED * 0.5;

              if (isActive) {
                cardAnimateProps = {
                  left: `${SLOT_CENTRAL_POS}px`,
                  top: "0px",
                  width: `${CARD_WIDTH_SELECTED}px`,
                  height: `${CARD_HEIGHT_SELECTED}px`,
                };
                opacity = 1;
                zIndex = 20;
              } else if (index === visibleLeftIndex) {
                cardAnimateProps = {
                  left: `${SLOT_LEFT_POS}px`,
                  top: `${VERTICAL_ALIGN_OFFSET}px`,
                  width: `${CARD_WIDTH_SIDE}px`,
                  height: `${CARD_HEIGHT_SIDE}px`,
                };
                opacity = 1;
                zIndex = 15;
                cursor = "pointer";
              } else if (index === visibleRightIndex) {
                cardAnimateProps = {
                  left: `${SLOT_RIGHT_POS}px`,
                  top: `${VERTICAL_ALIGN_OFFSET}px`,
                  width: `${CARD_WIDTH_SIDE}px`,
                  height: `${CARD_HEIGHT_SIDE}px`,
                };
                opacity = 1;
                zIndex = 15;
                cursor = "pointer";
              } else {
                const targetLeftPos =
                  index < activeCardIndex
                    ? OFFSCREEN_LEFT_DEFAULT
                    : OFFSCREEN_RIGHT_DEFAULT;
                cardAnimateProps = {
                  left: `${targetLeftPos}px`,
                  top: `${VERTICAL_ALIGN_OFFSET}px`,
                  width: `${CARD_WIDTH_SIDE}px`,
                  height: `${CARD_HEIGHT_SIDE}px`,
                };
                opacity = 0;
                zIndex = 5;
              }

              return (
                <motion.div
                  key={card.id}
                  onClick={() => setActiveCardIndex(index)}
                  className="absolute rounded-lg shadow-xl overflow-hidden"
                  animate={{ ...cardAnimateProps, opacity, zIndex }}
                  style={{ cursor }}
                  transition={{ type: "spring", stiffness: 60, damping: 15, mass: 1.2 }}
                  whileHover={!isActive ? { scale: 1.05, y: VERTICAL_ALIGN_OFFSET - 10 } : {}}
                >
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
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
                          <motion.h3 variants={contentItemVariants} className="text-4xl font-bold">
                            {card.title}
                          </motion.h3>
                          <motion.p variants={contentItemVariants} className="mt-2 text-base text-gray-200">
                            {card.description}
                          </motion.p>
                          <motion.div variants={contentItemVariants} className="flex flex-wrap gap-2 mt-4">
                            {card.tools.map((tool) => (
                              <span
                                key={tool}
                                className="text-xs font-medium bg-white/20 text-white px-2 py-1 rounded-full"
                              >
                                {tool}
                              </span>
                            ))}
                          </motion.div>
                          <motion.div variants={contentItemVariants} className="flex items-center gap-4 mt-6">
                            {card.githubUrl && (
                              <a
                                href={card.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-gray-700/80 rounded-md hover:bg-gray-600"
                              >
                                <Github size={18} />
                                <span>Código</span>
                              </a>
                            )}
                            {card.liveUrl && (
                              <a
                                href={card.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600/90 rounded-md hover:bg-blue-500"
                              >
                                <ExternalLink size={18} />
                                <span>Ver ao Vivo</span>
                              </a>
                            )}
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
      )}
    </section>
  );
};

export default ColoredCardsSection;
