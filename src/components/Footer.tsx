import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence, Variants, useMotionValue, MotionValue, Transition } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// Definição de tipos para garantir a segurança do TypeScript
interface ServiceData {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  color: string;
  imageUrl: string;
}

interface ServiceCardProps {
  service: ServiceData;
  isActive: boolean;
  onClick: () => void;
  isMobile: boolean;
  cardRef?: (el: HTMLDivElement | null) => void;
  animate: any;
  style?: React.CSSProperties;
  transition: Transition;
}

const services: ServiceData[] = [
  {
    id: 1,
    title: 'Sistemas Empresariais',
    description: 'Soluções personalizadas para otimizar a gestão do seu negócio.',
    longDescription: 'Desenvolvemos sistemas empresariais sob medida que integram e otimizam processos chave da sua operação. Desde gestão de clientes (CRM) até planejamento de recursos (ERP), nossas soluções são desenhadas para aumentar a eficiência, reduzir custos e fornecer insights estratégicos para a tomada de decisão.',
    color: '#34495E',
    imageUrl: 'https://images.unsplash.com/photo-1560461396-ec0ef7bb29dd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Sistemas de Gestão',
    description: 'Controle total sobre suas operações financeiras e administrativas.',
    longDescription: 'Oferecemos sistemas de gestão robustos que simplificam o controle de estoque, finanças, vendas e RH. Nossas plataformas são intuitivas e seguras, garantindo a organização dos seus dados e a automação de tarefas rotineiras, permitindo que você foque no crescimento estratégico da sua empresa.',
    color: '#506C91',
    imageUrl: 'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R2VzdGFvfGVufDB8fDB8fHwy',
  },
  {
    id: 3,
    title: 'Automações de Processos',
    description: 'Elimine tarefas repetitivas e impulsione a produtividade com automação inteligente.',
    longDescription: 'Implementamos automações de processos que transformam a maneira como sua empresa trabalha. Seja na entrada de dados, aprovações, relatórios ou comunicação, identificamos gargalos e aplicamos tecnologias que executam tarefas de forma autônoma, liberando sua equipe para atividades de maior valor.',
    color: '#5BC7C2',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXV0b21hJUMzJUE3JUMzJUEzb3xlbnwwfHwwfHx8Mg%3D%3D',
  },
  {
    id: 4,
    title: 'Web Scraping / Raspagem de Dados',
    description: 'Colete informações valiosas da internet para análises e insights estratégicos.',
    longDescription: 'Realizamos web scraping e raspagem de dados de forma ética e eficiente, coletando informações específicas de websites para análise de mercado, monitoramento de preços, pesquisa de concorrência e muito mais. Entregamos dados estruturados e prontos para serem utilizados na sua estratégia de negócio.',
    color: '#F39C12',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    title: 'Bots de Atendimento',
    description: 'Automatize o suporte ao cliente e melhore a experiência do usuário.',
    longDescription: 'Desenvolvemos bots de atendimento inteligentes que podem responder a perguntas frequentes, guiar usuários, agendar serviços e muito mais. Disponíveis 24/7, nossos bots reduzem o tempo de espera, melhoram a satisfação do cliente e otimizam os recursos da sua equipe de suporte.',
    color: '#BD4A63',
    imageUrl: 'https://images.unsplash.com/photo-1676573408178-a5f280c3a320?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hhdEJvdHxlbnwwfHwwfHx8Mg%3D%3D',
  },
  {
    id: 6,
    title: 'Landing Pages',
    description: 'Crie páginas de alta conversão para suas campanhas de marketing digital.',
    longDescription: 'Criamos landing pages focadas em resultados, projetadas para converter visitantes em leads ou clientes. Com design atraente, mensagens claras e calls-to-action estratégicos, garantimos que suas campanhas de marketing digital alcancem seu potencial máximo de conversão.',
    color: '#0D361F',
    imageUrl: 'https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

// NOVAS VARIANTS para o container de texto e elementos individuais
const textContentContainerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 28,
      mass: 1,
      when: "beforeChildren", // Orquestra a animação dos filhos antes do pai finalizar
      staggerChildren: 0.15, // Atraso entre o título e a descrição
    },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }, // Saída suave para cima
};

const individualTextElementVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }, // Saída suave para cima para cada elemento
};

