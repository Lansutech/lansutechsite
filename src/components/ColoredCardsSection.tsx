import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from './ui/carousel';

const presentationData = [
  { id: 1, color: '#B85450', title: 'Apresentação 1' },
  { id: 2, color: '#D4D4D4', title: 'Apresentação 2' },
  { id: 3, color: '#6FAFB0', title: 'Apresentação 3' },
];

const ColoredCardsSection = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    setSelectedIndex(carouselApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    onSelect(api);
    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api, onSelect]);

  const handleItemClick = (index: number) => {
    if (!api) return;
    api.scrollTo(index);
  };

  return (
    <section className="py-16 bg-[#EAF3F3]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-gray-900 mb-12 text-center"
          style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '67.05px' }}
        >
          Nossos Projetos
        </h2>

        <div className="relative overflow-hidden mx-auto" style={{ height: '520px' }}>
          <Carousel
            opts={{
              align: 'center',
              loop: true,
              draggable: false,
              dragFree: false,
              slidesToScroll: 1,
              duration: 300,
            }}
            className="w-full h-full"
            setApi={setApi}
          >
            <CarouselContent className="flex h-full items-center gap-x-10 justify-center">
              {presentationData.map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <CarouselItem
                    key={item.id}
                    className="flex justify-center items-center w-[30%]"
                    onClick={() => handleItemClick(index)}
                  >
                    <motion.div
                      layout
                      className="rounded-xl cursor-pointer flex flex-col items-center justify-center text-white text-center"
                      style={{
                        backgroundColor: item.color,
                        height: isSelected ? 360 : 260,
                        width: isSelected ? 360 : 240,
                        zIndex: isSelected ? 10 : 1,
                        opacity: isSelected ? 1 : 0.5,
                      }}
                      animate={{
                        scale: isSelected ? 1.1 : 0.9,
                      }}
                      transition={{ type: 'spring', stiffness: 180, damping: 20 }}
                    >
                      <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                      <p className="text-sm text-black">
                        Texto descritivo de exemplo. Você pode ajustar isso por item.
                      </p>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ColoredCardsSection;
