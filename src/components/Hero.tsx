import React from 'react';
import { motion, Variants } from 'framer-motion';

const Hero = () => {
  // Variantes para a animação do título (fade-in e rise-up)
  const titleAnimation: Variants = {
    hidden: { opacity: 0, y: 30 }, // Começa invisível e 30px abaixo
    visible: {
      opacity: 1, // Torna-se visível
      y: 0,       // Sobe para a posição original
      transition: { // 'transition' é uma propriedade direta de 'visible'
        type: "spring" as const, // AJUSTADO: Usando transição "spring" para maior suavidade e para evitar erros de tipagem
        stiffness: 100, // Rigidez da mola para controle da velocidade
        damping: 20,    // Amortecimento para controle da oscilação
        delay: 0.3, // Um pequeno atraso antes de começar a animação
      },
    },
  };

  return (
    <section className="py-8" style={{ backgroundColor: '#EAF3F3' }}>
      {/* AJUSTADO: Corrigido o typo 'max-w-7xla' para 'max-w-7xl' */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        
          <motion.h1
            // AJUSTADO: Removido 'flex items-center justify-center' pois o pai já centraliza o texto
            // AJUSTADO: 'font-regular' alterado para 'font-normal' (convenção Tailwind)
            style={{ fontFamily: 'DM Sans' }} // Mantendo o font-family
            className="text-4xl md:text-6xl lg:text-[86px]
                       text-black font-normal tracking-tight
                       mt-0 md:mt-[-65px]"
            variants={titleAnimation}
            initial="hidden"
            animate="visible"
          >
            Sobre nós
          </motion.h1>

        </div>
      </div>
    </section>
  );
};

export default Hero;
