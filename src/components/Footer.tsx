import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, Variants, useMotionValue } from "framer-motion";
import { Github, ExternalLink } from "lucide-react"; // Mantido para compatibilidade, embora não usado diretamente neste componente.

// O componente RevealOnScroll foi completamente removido daqui,
// pois o objetivo é otimizar a performance removendo essa funcionalidade.

const services = [
  {
    id: 1,
    title: 'Sistemas Empresariais',
    description: 'Soluções personalizadas para otimizar a gestão do seu negócio.',
    longDescription: 'Desenvolvemos sistemas empresariais sob medida que integram e otimizam processos chave da sua operação. Desde gestão de clientes (CRM) até planejamento de recursos (ERP), nossas soluções são desenhadas para aumentar a eficiência, reduzir custos e fornecer insights estratégicos para a tomada de decisão.',
    color: '#34495E', // Um tom de azul escuro
    imageUrl: 'https://images.unsplash.com/photo-1560461396-ec0ef7bb29dd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Imagem de escritório/negócios
  },
  {
    id: 2,
    title: 'Sistemas de Gestão',
    description: 'Controle total sobre suas operações financeiras e administrativas.',
    longDescription: 'Oferecemos sistemas de gestão robustos que simplificam o controle de estoque, finanças, vendas e RH. Nossas plataformas são intuitivas e seguras, garantindo a organização dos seus dados e a automação de tarefas rotineiras, permitindo que você foque no crescimento estratégico da sua empresa.',
    color: '#506C91', // Um tom de cinza escuro
    imageUrl: 'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R2VzdGFvfGVufDB8fDB8fHwy', // Imagem de gráficos/dados
  },
  {
    id: 3,
    title: 'Automações de Processos',
    description: 'Elimine tarefas repetitivas e impulsione a produtividade com automação inteligente.',
    longDescription: 'Implementamos automações de processos que transformam a maneira como sua empresa trabalha. Seja na entrada de dados, aprovações, relatórios ou comunicação, identificamos gargalos e aplicamos tecnologias que executam tarefas de forma autônoma, liberando sua equipe para atividades de maior valor.',
    color: '#5BC7C2', // Um tom de verde-água
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXV0b21hJUMzJUE3JUMzJUEzb3xlbnwwfHwwfHx8Mg%3D%3D', // Imagem de engrenagens/fluxo
  },
  {
    id: 4,
    title: 'Web Scraping / Raspagem de Dados',
    description: 'Colete informações valiosas da internet para análises e insights estratégicos.',
    longDescription: 'Realizamos web scraping e raspagem de dados de forma ética e eficiente, coletando informações específicas de websites para análise de mercado, monitoramento de preços, pesquisa de concorrência e muito mais. Entregamos dados estruturados e prontos para serem utilizados na sua estratégia de negócio.',
    color: '#F39C12', // Um tom de laranja
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Imagem de código/pesquisa
  },
  {
    id: 5,
    title: 'Bots de Atendimento',
    description: 'Automatize o suporte ao cliente e melhore a experiência do usuário.',
    longDescription: 'Desenvolvemos bots de atendimento inteligentes que podem responder a perguntas frequentes, guiar usuários, agendar serviços e muito mais. Disponíveis 24/7, nossos bots reduzem o tempo de espera, melhoram a satisfação do cliente e otimizam os recursos da sua equipe de suporte.',
    color: '#BD4A63', // Um tom de roxo
    imageUrl: 'https://images.unsplash.com/photo-1676573408178-a5f280c3a320?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hhdEJvdHxlbnwwfHwwfHx8Mg%3D%3D', // Imagem de robô/atendimento
  },
  {
    id: 6,
    title: 'Landing Pages',
    description: 'Crie páginas de alta conversão para suas campanhas de marketing digital.',
    longDescription: 'Criamos landing pages focadas em resultados, projetadas para converter visitantes em leads ou clientes. Com design atraente, mensagens claras e calls-to-action estratégicos, garantimos que suas campanhas de marketing digital alcancem seu potencial máximo de conversão.',
    color: '#0D361F', // Um tom de verde brilhante
    imageUrl: 'https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Imagem de tela de site/marketing
  },
];

