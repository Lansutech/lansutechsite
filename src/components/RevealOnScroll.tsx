import React, { ReactNode } from 'react';
import { motion, Variants, Transition } from 'framer-motion';

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;       // Opcional: delay para a animação
  duration?: number;    // Opcional: duração da animação
  once?: boolean;       // Opcional: anima apenas uma vez ao entrar na tela (padrão true)
  threshold?: number;   // Opcional: percentual do elemento visível para disparar (padrão 0.1)
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'; // Direção para slide
  // Adicione uma prop para variantes customizadas, se ainda quiser essa flexibilidade
  customAnimation?: Variants;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  threshold = 0.1, // 10% do elemento visível
  direction = 'up', // Direção padrão para o slide
  customAnimation, // Nova prop para animação customizada
}) => {

  // Definir a transição base que será usada
  const baseTransition: Transition = {
    duration: duration, // Usa a duração da prop
    ease: "easeOut",
    delay: delay,       // Usa o delay da prop
  };

  // Definir as variantes de animação com base na direção
  // Cada variante AGORA JÁ INCLUI A PROPRIEDADE 'transition' no estado 'visible'
  // isso ajuda o TypeScript a inferir o tipo correto
  const getDirectionalVariants = (): Variants => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 75 },
          visible: {
            opacity: 1,
            y: 0,
            transition: baseTransition,
          },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -75 },
          visible: {
            opacity: 1,
            y: 0,
            transition: baseTransition,
          },
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: -75 },
          visible: {
            opacity: 1,
            x: 0,
            transition: baseTransition,
          },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 75 },
          visible: {
            opacity: 1,
            x: 0,
            transition: baseTransition,
          },
        };
      case 'none': // Apenas fade-in
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: baseTransition,
          },
        };
      default: // Padrão 'up' se for algo inesperado
        return {
          hidden: { opacity: 0, y: 75 },
          visible: {
            opacity: 1,
            y: 0,
            transition: baseTransition,
          },
        };
    }
  };

  // Escolhe entre a animação customizada ou a direcional
  const finalVariants: Variants = customAnimation || getDirectionalVariants();

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