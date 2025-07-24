import React from 'react';
import { motion, Variants } from 'framer-motion'; // Importar 'Variants' de framer-motion
// import RevealOnScroll from '../components/RevealOnScroll'; // Não usado neste snippet, mas pode ser reintroduzido se necessário

const Hero = () => {
  // Variantes para a animação do título (fade-in e rise-up)
  // Definindo explicitamente o tipo 'Variants' para ajudar o TypeScript
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
            // Se quiser o título ainda mais para cima, pode ajustar o 'py-8' da section para um valor menor,
            // por exemplo, 'py-4' ou 'pt-4' (apenas padding-top)
            style={{justifyContent:'center',alignItems:'center',display: 'flex',marginTop: -(65)}}
            variants={titleAnimation}
            initial="hidden"
            animate="visible"
          >
            <img src='/imgs/sobrenos.png'></img>
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;