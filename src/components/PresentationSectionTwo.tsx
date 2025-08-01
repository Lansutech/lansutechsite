// src/components/PresentationSectionTwo.tsx
import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import { FaBullseye, FaHandsHelping, FaUsers, FaChartLine } from 'react-icons/fa';

const PresentationSectionTwo = () => {
  return (
    <section id="sobre-nos" className="bg-[#EAF3F3] pb-0">
      <div
        className="relative mx-[45px] mr-[86px]"
        style={{ maxWidth: 'calc(100vw - 45px - 86px)' }}
      >
        <div className="mb-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_550px] gap-x-4 items-start">

            {/* Coluna texto esquerda */}
            <RevealOnScroll type="slide" direction="right" delay={0.1} duration={0.8} threshold={0.4}>
              <div
                className="text-right"
                style={{ paddingTop: '35px', paddingRight: '19px' }}
              >
                <h2
                  className="text-black font-semibold relative z-10"
                  style={{ fontFamily: 'DM Sans', fontSize: '67.05px', marginBottom: 7 }}
                >
                  Nossa Missão e Valores
                </h2>

                <p
                  className="text-black leading-relaxed relative z-10"
                  style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '18.26px' }}
                >
                  Na Lansutech, desenvolvemos sistemas e soluções digitais com foco em inovação,
                  qualidade e eficiência. Atuamos de forma ética, com total transparência, e buscamos
                  sempre superar as expectativas dos nossos clientes. Nosso compromisso é entregar
                  valor real por meio da tecnologia, promovendo crescimento sustentável para
                  empresas e pessoas.
                </p>
              </div>
            </RevealOnScroll>

            {/* Card estilizado igual “Quem Somos?” */}
            <RevealOnScroll type="slide" direction="left" delay={0.1} duration={0.8} threshold={0.4}>
              <motion.div
                className="rounded-lg overflow-hidden shadow-md cursor-pointer p-10 flex flex-col justify-center border-l-4 border-[#4ADE80]"
                style={{
                  width: '550px',
                  height: '363px',
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
                  damping: 22,
                }}
              >
                {/* Fundo gráfico circular */}
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

                <h3 className="relative z-10 text-4xl font-semibold mb-8 tracking-tight">
                  Valores que nos guiam
                </h3>

                <ul className="relative z-10 space-y-5 text-xl font-medium leading-relaxed">
                  <li className="flex items-center gap-4">
                    <FaBullseye className="text-[#4ADE80] w-6 h-6 flex-shrink-0" />
                    Foco em inovação e qualidade técnica
                  </li>
                  <li className="flex items-center gap-4">
                    <FaHandsHelping className="text-[#4ADE80] w-6 h-6 flex-shrink-0" />
                    Transparência e ética no atendimento
                  </li>
                  <li className="flex items-center gap-4">
                    <FaUsers className="text-[#4ADE80] w-6 h-6 flex-shrink-0" />
                    Trabalho colaborativo e comprometido
                  </li>
                  <li className="flex items-center gap-4">
                    <FaChartLine className="text-[#4ADE80] w-6 h-6 flex-shrink-0" />
                    Melhoria contínua e resultados reais
                  </li>
                </ul>
              </motion.div>
            </RevealOnScroll>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSectionTwo;