// Componente separado e memoizado para o Card
const ServiceCard = React.memo<ServiceCardProps>(({ service, isActive, onClick, isMobile, cardRef, animate, style, transition }) => {
  return (
    <motion.div
      ref={cardRef}
      key={service.id}
      onClick={onClick}
      className={`rounded-xl shadow-xl hover:shadow-2xl cursor-pointer relative overflow-hidden group flex-shrink-0 ${isMobile ? "w-[90vw] min-h-[400px] max-h-[calc(100vh-180px)]" : ""}`}
      animate={animate}
      transition={transition}
      style={{ ...style, backgroundColor: service.color }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${service.imageUrl})` }}
      ></div>
      <div
        className="absolute inset-0 rounded-xl opacity-70 group-hover:opacity-80 transition-opacity duration-300"
        style={{ backgroundColor: service.color }}
      ></div>

      <div className="p-6 text-white flex flex-col justify-end h-full relative z-10 overflow-y-auto">
        <AnimatePresence initial={false} mode="wait">
          {isActive && ( // Renderiza o conteúdo do texto apenas quando o card está ativo
            <motion.div
              key={service.id} // Chave para AnimatePresence funcionar corretamente
              variants={textContentContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.h3
                variants={individualTextElementVariants}
                className="font-semibold text-3xl md:text-4xl lg:text-[48px] leading-tight mb-2"
                style={{ fontFamily: 'DM Sans', textShadow: '0 1px 2px rgba(0,0,0,0.7)' }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                variants={individualTextElementVariants}
                className="font-semibold text-base md:text-lg lg:text-[18.26px] leading-relaxed"
                style={{ fontFamily: 'DM Sans', textShadow: '0 1px 2px rgba(0,0,0,0.7)' }}
              >
                {service.longDescription}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
});

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null); // Ref para o container com overflow-hidden
  const draggableContentRef = useRef<HTMLDivElement>(null); // Ref para o conteúdo arrastável dentro do carouselRef
  const dragX: MotionValue<number> = useMotionValue(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const carouselTransition = useMemo(() => ({
    type: "spring",
    stiffness: 150,
    damping: 30,
    mass: 1,
  }) as const, []);

  // UseEffect para detectar mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calcula o alvo X para centralizar o card ativo no carrossel mobile
  const getMobileCarouselTargetX = useCallback(() => {
    if (!isMobile || !carouselRef.current || !draggableContentRef.current || !cardRefs.current[currentIndex]) return 0;

    const currentCard = cardRefs.current[currentIndex];
    if (!currentCard) return 0; // Garantia de que o card existe

    const carouselViewportWidth = carouselRef.current.offsetWidth; // Largura do viewport visível do carrossel
    const gapWidth = 16; // gap-4 no tailwindcss

    let cumulativeWidthBeforeActive = 0;
    // Soma a largura dos cards anteriores + os gaps entre eles
    for (let i = 0; i < currentIndex; i++) {
        const prevCard = cardRefs.current[i];
        if (prevCard) {
            cumulativeWidthBeforeActive += prevCard.offsetWidth;
        }
        cumulativeWidthBeforeActive += gapWidth;
    }

    // Calcula a posição do centro do card ativo em relação ao início do conteúdo arrastável
    const activeCardCenterRelativeToDraggableStart = cumulativeWidthBeforeActive + currentCard.offsetWidth / 2;

    // O alvo X é a posição que centraliza o card ativo no viewport do carrossel
    const targetX = (carouselViewportWidth / 2) - activeCardCenterRelativeToDraggableStart;

    // Calcular os limites reais do arrasto para garantir que o alvo X não ultrapasse
    const draggableContentWidth = draggableContentRef.current.scrollWidth; // Largura total do conteúdo arrastável
    const maxDragLeft = -(draggableContentWidth - carouselViewportWidth); // Limite máximo para arrastar para a esquerda
    
    // Garantir que o targetX esteja dentro dos limites válidos [maxDragLeft, 0]
    return Math.max(Math.min(targetX, 0), maxDragLeft);

  }, [currentIndex, isMobile, services.length]); // Adicionadas dependências importantes

  // Lida com o fim do arrasto para "snap" o carrossel para o card mais próximo ou para o próximo/anterior
  const handleDragEnd = useCallback((_event: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number }; velocity: { x: number } }) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const dragBuffer = 50; // Quantidade de pixels para considerar um "swipe"

    let newIndex = currentIndex;
    if (offset < -dragBuffer || velocity < -200) { // Arrasta para a esquerda (próximo card)
      newIndex = Math.min(currentIndex + 1, services.length - 1);
    } else if (offset > dragBuffer || velocity > 200) { // Arrasta para a direita (card anterior)
      newIndex = Math.max(currentIndex - 1, 0);
    }
    setCurrentIndex(newIndex);
  }, [currentIndex, services.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, services.length - 1));
  }, [services.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, [services.length]);

  const canGoNext = currentIndex < services.length - 1;
  const canGoPrev = currentIndex > 0;

  const {
    CARD_SPACING_DESKTOP,
    LARGE_CARD_WIDTH_DESKTOP,
    SMALL_CARD_WIDTH_DESKTOP,
    CARD_HEIGHT_ACTIVE_DESKTOP,
    CARD_HEIGHT_INACTIVE_DESKTOP,
  } = useMemo(() => ({
    CARD_SPACING_DESKTOP: 32,
    LARGE_CARD_WIDTH_DESKTOP: 580,
    SMALL_CARD_WIDTH_DESKTOP: 360,
    CARD_HEIGHT_ACTIVE_DESKTOP: 360,
    CARD_HEIGHT_INACTIVE_DESKTOP: 360 * 0.8,
  }), []);

  const calculateOffsetDesktop = useCallback(() => {
    let offset = 0;
    for (let i = 0; i < currentIndex; i++) {
      offset += SMALL_CARD_WIDTH_DESKTOP + CARD_SPACING_DESKTOP;
    }
    return offset;
  }, [currentIndex, CARD_SPACING_DESKTOP, SMALL_CARD_WIDTH_DESKTOP]);

  return (
    <section id="servicos" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="mb-8 md:mb-16 text-4xl md:text-6xl lg:text-[86px] text-black" style={{ fontFamily: 'DM Sans' }}>
          Serviços
        </h2>

        {isMobile ? (
          <div ref={carouselRef} className="w-full overflow-hidden"> {/* O container que esconde o overflow */}
            <motion.div
              ref={draggableContentRef} 
              className="flex gap-4 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={carouselRef} 
              dragElastic={0.2}
              style={{ x: dragX }}
              animate={{ x: getMobileCarouselTargetX() }}
              transition={carouselTransition}
              onDragEnd={handleDragEnd}
            >
              {services.map((service, index) => {
                const isActive = index === currentIndex;
                return (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    isActive={isActive}
                    onClick={() => setCurrentIndex(index)}
                    isMobile={true}
                    cardRef={(el) => (cardRefs.current[index] = el)}
                    animate={{ scale: isActive ? 1 : 0.95, opacity: isActive ? 1 : 0.8 }}
                    transition={{ duration: 0.3 } as Transition}
                  />
                );
              })}
            </motion.div>
          </div>
        ) : (
          <div className="flex items-end mb-12 relative overflow-hidden" style={{ height: CARD_HEIGHT_ACTIVE_DESKTOP + 20 }}>
            <motion.div
              className="flex flex-nowrap items-end"
              animate={{ x: -calculateOffsetDesktop() }}
              transition={carouselTransition}
            >
              {services.map((service, index) => {
                const isActive = index === currentIndex;
                return (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    isActive={isActive}
                    onClick={() => setCurrentIndex(index)}
                    isMobile={false}
                    animate={{
                      width: isActive ? LARGE_CARD_WIDTH_DESKTOP : SMALL_CARD_WIDTH_DESKTOP,
                      height: isActive ? CARD_HEIGHT_ACTIVE_DESKTOP : CARD_HEIGHT_INACTIVE_DESKTOP,
                      marginRight: CARD_SPACING_DESKTOP,
                      zIndex: isActive ? 3 : (index > currentIndex ? 2 : 1),
                    }}
                    transition={carouselTransition}
                    style={{ bottom: 0 }}
                  />
                );
              })}
            </motion.div>
          </div>
        )}

        {/* Botões de Navegação */}
        <div className="flex justify-center md:justify-start items-center mt-12 gap-4">
          <button
            onClick={goToPrev}
            disabled={!canGoPrev}
            className={`p-3 rounded-full bg-white shadow-md transition-all duration-300 ${!canGoPrev ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            disabled={!canGoNext}
            className={`p-3 rounded-full bg-white shadow-md transition-all duration-300 ${!canGoNext ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