// Constantes para desktop
const CARD_SPACING_DESKTOP = 32; // Espaçamento entre os cards
const LARGE_CARD_WIDTH_DESKTOP = 580; // Largura do card ativo
const SMALL_CARD_WIDTH_DESKTOP = 360; // Largura dos cards inativos
const CARD_HEIGHT_ACTIVE_DESKTOP = 360; // Altura do card ativo
const CARD_HEIGHT_INACTIVE_DESKTOP = CARD_HEIGHT_ACTIVE_DESKTOP * 0.8; // Altura dos cards inativos

// ALTERADO: Transição de carrossel mais suave com tipo "spring"
const carouselTransition = {
  type: "spring", // Alterado de "tween" para "spring"
  stiffness: 150, // Menor rigidez para um movimento mais "solto"
  damping: 30,    // Amortecimento para evitar oscilações excessivas
  mass: 1,        // Massa padrão
} as const;


const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null); // Ref para o container do carrossel
  const dragX = useMotionValue(0); // MotionValue para controlar o arrasto no mobile
  const dragBuffer = 50; // Buffer em pixels para o snap no mobile

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
    if (isMobile && carouselRef.current && services.length > 0) {
      // Precisamos garantir que os refs dos cards estejam populados antes de calcular as larguras
      const containerWidth = carouselRef.current.offsetWidth;
      const gapWidth = 16; // gap-4 no tailwindcss
      
      let totalContentWidth = 0;
      cardRefs.current.forEach((cardEl, index) => {
        if (cardEl) {
          totalContentWidth += cardEl.offsetWidth + gapWidth;
        }
      });
      // Remove o último gap, já que não há card depois dele
      if (totalContentWidth > 0) {
        totalContentWidth -= gapWidth; 
      }

      // O padding horizontal de 16px (px-4) no container pai afeta o espaço visível
      const visibleViewportContentWidth = window.innerWidth - (2 * 16); 

      // Se o conteúdo total for menor que a viewport visível, não há necessidade de arrastar
      if (totalContentWidth <= visibleViewportContentWidth) {
        setConstraints({ left: 0, right: 0 });
      } else {
        const maxDragLeft = -(totalContentWidth - visibleViewportContentWidth);
        setConstraints({ left: maxDragLeft, right: 0 });
      }
    } else if (!isMobile) {
      // Reset constraints for desktop if not mobile
      setConstraints({ left: 0, right: 0 });
    }
  }, [isMobile, services.length, carouselRef.current, cardRefs.current]);


  // Calcula o offset (posição X) para que o card ativo fique alinhado à esquerda no desktop
  const calculateOffsetDesktop = useCallback(() => {
    let offset = 0;
    // Soma a largura de todos os cards ANTERIORES ao currentIndex
    for (let i = 0; i < currentIndex; i++) {
      offset += SMALL_CARD_WIDTH_DESKTOP + CARD_SPACING_DESKTOP;
    }
    return offset;
  }, [currentIndex]);

  // Calcula o target X para o carrossel mobile para centralizar o card ativo
  const getMobileCarouselTargetX = useCallback(() => {
    if (!isMobile || !carouselRef.current || !cardRefs.current[currentIndex]) return 0;

    const viewportWidth = window.innerWidth;
    const parentPadding = 16; // px-4
    const visibleViewportContentWidth = viewportWidth - (2 * parentPadding);

    const cardWidth = cardRefs.current[currentIndex]?.offsetWidth || 0;
    const gapWidth = 16; // gap-4

    let cumulativeWidthBeforeActive = 0;
    for (let i = 0; i < currentIndex; i++) {
        const prevCardWidth = cardRefs.current[i]?.offsetWidth || 0;
        cumulativeWidthBeforeActive += prevCardWidth + gapWidth;
    }

    // Centro do card ativo relativo ao início do container arrastável (excluindo padding do pai)
    const activeCardCenterRelativeToDraggableContainerStart = cumulativeWidthBeforeActive + (cardWidth / 2);

    // Posição X desejada para o container arrastável: centralizar o card ativo na área visível
    const targetX = (visibleViewportContentWidth / 2) - activeCardCenterRelativeToDraggableContainerStart;
    
    // Aplica as constraints para garantir que não arraste para fora dos limites
    const { left, right } = constraints;
    return Math.max(Math.min(targetX, right), left);

  }, [currentIndex, isMobile, constraints, services.length]);


  // Função para snap ao soltar drag no mobile
  const handleDragEnd = useCallback((_event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    
    if (carouselRef.current && cardRefs.current[currentIndex]) {
      const cardWidth = cardRefs.current[currentIndex]?.offsetWidth || 0;
      const snapThreshold = cardWidth * 0.4; // 40% da largura do card para snap
      
      let newIndex = currentIndex;

      if (offset < -snapThreshold || velocity < -200) { // Arrasta para a esquerda (próximo card)
        newIndex = Math.min(currentIndex + 1, services.length - 1);
      } else if (offset > snapThreshold || velocity > 200) { // Arrasta para a direita (card anterior)
        newIndex = Math.max(currentIndex - 1, 0);
      }
      
      setCurrentIndex(newIndex);
    }
  }, [currentIndex, services.length, dragBuffer]);


  // Função para ir para o próximo card (usada pelos botões de navegação)
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, services.length - 1));
  }, [services.length]);

  // Função para ir para o card anterior (usada pelos botões de navegação)
  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Determina se os botões de navegação devem estar desabilitados
  const canGoNext = currentIndex < services.length - 1;
  const canGoPrev = currentIndex > 0;


  return (
    <section id="servicos" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-[1600px] mx-auto">
        {/* TÍTULO RESPONSIVO */}
        <h2 className="mb-8 md:mb-16 text-4xl md:text-6xl lg:text-[86px] text-black" style={{ fontFamily: 'DM Sans' }}>
          Serviços
        </h2>

        {/* Container que gerencia a rolagem horizontal para os cards */}
        {isMobile ? (
          // ----- MOBILE CARROSSEL COM FRAMER MOTION PARA DRAG E SNAP -----
          <div ref={carouselRef} className="w-full overflow-hidden"> {/* Removido px-4 aqui, já está no section */}
            <motion.div
              className="flex gap-4 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={constraints}
              dragElastic={0.2} // Elasticidade para sensação natural
              style={{ x: dragX }} // Drag control by MotionValue
              animate={{ x: getMobileCarouselTargetX() }} // Anima para centralizar o card ativo
              // ALTERADO: Transição de carrossel mais suave para mobile
              transition={carouselTransition} 
              onDragEnd={handleDragEnd}
            >
              {services.map((service, index) => {
                const isActive = index === currentIndex;
                const zIndex = isActive ? 3 : (index > currentIndex ? 2 : 1);

                return (
                  <motion.div
                    key={service.id}
                    ref={(el) => { cardRefs.current[index] = el; }} // Atribuir ref para cada card
                    // Ajustes para mobile: w-[90vw] para largura e h-[580px] para altura fixa vertical
                    className="flex-shrink-0 w-[90vw] h-[580px] bg-white rounded-xl shadow-xl hover:shadow-2xl cursor-pointer relative overflow-hidden group"
                    onClick={() => setCurrentIndex(index)}
                    animate={{
                      scale: isActive ? 1 : 0.95,
                      opacity: isActive ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }} // Transição para escala e opacidade do card
                    style={{ zIndex: zIndex }}
                  >
                    {/* IMAGEM DE FUNDO E OVERLAY */}
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-xl"
                      style={{ backgroundImage: `url(${service.imageUrl})` }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-xl opacity-70 group-hover:opacity-80 transition-opacity duration-300"
                      style={{ backgroundColor: service.color }}
                    ></div>

                    {/* CONTEÚDO DO CARD */}
                    <div className="p-6 text-white flex flex-col justify-end h-full relative z-10">
                      <AnimatePresence initial={false} mode="wait">
                        <motion.div
                          key={`${service.id}-${isActive ? '_active' : '_inactive'}`} // Key para AnimatePresence
                          initial={{ opacity: 0, y: 20 }} // Começa um pouco abaixo
                          animate={{ opacity: 1, y: 0 }} // Desliza para a posição normal
                          exit={{ opacity: 0, y: -20 }} // Sai deslizando para cima
                          // ALTERADO: Transição de conteúdo interno mais suave
                          transition={{ 
                              type: "spring", // Usar transição tipo "mola" (spring) para fluidez
                              stiffness: 180, // Ligeiramente menos rígida
                              damping: 28,    // Ligeiramente mais amortecida
                              mass: 1         // Massa padrão
                          }}
                        >
                          <h3 
                            className="font-semibold text-3xl md:text-4xl lg:text-[48px] leading-tight mb-2" 
                            style={{ fontFamily: 'DM Sans', textShadow: '0 1px 2px rgba(0,0,0,0.7)' }} // Adicionado text-shadow
                          >
                            {service.title}
                          </h3>
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, y: 10 }} // Começa um pouco abaixo do título
                              animate={{ opacity: 1, y: 0 }} // Desliza para a posição normal
                              exit={{ opacity: 0, y: -10 }} // Sai deslizando para cima
                              // ALTERADO: Transição do parágrafo mais suave
                              transition={{ duration: 0.4, delay: 0.15 }} // Duração ligeiramente maior, atraso para efeito cascata
                              className="font-semibold text-base md:text-lg lg:text-[18.26px] leading-relaxed" 
                              style={{ fontFamily: 'DM Sans', textShadow: '0 1px 2px rgba(0,0,0,0.7)' }} // Adicionado text-shadow
                            >
                              {service.longDescription} {/* Exibe a descrição detalhada */}
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
        ) : (
          // ----- DESKTOP (mantido o comportamento original, mas com a nova carouselTransition) -----
          <div className="flex items-end mb-12 relative overflow-hidden" style={{ height: CARD_HEIGHT_ACTIVE_DESKTOP + 20 }}>
            <motion.div
              className="flex flex-nowrap items-end"
              animate={{ x: -calculateOffsetDesktop() }}
              transition={carouselTransition} // Aplicada a nova transição de mola
            >
              {services.map((service, index) => {
                const isActive = index === currentIndex;
                const zIndex = isActive ? 3 : (index > currentIndex ? 2 : 1);

                return (
                  <motion.div
                    key={service.id}
                    className="rounded-xl shadow-xl hover:shadow-2xl cursor-pointer flex-shrink-0 relative overflow-hidden group"
                    onClick={() => setCurrentIndex(index)}
                    animate={{
                      width: isActive ? LARGE_CARD_WIDTH_DESKTOP : SMALL_CARD_WIDTH_DESKTOP,
                      height: isActive ? CARD_HEIGHT_ACTIVE_DESKTOP : CARD_HEIGHT_INACTIVE_DESKTOP,
                      marginRight: CARD_SPACING_DESKTOP,
                      zIndex: zIndex,
                    }}
                    transition={carouselTransition} // Aplicada a nova transição de mola
                    style={{ bottom: 0 }}
                  >
                    {/* IMAGEM DE FUNDO E OVERLAY */}
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-xl"
                      style={{ backgroundImage: `url(${service.imageUrl})` }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-xl opacity-70 group-hover:opacity-80 transition-opacity duration-300"
                      style={{ backgroundColor: service.color }}
                    ></div>

                    {/* CONTEÚDO DO CARD */}
                    <div className="p-6 text-white flex flex-col justify-end h-full relative z-10">
                      <AnimatePresence initial={false} mode="wait">
                        <motion.div
                          key={`${service.id}-${isActive ? '_active' : '_inactive'}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          // ALTERADO: Transição de conteúdo interno mais suave para desktop
                          transition={{ 
                              type: "spring",
                              stiffness: 180,
                              damping: 28,
                              mass: 1
                          }}
                        >
                          <h3 
                            className="font-semibold text-3xl md:text-4xl lg:text-[48px] leading-tight mb-2" 
                            style={{ fontFamily: 'DM Sans', textShadow: '0 1px 2px rgba(0,0,0,0.7)' }}
                          >
                            {service.title}
                          </h3>
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              // ALTERADO: Transição do parágrafo mais suave para desktop
                              transition={{ duration: 0.4, delay: 0.15 }}
                              className="font-semibold text-base md:text-lg lg:text-[18.26px] leading-relaxed" 
                              style={{ fontFamily: 'DM Sans', textShadow: '0 1px 2px rgba(0,0,0,0.7)' }}
                            >
                              {service.longDescription}
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
        )}

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
      </div>
    </section>
  );
};

export default ServicesSection;
