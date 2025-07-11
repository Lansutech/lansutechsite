// src/components/ColoredCardsSection.tsx

import React, { useState } from 'react';

const presentationData = [
  { id: 0, color: '#B85450', title: 'Projeto Alpha', description: 'Uma breve descrição sobre o Projeto Alpha.' },
  { id: 1, color: '#D4D4D4', title: 'Projeto Beta', description: 'Uma breve descrição sobre o Projeto Beta.' },
  { id: 2, color: '#6FAFB0', title: 'Projeto Gama', description: 'Uma breve descrição sobre o Projeto Gama.' },
  { id: 3, color: '#FFD700', title: 'Projeto Delta', description: 'Uma breve descrição sobre o Projeto Delta.' },
  { id: 4, color: '#8A2BE2', title: 'Projeto Epsilon', description: 'Uma breve descrição sobre o Projeto Epsilon.' },
];

const ColoredCardsSection = () => {
  const initialActiveIndex = Math.floor(presentationData.length / 2);
  const [activeCardIndex, setActiveCardIndex] = useState(initialActiveIndex);

  // Dimensões
  const ORIGINAL_CARD_WIDTH_SELECTED = 863;
  const ORIGINAL_CARD_HEIGHT_SELECTED = 485;
  const ORIGINAL_CARD_WIDTH_SIDE = 706;
  const ORIGINAL_CARD_HEIGHT_SIDE = 397;
  const REDUCTION_FACTOR = 0.95;
  const CARD_WIDTH_SELECTED = ORIGINAL_CARD_WIDTH_SELECTED * REDUCTION_FACTOR;
  const CARD_HEIGHT_SELECTED = ORIGINAL_CARD_HEIGHT_SELECTED * REDUCTION_FACTOR;
  const CARD_WIDTH_SIDE = ORIGINAL_CARD_WIDTH_SIDE * REDUCTION_FACTOR;
  const CARD_HEIGHT_SIDE = ORIGINAL_CARD_HEIGHT_SIDE * REDUCTION_FACTOR;
  const VISIBLE_GAP_BETWEEN_CARDS = 24 * REDUCTION_FACTOR;
  const VERTICAL_ALIGN_OFFSET = (CARD_HEIGHT_SELECTED - CARD_HEIGHT_SIDE) / 2;
  const TOTAL_CARDS_PALCO_WIDTH = CARD_WIDTH_SELECTED + (2 * VISIBLE_GAP_BETWEEN_CARDS) + (2 * CARD_WIDTH_SIDE);

  const handleClickCard = (clickedIndex) => {
    if (clickedIndex === activeCardIndex) {
      return;
    }
    
    if (clickedIndex === activeCardIndex - 1 || clickedIndex === activeCardIndex + 1) {
        if (clickedIndex >= 0 && clickedIndex < presentationData.length) {
            setActiveCardIndex(clickedIndex);
        }
    }
  };

  return (
    // Alterado: flex-direction: column e align-items: center
    <section className="py-16 bg-[#EAF3F3] flex flex-col items-center justify-start overflow-hidden">
      
      {/* Título movido para cá, diretamente abaixo da section */}
      <h2 className="text-4xl font-extrabold text-[#000000] mb-12 mt-8" style={{fontFamily: 'DM Sans' , fontSize: 64,marginTop: 55}}>
        Nossos Projetos
      </h2>

      {/* Este div agora contém APENAS os cards */}
      <div className="relative" style={{
          // A altura deste div pode ser mais controlada agora, talvez não precise do +150
          height: `${CARD_HEIGHT_SELECTED}px`, // Ajustado para a altura do card selecionado
          width: '100%', // Continua a ocupar toda a largura para centralizar o palco dos cards
          display: 'flex',
          flexDirection: 'column', // Mantido para centralizar o palco horizontalmente (se o palco for menor que 100%)
          justifyContent: 'flex-start', // Mantido, mas não tão relevante agora
          alignItems: 'center', // Mantido para centralizar o palco horizontalmente
      }}>

        {/* Palco dos cards (container dos cards individuais) */}
        <div className="absolute" style={{
            left: '50%',
            transform: 'translateX(-50%)',
            width: `${TOTAL_CARDS_PALCO_WIDTH}px`,
            height: `${CARD_HEIGHT_SELECTED}px`,
            // DEBUG: backgroundColor: 'rgba(0, 255, 0, 0.1)',
            // DEBUG: border: '2px dashed purple',
        }}>
          {presentationData.map((card, index) => {
            let cardStyle = {};
            let opacity = 0;
            let zIndex = 10;
            let cursor = 'default';

            const visibleLeftIndex = activeCardIndex - 1;
            const visibleRightIndex = activeCardIndex + 1;

            const SLOT_LEFT_POS = 0;
            const SLOT_CENTRAL_POS = CARD_WIDTH_SIDE + VISIBLE_GAP_BETWEEN_CARDS;
            const SLOT_RIGHT_POS = CARD_WIDTH_SIDE + VISIBLE_GAP_BETWEEN_CARDS + CARD_WIDTH_SELECTED + VISIBLE_GAP_BETWEEN_CARDS;

            const OFFSCREEN_LEFT_DEFAULT = -CARD_WIDTH_SELECTED * 1.5; 
            const OFFSCREEN_RIGHT_DEFAULT = TOTAL_CARDS_PALCO_WIDTH + CARD_WIDTH_SELECTED * 0.5; 

            if (index === activeCardIndex) {
                cardStyle = {
                    left: `${SLOT_CENTRAL_POS}px`,
                    top: '0px',
                    width: `${CARD_WIDTH_SELECTED}px`,
                    height: `${CARD_HEIGHT_SELECTED}px`,
                };
                opacity = 1;
                zIndex = 20;
                cursor = 'default';
            } else if (index === visibleLeftIndex && visibleLeftIndex >= 0) {
                cardStyle = {
                    left: `${SLOT_LEFT_POS}px`,
                    top: `${VERTICAL_ALIGN_OFFSET}px`,
                    width: `${CARD_WIDTH_SIDE}px`,
                    height: `${CARD_HEIGHT_SIDE}px`,
                };
                opacity = 1;
                zIndex = 15;
                cursor = 'pointer';
            } else if (index === visibleRightIndex && visibleRightIndex < presentationData.length) {
                cardStyle = {
                    left: `${SLOT_RIGHT_POS}px`,
                    top: `${VERTICAL_ALIGN_OFFSET}px`,
                    width: `${CARD_WIDTH_SIDE}px`,
                    height: `${CARD_HEIGHT_SIDE}px`,
                };
                opacity = 1;
                zIndex = 15;
                cursor = 'pointer';
            } else {
                let targetLeftPos;
                if (index < activeCardIndex) { 
                    targetLeftPos = OFFSCREEN_LEFT_DEFAULT;
                } else { 
                    targetLeftPos = OFFSCREEN_RIGHT_DEFAULT;
                }

                cardStyle = {
                    left: `${targetLeftPos}px`,
                    top: `${VERTICAL_ALIGN_OFFSET}px`,
                    width: `${CARD_WIDTH_SIDE}px`,
                    height: `${CARD_HEIGHT_SIDE}px`,
                };
                opacity = 0;
                zIndex = 5;
                cursor = 'default';
            }

            return (
              <div
                key={card.id}
                onClick={() => handleClickCard(index)}
                style={{
                  ...cardStyle,
                  position: 'absolute',
                  backgroundColor: card.color,
                  opacity: opacity,
                  zIndex: zIndex,
                  borderRadius: '10px',
                  boxShadow: '0px 0px 10px 0px rgba(81, 81, 81, 0.4)',
                  transition: 'all 2.0s cubic-bezier(0.65, 0, 0.35, 1)', 
                  cursor: cursor,
                }}
              >
                {/* Conteúdo de texto removido */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ColoredCardsSection;