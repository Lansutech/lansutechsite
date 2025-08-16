import React from 'react';
import { motion, Variants } from 'framer-motion';
// import RevealOnScroll from './RevealOnScroll'; // Removido, pois não é mais necessário
import { FaCheckCircle, FaBolt, FaUsers, FaLightbulb } from 'react-icons/fa';

const PresentationSectionFive = () => {
  // Variantes para a animação do título (fade-in e rise-up) - Mantidas pois são animações diretas do Framer Motion
  const titleAnimation: Variants = {
    hidden: { opacity: 0, y: 30 }, // Começa invisível e 30px abaixo
    visible: {
      opacity: 1, // Torna-se visível
      y: 0,       // Sobe para a posição original
      transition: { // 'transition' é uma propriedade direta de 'visible'
        duration: 0.8, // Duração da animação
        ease: "easeOut", // Efeito de easing
        delay: 0.3, // Um pequeno atraso antes de começar a animação
      },
    },
  };

  return (
    <section className="bg-[#EAF3F3] pb-0">
      <div
        className="relative mx-4 md:mx-[45px] mr-4 md:mr-[86px] my-10"
      >
        <div className="mb-5">
          {/* ALTERADO: Revertido para a definição de grid original para desktops */}
          <div className="grid grid-cols-1 lg:grid-cols-[550px_1fr] gap-8 lg:gap-x-4 items-start">

            {/* Card com texto aprimorado - Removido RevealOnScroll */}
            <motion.div
              // ALTERADO: Removida a altura fixa e a largura para que o grid controle o tamanho
              className="rounded-lg overflow-hidden shadow-md cursor-pointer p-6 md:p-10 flex flex-col justify-center border-l-4 border-[#4ADE80]"
              style={{
                backgroundColor: '#163030',
                borderRadius: '10px',
                color: '#E0F2F1',
                fontFamily: 'DM Sans',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
              }}
              transition={{
                type: 'spring',
                stiffness: 180,
                damping: 22
              }}
            >
              {/* Fundo gráfico decorativo */}
              <div
                style={{
                  position: 'absolute',
                  top: -30,
                  right: -30,
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(74, 222, 128, 0.15)',
                  zIndex: 0,
                }}
              />
              <h3 className="relative z-10 text-2xl md:text-4xl font-semibold mb-4 md:mb-8 tracking-tight">
                Por que escolher a Lansutech?
              </h3>
              <ul className="relative z-10 space-y-3 md:space-y-5 text-sm md:text-xl font-medium leading-relaxed">
                <li className="flex items-center gap-2 md:gap-4">
                  <FaCheckCircle className="text-[#4ADE80] w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  Soluções simples e eficientes
                </li>
                <li className="flex items-center gap-2 md:gap-4">
                  <FaBolt className="text-[#4ADE80] w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  Foco em resultados reais
                </li>
                <li className="flex items-center gap-2 md:gap-4">
                  <FaUsers className="text-[#4ADE80] w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  Time dedicado e colaborativo
                </li>
                <li className="flex items-center gap-2 md:gap-4">
                  <FaLightbulb className="text-[#4ADE80] w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  Tecnologia que facilita o dia a dia
                </li>
              </ul>
            </motion.div>

            {/* Coluna de texto Quem Somos */}
            <div className="pt-4 md:pt-[6px] pl-0 lg:pl-[19px] relative w-full">
              {/* Título "Quem Somos?" - Removido RevealOnScroll */}
              <h2
                className="text-black font-semibold relative z-10 text-4xl lg:text-[67.05px] mb-2 md:mb-7"
                style={{ fontFamily: 'DM Sans' }}
              >
                Quem Somos?
              </h2>

              {/* Parágrafo de texto - Removido RevealOnScroll */}
              <p
                className="text-black leading-relaxed text-sm md:text-[18.26px]"
                style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
              >
                Somos um grupo apaixonado por tecnologia e por resolver problemas de verdade.
                Nosso foco está em criar soluções que funcionem de forma simples, eficiente e que realmente façam diferença no dia a dia de quem usa.

                A gente faz isso porque acredita que boas ideias merecem sair do papel com qualidade. E que, com o time certo, é possível transformar até os projetos mais complexos em algo funcional, bonito e útil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSectionFive;
