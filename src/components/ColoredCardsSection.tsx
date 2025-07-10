// src/components/ColoredCardsSection.tsx

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from './ui/carousel'; // Verifique se o caminho está correto

// Dados de apresentação (manter 3, mas recomendo testar com 4 ou 5 para um loop mais suave)
const presentationData = [
  { id: 0, color: '#B85450', title: 'Apresentação 0', description: 'Explore a nossa primeira apresentação, detalhando os conceitos iniciais do projeto.' },
  { id: 1, color: '#D4D4D4', title: 'Apresentação 1', description: 'Descubra a segunda fase dos nossos projetos, focada em desenvolvimento e implementação.' },
  { id: 2, color: '#6FAFB0', title: 'Apresentação 2', description: 'Confira a terceira e última parte, com resultados e próximos passos da nossa jornada.' },
  // RECOMENDADO: Adicione um quarto item para o Embla Carousel funcionar melhor com loop
  { id: 3, color: '#8A2BE2', title: 'Apresentação 3', description: 'Um novo projeto para expandir nossos horizontes.' },
];

const ColoredCardsSection = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentSlideTitle, setCurrentSlideTitle] = useState(presentationData[0].title);

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    const newIndex = carouselApi.selectedScrollSnap();
    setSelectedIndex(newIndex);
    setCurrentSlideTitle(presentationData[newIndex % presentationData.length].title);
    console.log('API Selecionou Index:', newIndex);
  }, []);

  const onInit = useCallback((carouselApi: CarouselApi) => {
    onSelect(carouselApi);
    carouselApi.scrollTo(selectedIndex, true);
    console.log('Embla API ready. Initializing to index:', selectedIndex);
  }, [onSelect, selectedIndex]);

  useEffect(() => {
    if (!api) return;

    api.on('select', onSelect);
    api.on('reInit', onSelect);
    api.on('init', onInit);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
      api.off('init', onInit);
    };
  }, [api, onSelect, onInit]);

  const handleItemClick = (index: number) => {
    if (!api) return;
    console.log('Click detectado no item:', index);
    if (index !== selectedIndex) {
      api.scrollTo(index);
    }
  };

  // Dimensões dos cards que você forneceu para o carrossel
  const CARD_WIDTH_SELECTED = 863;
  const CARD_HEIGHT_SELECTED = 485;
  const CARD_WIDTH_SIDE = 706;
  const CARD_HEIGHT_SIDE = 397;
  const CARD_OPACITY_SIDE = 0.8;
  const CARD_SCALE_SIDE = CARD_WIDTH_SIDE / CARD_WIDTH_SELECTED;

  const HORIZONTAL_SPACING = 150; // Ajuste este valor para controlar o espaçamento visível entre os cards
  const CAROUSEL_ITEM_BASIS = `${CARD_WIDTH_SELECTED + (HORIZONTAL_SPACING * 2)}px`;

  const HALF_SELECTED_WIDTH = CARD_WIDTH_SELECTED / 2;
  const HALF_SIDE_WIDTH_SCALED = (CARD_WIDTH_SIDE * CARD_SCALE_SIDE) / 2;
  const OFFSET_SIDE_X = HALF_SELECTED_WIDTH + HALF_SIDE_WIDTH_SCALED + HORIZONTAL_SPACING;

  return (
    <section className="py-16 bg-[#EAF3F3]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-gray-900 mb-12 text-center"
          style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '67.05px' }}
        >
          Nossos Projetos
        </h2>

        <div className="relative mx-auto" style={{ maxWidth: `${CARD_WIDTH_SELECTED + (HORIZONTAL_SPACING * 2)}px`, height: `${CARD_HEIGHT_SELECTED + 50}px` }}>
          <Carousel
            opts={{
              align: 'center',
              loop: true,
              draggable: true,
              slidesToScroll: 1,
              duration: 600,
            }}
            className="w-full h-full"
            setApi={setApi}
          >
            <CarouselContent className="flex h-full items-center justify-center">
              {presentationData.map((item, index) => {
                const isSelected = index === selectedIndex;
                const totalItems = presentationData.length;

                let effectiveOffset = index - selectedIndex;
                if (Math.abs(effectiveOffset) > totalItems / 2) {
                  effectiveOffset = effectiveOffset > 0 ? effectiveOffset - totalItems : effectiveOffset + totalItems;
                }

                let width = CARD_WIDTH_SELECTED;
                let height = CARD_HEIGHT_SELECTED;
                let opacity = 1;
                let scale = 1;
                let translateX = 0;
                let zIndex = 10;

                if (!isSelected) {
                  width = CARD_WIDTH_SIDE;
                  height = CARD_HEIGHT_SIDE;
                  opacity = CARD_OPACITY_SIDE;
                  scale = CARD_SCALE_SIDE;
                  zIndex = 5;

                  if (effectiveOffset === -1) {
                    translateX = -OFFSET_SIDE_X;
                  } else if (effectiveOffset === 1) {
                    translateX = OFFSET_SIDE_X;
                  } else {
                    opacity = 0;
                    zIndex = 1;
                    scale = 0.7;
                    translateX = effectiveOffset < 0 ? -(CARD_WIDTH_SELECTED + 500) : (CARD_WIDTH_SELECTED + 500);
                  }
                }

                return (
                  <CarouselItem
                    key={item.id}
                    className="flex justify-center items-center cursor-pointer"
                    style={{
                      flexBasis: CAROUSEL_ITEM_BASIS,
                      minWidth: CAROUSEL_ITEM_BASIS,
                      maxWidth: CAROUSEL_ITEM_BASIS,
                    }}
                    onClick={() => handleItemClick(index)}
                  >
                    <motion.div
                      layout
                      className="rounded-xl flex flex-col items-center justify-center text-center p-4 shadow-lg"
                      style={{
                        backgroundColor: item.color,
                        color: isSelected ? 'white' : (item.color === '#D4D4D4' ? 'black' : 'white'),
                        position: 'relative',
                      }}
                      animate={{
                        width: width,
                        height: height,
                        opacity: opacity,
                        scale: scale,
                        x: translateX,
                        zIndex: zIndex,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 25,
                        mass: 1,
                        opacity: { duration: 0.3 },
                        zIndex: { delay: isSelected ? 0 : 0.4 }
                      }}
                    >
                      {/* O conteúdo do card (título/descrição) deve estar aqui SE você quiser dentro do card */}
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Indicador de Título da Apresentação Atual - fora do card */}
        <div className="mt-8 text-center">
          <h3
            className="text-gray-900"
            style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '32px' }}
          >
            {currentSlideTitle}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ColoredCardsSection;