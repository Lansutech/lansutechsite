// src/components/ColoredCardsSection.tsx

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from './ui/carousel'; // Ensure this path is correct

// Data for your presentations/slides
const presentationData = [
  { id: 0, color: '#B85450', title: 'Apresentação 0', description: 'Explore a nossa primeira apresentação, detalhando os conceitos iniciais do projeto.' },
  { id: 1, color: '#D4D4D4', title: 'Apresentação 1', description: 'Descubra a segunda fase dos nossos projetos, focada em desenvolvimento e implementação.' },
  { id: 2, color: '#6FAFB0', title: 'Apresentação 2', description: 'Confira a terceira e última parte, com resultados e próximos passos da nossa jornada.' },
  // RECOMMENDED: Add more items for smoother loop behavior with Embla Carousel
  { id: 3, color: '#8A2BE2', title: 'Apresentação 3', description: 'Um novo projeto para expandir nossos horizontes.' },
  // { id: 4, color: '#FFD700', title: 'Apresentação 4', description: 'Mais uma etapa em nossa jornada.' },
];

const ColoredCardsSection = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0); // Start with the first card selected (index 0)
  const [currentSlideTitle, setCurrentSlideTitle] = useState(presentationData[0].title); // To display below carousel

  // Callback for Embla Carousel's 'select' event
  const onSelect = useCallback((carouselApi: CarouselApi) => {
    const newIndex = carouselApi.selectedScrollSnap();
    setSelectedIndex(newIndex);
    // Ensure the title matches the item, considering the loop
    setCurrentSlideTitle(presentationData[newIndex % presentationData.length].title);
    console.log('API Selecionou Index:', newIndex); // Debug
  }, []);

  // Callback for Embla Carousel's 'init' event
  const onInit = useCallback((carouselApi: CarouselApi) => {
    onSelect(carouselApi); // Call onSelect to set initial state
    carouselApi.scrollTo(selectedIndex, true); // Scroll to the initial index instantly
    console.log('Embla API ready. Initializing to index:', selectedIndex); // Debug
  }, [onSelect, selectedIndex]);

  useEffect(() => {
    if (!api) return;

    // Add listeners for Embla Carousel events
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    api.on('init', onInit); // This event fires when Embla Carousel is fully initialized

    return () => {
      // Clean up listeners
      api.off('select', onSelect);
      api.off('reInit', onSelect);
      api.off('init', onInit);
    };
  }, [api, onSelect, onInit]);

  // Handler for clicking on a carousel item
  const handleItemClick = (index: number) => {
    if (!api) return;
    console.log('Click detectado no item:', index); // Debug
    if (index !== selectedIndex) {
      api.scrollTo(index); // Scroll to the clicked item
    }
  };

  // Dimensions for the cards as provided
  const CARD_WIDTH_SELECTED = 863;
  const CARD_HEIGHT_SELECTED = 485;
  const CARD_WIDTH_SIDE = 706;
  const CARD_HEIGHT_SIDE = 397;
  const CARD_OPACITY_SIDE = 0.8;
  const CARD_SCALE_SIDE = CARD_WIDTH_SIDE / CARD_WIDTH_SELECTED; // Approx. 0.818

  // Adjusting CAROUSEL_ITEM_BASIS for better spacing between cards
  // This defines the "slot" width for each Embla slide.
  const HORIZONTAL_SPACING = 150; // Controls the visible gap between the central and side cards
  const CAROUSEL_ITEM_BASIS = `${CARD_WIDTH_SELECTED + (HORIZONTAL_SPACING * 2)}px`;

  // Calculating translateX offset for side cards to achieve desired spacing
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

        {/* Container for the carousel to control its visible width and height */}
        <div className="relative mx-auto" style={{ maxWidth: `${CARD_WIDTH_SELECTED + (HORIZONTAL_SPACING * 2)}px`, height: `${CARD_HEIGHT_SELECTED + 50}px` }}>
          <Carousel
            opts={{
              align: 'center', // Ensures the selected slide is centered in the carousel viewport
              loop: true, // Enables continuous looping navigation
              draggable: true, // Allows dragging the carousel (set to false if only click navigation is desired)
              slidesToScroll: 1, // Scrolls one slide at a time
              duration: 600, // Duration of the Embla slide transition in milliseconds
            }}
            className="w-full h-full"
            setApi={setApi} // Connects the Embla API instance to React state
          >
            <CarouselContent className="flex h-full items-center justify-center">
              {presentationData.map((item, index) => {
                const isSelected = index === selectedIndex;
                const totalItems = presentationData.length;

                // Calculate the effective offset from the selected item, considering loop
                let effectiveOffset = index - selectedIndex;
                if (Math.abs(effectiveOffset) > totalItems / 2) {
                  effectiveOffset = effectiveOffset > 0 ? effectiveOffset - totalItems : effectiveOffset + totalItems;
                }

                // Default values for the selected card
                let width = CARD_WIDTH_SELECTED;
                let height = CARD_HEIGHT_SELECTED;
                let opacity = 1;
                let scale = 1;
                let translateX = 0; // Position relative to the center of its CarouselItem slot
                let zIndex = 10;

                if (!isSelected) {
                  // Values for non-selected cards
                  width = CARD_WIDTH_SIDE;
                  height = CARD_HEIGHT_SIDE;
                  opacity = CARD_OPACITY_SIDE;
                  scale = CARD_SCALE_SIDE;
                  zIndex = 5;

                  if (effectiveOffset === -1) { // Card immediately to the left
                    // Move left from the center of its CarouselItem slot
                    translateX = -OFFSET_SIDE_X;
                  } else if (effectiveOffset === 1) { // Card immediately to the right
                    // Move right from the center of its CarouselItem slot
                    translateX = OFFSET_SIDE_X;
                  } else { // "Hidden" cards (not adjacent to the selected one)
                    opacity = 0; // Make them fully invisible
                    zIndex = 1; // Put them behind other cards
                    scale = 0.7; // Scale down further
                    // Move them far out of view, based on their side
                    translateX = effectiveOffset < 0 ? -(CARD_WIDTH_SELECTED + 500) : (CARD_WIDTH_SELECTED + 500); // Move very far away
                  }
                }

                return (
                  <CarouselItem
                    key={item.id}
                    className="flex justify-center items-center cursor-pointer"
                    style={{
                      flexBasis: CAROUSEL_ITEM_BASIS, // Defines the width of the slot Embla manages
                      minWidth: CAROUSEL_ITEM_BASIS,
                      maxWidth: CAROUSEL_ITEM_BASIS,
                      // outline: '1px dashed orange' // DEBUG VISUAL: Activate to see CarouselItem area
                    }}
                    onClick={() => handleItemClick(index)}
                  >
                    <motion.div
                      layout // Enables automatic layout animations for smooth size transitions
                      className="rounded-xl flex flex-col items-center justify-center text-center p-4 shadow-lg"
                      style={{
                        backgroundColor: item.color,
                        color: isSelected ? 'white' : (item.color === '#D4D4D4' ? 'black' : 'white'),
                        position: 'relative', // Required for zIndex and translateX to work correctly
                        // outline: '1px solid blue', // DEBUG VISUAL: Activate to see motion.div area
                      }}
                      animate={{
                        width: width,
                        height: height,
                        opacity: opacity,
                        scale: scale,
                        x: translateX, // Framer Motion uses 'x' for translateX
                        zIndex: zIndex,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 200, // Spring stiffness (adjust for more or less "bounce")
                        damping: 25,    // Damping (adjust to control overshoot)
                        mass: 1,        // Mass of the object (influences speed)
                        opacity: { duration: 0.3 }, // Faster transition for opacity
                        zIndex: { delay: isSelected ? 0 : 0.4 } // Z-index changes quickly for selected, delays for others
                      }}
                    >
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            {/* Navigation buttons (optional, can be added if desired) */}
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>

        {/* Current Presentation Title Indicator (as seen in Figma prototype) */}
        <div className="mt-8 text-center">
          <h3
            className="text-gray-900"
            style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '32px' }} /* Adjust style to match Figma */
          >
            {currentSlideTitle}
          </h3>
          {/* You can add description or other elements here if needed */}
          {/* <p className="text-gray-600 text-lg">{presentationData[selectedIndex % presentationData.length].description}</p> */}
        </div>
      </div>
    </section>
  );
};

export default ColoredCardsSection;