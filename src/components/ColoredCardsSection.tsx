import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from './ui/carousel'; // Verifique se o caminho está correto

// Dados para as 3 seções de apresentação (pode personalizar as cores aqui)
const presentationData = [
  { id: 1, color: '#B85450' }, // Cor para o card da esquerda (quando não central)
  { id: 2, color: '#D4D4D4' }, // Cor para o card central
  { id: 3, color: '#6FAFB0' }, // Cor para o card da direita (quando não central)
];

const ColoredCardsSection = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0); // Índice do item central/selecionado

  // Callback para atualizar o índice do item central
  const onSelect = useCallback((carouselApi: CarouselApi) => {
    setSelectedIndex(carouselApi.selectedScrollSnap());
  }, []);

  // Adiciona listeners para atualizar o índice selecionado
  useEffect(() => {
    if (!api) return;

    api.on("select", onSelect);
    api.on("reInit", onSelect);
    onSelect(api); // Define o estado inicial do índice

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  // Função para lidar com o clique em um item do carousel
  const handleItemClick = (clickedItemIndex: number) => {
    if (!api) return;

    const currentCentralIndex = api.selectedScrollSnap();
    const totalSlides = presentationData.length;

    // Calcula os índices do item anterior e próximo, considerando o loop
    const previousIndex = (currentCentralIndex - 1 + totalSlides) % totalSlides;
    const nextIndex = (currentCentralIndex + 1) % totalSlides;

    if (clickedItemIndex === currentCentralIndex) {
      // Clicou no item central, não faz nada (ou adicione uma ação específica se desejar)
      return;
    } else if (clickedItemIndex === previousIndex) {
      // Clicou no item à esquerda (anterior logicamente)
      api.scrollPrev();
    } else if (clickedItemIndex === nextIndex) {
      // Clicou no item à direita (próximo logicamente)
      api.scrollNext();
    } else {
      // Se por algum motivo clicar em um item que não é adjacente, rola diretamente para ele.
      api.scrollTo(clickedItemIndex);
    }
  };

  return (
    <section className="py-16" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-gray-900 mb-8 text-center" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '67.05px' }}>
          Nossos Projetos
        </h2>

        {/* Container do Carousel: Aumentado para dar mais espaço vertical e horizontal */}
        {/* max-w-screen-2xl para preencher mais e height maior para acomodar cards grandes */}
        <div className="relative overflow-hidden mx-auto" style={{ width: 'min(100%, 1800px)', height: '600px' }}>
        {/* Aumentei a altura do container para 600px */}
          <Carousel
            opts={{
              align: 'center',       // Alinha o slide centralizado
              loop: true,            // Permite navegação contínua
              draggable: false,      // Desabilita arrasto com o mouse/touch
              dragFree: false,       // Garante que não há arrasto livre
              slidesToScroll: 1,     // Rola um slide por vez
              duration: 300,         // Duração da animação em milissegundos
            }}
            className="w-full h-full"
            setApi={setApi} // Para obter a API do carousel
          >
            {/* CarouselContent: Define o flex container para os itens */}
            {/* gap-x-10 para um espaçamento maior entre os cards */}
            {/* touch-action-pan-y para desabilitar arrasto nativo do navegador */}
            <CarouselContent className="h-full flex items-center gap-x-10 touch-action-pan-y">
              {presentationData.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  // Voltamos para basis-1/3. Com 100% de width no motion.div,
                  // e um container grande, a escala fará o trabalho de destaque.
                  className="basis-1/3 flex justify-center items-center"
                  onClick={() => handleItemClick(index)} // Adiciona o manipulador de clique
                >
                  <motion.div
                    className="rounded-lg h-full cursor-pointer overflow-hidden flex flex-col justify-center items-center text-white text-center p-6"
                    style={{
                      width: '100%', // Ocupa 100% da largura do seu CarouselItem (basis-1/3)
                      height: '500px', // Altura fixa do card, bem maior agora
                      backgroundColor: item.color,
                      borderRadius: '10px',
                    }}
                    // Animação de escala e opacidade para o card central (em destaque)
                    animate={{
                      // Aumentamos a escala para um destaque bem pronunciado
                      scale: index === selectedIndex ? 1.25 : 0.8, // Card central bem maior, laterais menores
                      opacity: index === selectedIndex ? 1 : 0.5,  // Card central opaco, laterais mais transparentes
                    }}
                    transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
                  >
                    {/* Conteúdo do card. Mantenho vazio conforme solicitado. */}
                    <div className="p-4">
                      {/* <h3 className="text-3xl font-bold mb-4">Título do Card {item.id}</h3> */}
                      {/* <p className="text-lg">Descrição breve do projeto ou apresentação.</p> */}
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* As setas de navegação (CarouselPrevious/Next) não são renderizadas aqui. */}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ColoredCardsSection;