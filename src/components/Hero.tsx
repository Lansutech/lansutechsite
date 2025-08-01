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
        duration: 0.8, // Duração da animação
        ease: "easeOut", // Efeito de easing
        delay: 0.3, // Um pequeno atraso antes de começar a animação
      },
    },
  };

  return (
    <section className="py-8" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        
          <motion.h1
            className="text-gray-900"
            style={{ justifyContent:'center', alignItems:'center', display: 'flex', marginTop: -65 }}
            variants={titleAnimation}
            initial="hidden"
            animate="visible" // Anima assim que o componente é montado
          >
            <h1 style={{ fontFamily: 'DM Sans', fontSize: '86px', color: 'black' }}>Sobre nós</h1>
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;