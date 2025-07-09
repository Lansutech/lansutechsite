// src/components/RevealOnScroll.tsx
import React, { ReactNode } from 'react';
import { motion, Variants, Transition } from 'framer-motion';

// --- Tipos para Props do RevealOnScroll ---
type AnimationType = 'fade' | 'slide' | 'zoom';
type SlideDirection = 'up' | 'down' | 'left' | 'right';

interface RevealOnScrollProps {
  children: ReactNode;
  type?: AnimationType;       // Tipo de animação: 'fade', 'slide', 'zoom' (padrão: 'slide')
  direction?: SlideDirection; // Direção do slide (apenas para type='slide', padrão: 'up')
  delay?: number;             // Atraso antes do início da animação deste elemento (padrão: 0)
  duration?: number;          // Duração da animação (padrão: 0.6 segundos)
  once?: boolean;             // Anima apenas uma vez ao entrar na tela (padrão: true)
  threshold?: number;         // Percentual do elemento visível para disparar (0 a 1, padrão: 0.2)
  
  // Props para animações de grupo/stagger (quando este RevealOnScroll for um CONTAINER de outros RevealOnScrolls ou motion.divs)
  staggerDelay?: number;      // Atraso para iniciar a animação dos filhos (padrão: 0)
  staggerChildren?: number;   // Atraso entre cada filho (útil para listas de cards, padrão: 0)
  
  // Para animações completamente customizadas que anulam 'type' e 'direction'
  customAnimation?: Variants;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  type = 'slide',
  direction = 'up',
  delay = 0,
  duration = 0.6, // Duração ligeiramente maior para um efeito mais suave
  once = true,
  threshold = 0.2, // Aumentei o threshold padrão para 20% visível
  staggerDelay = 0,
  staggerChildren = 0,
  customAnimation,
}) => {

  // --- Transição Base ---
  const baseTransition: Transition = {
    duration: duration,
    ease: "easeOut",
    delay: delay,
  };

  // Se houver staggerChildren, a transição do container precisa ser definida
  // para passar o stagger para os filhos.
  // Note: a `delay` aqui é o `staggerDelay` para o container inteiro.
  const containerTransition: Transition = {
    ...baseTransition,
    delay: staggerDelay, // O atraso do container como um todo
    staggerChildren: staggerChildren, // O atraso entre cada filho
  };

  // --- Variantes de Animação ---
  const getVariants = (): Variants => {
    let initialProps: { opacity: number; x?: number; y?: number; scale?: number } = { opacity: 0 };
    let animateProps: { opacity: number; x?: number; y?: number; scale?: number } = { opacity: 1 };

    switch (type) {
      case 'fade':
        // Nada extra para fade, apenas opacity
        break;
      case 'slide':
        if (direction === 'up') initialProps.y = 75;
        else if (direction === 'down') initialProps.y = -75;
        else if (direction === 'left') initialProps.x = -75;
        else if (direction === 'right') initialProps.x = 75;
        animateProps.x = 0;
        animateProps.y = 0;
        break;
      case 'zoom':
        initialProps.scale = 0.8;
        animateProps.scale = 1;
        break;
      default: // Fallback para slide-up
        initialProps.y = 75;
        animateProps.y = 0;
        break;
    }

    return {
      hidden: initialProps,
      // Se houver staggerChildren, a transição deve ser a do container, senão a base
      visible: {
        ...animateProps,
        transition: (staggerChildren > 0 || staggerDelay > 0) ? containerTransition : baseTransition,
      },
    };
  };

  // Escolhe entre a animação customizada ou a gerada
  const finalVariants: Variants = customAnimation || getVariants();

  return (
    <motion.div
      variants={finalVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: once, amount: threshold }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;