import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// Definições de tipos
interface ProjectData {
  id: number;
  image: string;
  title: string;
  description: string;
  tools: string[];
  githubUrl: string;
  liveUrl: string | null;
}

interface ProjectCardProps {
  card: ProjectData;
  isActive: boolean;
  onClick: () => void;
  // Props de animação para desktop, passadas pelo componente pai
  animate: any;
  style: React.CSSProperties;
  transition: any;
  whileHover?: any;
}

const presentationData: ProjectData[] = [
  {
    id: 0,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    title: "Dashboard Analítico",
    description: "Plataforma de visualização de dados em tempo real para otimização de processos de negócio.",
    tools: ["React", "TypeScript", "D3.js", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
  },
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1555099962-4199c345e541?q=80&w=2070&auto=format&fit=crop",
    title: "E-commerce de Roupas",
    description: "Loja virtual completa com sistema de pagamento integrado e painel administrativo.",
    tools: ["Next.js", "Stripe", "TailwindCSS", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: null,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop",
    title: "Landing Page de App",
    description: "Página de captura e apresentação para um novo aplicativo mobile, focada em conversão.",
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

// Componente isolado e memoizado para o Card, recebe as props de animação
const ProjectCard = React.memo<ProjectCardProps>(({ card, isActive, onClick, ...props }) => {
  return (
    <motion.div
      key={card.id}
      onClick={onClick}
      className="absolute rounded-lg shadow-xl overflow-hidden cursor-pointer"
      {...props}
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
});

const ColoredCardsSection = () => {
  const initialActiveIndex = Math.floor(presentationData.length / 2);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(initialActiveIndex);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Removendo a lógica de drag no mobile, focando em otimização para desktop
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const {
    CARD_WIDTH_SELECTED,
    CARD_HEIGHT_SELECTED,
    CARD_WIDTH_SIDE,
    CARD_HEIGHT_SIDE,
    VISIBLE_GAP_BETWEEN_CARDS,
    VERTICAL_ALIGN_OFFSET,
    TOTAL_STAGE_WIDTH,
  } = useMemo(() => {
    const CARD_WIDTH_SELECTED = 820;
    const CARD_HEIGHT_SELECTED = 460;
    const CARD_WIDTH_SIDE = 670;
    const CARD_HEIGHT_SIDE = 377;
    const VISIBLE_GAP_BETWEEN_CARDS = 24;
    const VERTICAL_ALIGN_OFFSET = (CARD_HEIGHT_SELECTED - CARD_HEIGHT_SIDE) / 2;
    const TOTAL_STAGE_WIDTH = CARD_WIDTH_SELECTED + 2 * VISIBLE_GAP_BETWEEN_CARDS + 2 * CARD_WIDTH_SIDE;
    return {
      CARD_WIDTH_SELECTED,
      CARD_HEIGHT_SELECTED,
      CARD_WIDTH_SIDE,
      CARD_HEIGHT_SIDE,
      VISIBLE_GAP_BETWEEN_CARDS,
      VERTICAL_ALIGN_OFFSET,
      TOTAL_STAGE_WIDTH,
    };
  }, []);

  // Função para calcular as propriedades de animação de cada card
  const getCardProps = useCallback((index: number) => {
    const isActive = index === activeCardIndex;
    let cardAnimateProps: any = {};
    let opacity = 0;
    let zIndex = 10;
    let cursor: React.CSSProperties['cursor'] = "default";

    const visibleLeftIndex = activeCardIndex - 1;
    const visibleRightIndex = activeCardIndex + 1;
    const SLOT_LEFT_POS = 0;
    const SLOT_CENTRAL_POS = CARD_WIDTH_SIDE + VISIBLE_GAP_BETWEEN_CARDS;
    const SLOT_RIGHT_POS = SLOT_CENTRAL_POS + CARD_WIDTH_SELECTED + VISIBLE_GAP_BETWEEN_CARDS;
    const OFFSCREEN_LEFT_DEFAULT = -CARD_WIDTH_SELECTED * 1.5;
    const OFFSCREEN_RIGHT_DEFAULT = TOTAL_STAGE_WIDTH + CARD_WIDTH_SELECTED * 0.5;

    if (isActive) {
      cardAnimateProps = { left: `${SLOT_CENTRAL_POS}px`, top: "0px", width: `${CARD_WIDTH_SELECTED}px`, height: `${CARD_HEIGHT_SELECTED}px` };
      opacity = 1;
      zIndex = 20;
    } else if (index === visibleLeftIndex) {
      cardAnimateProps = { left: `${SLOT_LEFT_POS}px`, top: `${VERTICAL_ALIGN_OFFSET}px`, width: `${CARD_WIDTH_SIDE}px`, height: `${CARD_HEIGHT_SIDE}px` };
      opacity = 1;
      zIndex = 15;
      cursor = "pointer";
    } else if (index === visibleRightIndex) {
      cardAnimateProps = { left: `${SLOT_RIGHT_POS}px`, top: `${VERTICAL_ALIGN_OFFSET}px`, width: `${CARD_WIDTH_SIDE}px`, height: `${CARD_HEIGHT_SIDE}px` };
      opacity = 1;
      zIndex = 15;
      cursor = "pointer";
    } else {
      const targetLeftPos = index < activeCardIndex ? OFFSCREEN_LEFT_DEFAULT : OFFSCREEN_RIGHT_DEFAULT;
      cardAnimateProps = { left: `${targetLeftPos}px`, top: `${VERTICAL_ALIGN_OFFSET}px`, width: `${CARD_WIDTH_SIDE}px`, height: `${CARD_HEIGHT_SIDE}px` };
      opacity = 0;
      zIndex = 5;
    }

    // Retorna um objeto com todas as props de animação
    return {
      animate: { ...cardAnimateProps, opacity, zIndex },
      style: { cursor },
      transition: { type: "spring", stiffness: 60, damping: 15, mass: 1.2 },
      whileHover: !isActive ? { scale: 1.05, y: VERTICAL_ALIGN_OFFSET - 10 } : {},
    };
  }, [activeCardIndex, CARD_WIDTH_SELECTED, CARD_WIDTH_SIDE, CARD_HEIGHT_SELECTED, CARD_HEIGHT_SIDE, VISIBLE_GAP_BETWEEN_CARDS, VERTICAL_ALIGN_OFFSET, TOTAL_STAGE_WIDTH]);

  return (
    <section id="projetos" className="py-16 bg-[#EAF3F3] flex flex-col items-center overflow-hidden">
      <h2
        className="text-black mb-12 mt-8 text-center"
        style={{ fontFamily: "DM Sans", fontSize: isMobile ? "42px" : "86px", marginTop: 52 }}
      >
        Nossos Projetos
      </h2>

      {isMobile ? (
        // Versão para mobile (sem drag, mantendo a responsividade básica)
        <div ref={carouselRef} className="w-full overflow-x-auto px-4">
          <div className="flex gap-4">
            {presentationData.map((card) => (
              <div key={card.id} className="flex-shrink-0 w-[90vw] h-[580px] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col cursor-pointer">
                <div
                  className="w-full h-[45%] bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="bg-black text-white p-4 flex flex-col justify-between h-[55%]">
                  <div>
                    <h3 className="text-lg font-bold line-clamp-2">{card.title}</h3>
                    <p className="mt-1 text-sm line-clamp-4">{card.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {card.tools.map((tool) => (
                        <span key={tool} className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
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
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Versão para desktop
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
              const cardProps = getCardProps(index);
              return (
                <ProjectCard
                  key={card.id}
                  card={card}
                  isActive={isActive}
                  onClick={() => setActiveCardIndex(index)}
                  {...cardProps}
                />
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default ColoredCardsSection;