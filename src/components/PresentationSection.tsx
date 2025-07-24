// src/components/PresentationSectionFive.tsx

import React from 'react';
import { motion, Variants } from 'framer-motion';

const PresentationSectionFive = () => {
  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2, delay: 0.6 }
    }
  };

  const paragraphVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 0.8, 0.25, 1], delay: 0.8 }
    }
  };

  const maskVariants: Variants = {
    hidden: { x: 0, opacity: 1 },
    visible: {
      x: ['0%', '105%'],
      opacity: [1, 0],
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1],
        times: [0, 1]
      }
    }
  };

  return (
    <section className="bg-[#EAF3F3] pb-0">
      <div
        className="relative mx-[45px] mr-[86px]"
        style={{ maxWidth: 'calc(100vw - 45px - 86px)' }}
      >
        <div className="mb-5">
          <div className="grid grid-cols-1 lg:grid-cols-[550px_1fr] gap-x-4 items-start">

            {/* Card animado */}
            <motion.div
              className="rounded-lg overflow-hidden shadow-md cursor-pointer"
              style={{
                width: '550px',
                height: '363px',
                backgroundColor: '#163030',
                borderRadius: '10px'
              }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
              }}
              transition={{
                type: 'spring',
                stiffness: 180,
                damping: 22
              }}
            />

            {/* COLUNA DE TEXTO */}
            <div className="pt-[6px] pl-[19px] relative w-full">
              {/* Máscara animada cobrindo o título */}
              <motion.div
                className="absolute bg-[#353636] h-[80px] rounded-md z-20"
                style={{ top: 0, left: 0, width: '100%', maxWidth: '460px' }}
                variants={maskVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              />

              {/* Título revelado */}
              <motion.h2
                className="text-black font-semibold relative z-10"
                style={{ fontFamily: 'DM Sans', fontSize: '67.05px', marginBottom: 7 }}
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >
                Apresentação
              </motion.h2>

              {/* Subtexto */}
              <motion.p
                className="text-black leading-relaxed"
                style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '18.26px' }}
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >
                Na Lansutech, somos apaixonados por transformar ideias em realidade digital. Somos uma equipe dedicada de especialistas em tecnologia, design e estratégia, comprometidos em criar soluções inovadoras que impulsionam o sucesso de nossos clientes.
                <br /><br />
                Com foco em excelência e abordagem colaborativa, trabalhamos lado a lado para entender necessidades, superar desafios e entregar resultados que fazem a diferença.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSectionFive;
