import React, { useState, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import type { TargetAndTransition, Transition } from "framer-motion";
import tooling from "../assets/projetos/tooling.webp";
import { ExternalLink } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";

interface ProjectData {
  id: number;
  image: string;
  title: string;
  description: string;
  liveUrl: string | null;
}

interface ProjectCardProps {
  card: ProjectData;
  isActive: boolean;
  onClick: () => void;
  animate: TargetAndTransition;
  style: React.CSSProperties;
  transition: Transition;
  whileHover?: TargetAndTransition;
}

const presentationData: ProjectData[] = [
  {
    id: 1,
    image: tooling,
    title: "Tooling Equipamentos Óticos",
    description: "Loja de e-commerce com apresentação de produtos e landing page da empresa.",
    liveUrl: "https://www.tooling.com.br/",
  },
  
];

const CARD_WIDTH_SELECTED = 820;
const CARD_HEIGHT_SELECTED = 460;
const CARD_WIDTH_SIDE = 670;
const CARD_HEIGHT_SIDE = 377;
const VISIBLE_GAP_BETWEEN_CARDS = 24;
const VERTICAL_ALIGN_OFFSET = (CARD_HEIGHT_SELECTED - CARD_HEIGHT_SIDE) / 2;
const TOTAL_STAGE_WIDTH = CARD_WIDTH_SELECTED + 2 * VISIBLE_GAP_BETWEEN_CARDS + 2 * CARD_WIDTH_SIDE;
const cardTransition = { type: "spring", stiffness: 80, damping: 18, mass: 1 } as const;

const contentContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const contentItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

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
              <motion.h3 variants={contentItemVariants} className="text-4xl font-semibold font-dm-sans">
                {card.title}
              </motion.h3>
              <motion.p variants={contentItemVariants} className="mt-2 text-base text-gray-200">
                {card.description}
              </motion.p>

              <motion.div variants={contentItemVariants} className="flex items-center gap-4 mt-6">
          
                {card.liveUrl && (
                  <a
                    href={card.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600/90 rounded-[18px] hover:bg-blue-800"
                  >
                    <ExternalLink size={18} />
                    <span>Ver Projeto</span>
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
  const isMobile = useIsMobile();

  const getCardProps = useCallback((index: number) => {
    const isActive = index === activeCardIndex;
    let cardAnimateProps: { left: string; top: string; width: string; height: string };
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

    return {
      animate: { ...cardAnimateProps, opacity, zIndex },
      style: { cursor },
      transition: cardTransition,
      whileHover: !isActive ? { scale: 1.05, y: VERTICAL_ALIGN_OFFSET - 10 } : {},
    };
  }, [activeCardIndex]);

  return (
    <section id="projetos" className="py-16 bg-[#EAF3F3] dark:bg-[#0d1117] transition-colors duration-300 flex flex-col items-center overflow-hidden">
      <h2
        className="text-black dark:text-[#c9d1d9] mb-12 mt-8 text-center"
        style={{ fontFamily: "DM Sans", fontSize: isMobile ? "42px" : "86px", marginTop: 52 }}
      >
        Nossos Projetos
      </h2>

      {isMobile ? (
        <div className="w-full overflow-x-auto px-4">
          <div className="flex gap-4">
            {presentationData.map((card) => (
              <div key={card.id} className="flex-shrink-0 w-[90vw] h-[580px] bg-white dark:bg-[#161b22] dark:border dark:border-[#30363d] rounded-xl shadow-xl overflow-hidden flex flex-col cursor-pointer">
                <div
                  className="w-full h-[45%] bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="bg-black dark:bg-[#0d1117] text-white p-4 flex flex-col justify-between h-[55%]">
                  <div>
                    <h3 className="text-lg font-bold line-clamp-2">{card.title}</h3>
                    <p className="mt-1 text-sm line-clamp-4">{card.description}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
              
                    {card.liveUrl && (
                      <a
                        href={card.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-blue-600/90 rounded-[18px] text-xs hover:bg-blue-800 transition-colors duration-050"
                      >
                        <ExternalLink size={16} />
                        <span>Ver Projeto</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
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
