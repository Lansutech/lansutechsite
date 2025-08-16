// src/components/PresentationSectionTwo.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaHandsHelping, FaUsers, FaChartLine } from 'react-icons/fa';

const PresentationSectionTwo = () => {
  return (
    <section id="sobre-nos" className="bg-[#EAF3F3] pb-0">
      <div className="relative mx-auto px-4 md:px-8 lg:pr-0 lg:pl-[35px] max-w-full lg:max-w-none">
        <div className="mb-5">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_550px] gap-8 md:gap-x-32 items-start">

            {/* Coluna texto esquerda */}
            <div className="text-center md:text-right pt-8 md:pt-[35px] pr-0">
              <h2
                className="text-4xl md:text-5xl lg:text-[67.05px] font-semibold relative z-10 mb-4 md:mb-7"
                style={{ fontFamily: 'DM Sans' }}
              >
                Nossa Missão e Valores
              </h2>

              <p
                className="text-base md:text-lg lg:text-[18.26px] text-black leading-relaxed relative z-10"
                style={{ fontFamily: 'DM Sans', fontWeight: 600 }}
              >
                Na Lansutech, desenvolvemos sistemas e soluções digitais com foco em inovação,
                qualidade e eficiência. Atuamos de forma ética, com total transparência, e buscamos
                sempre superar as expectativas dos nossos clientes. Nosso compromisso é entregar
                valor real por meio da tecnologia, promovendo crescimento sustentável para
                empresas e pessoas.
              </p>
            </div>

            {/* Card estilizado */}
            <motion.div
              className="rounded-lg overflow-hidden shadow-md cursor-pointer p-6 md:p-10 flex flex-col justify-center border-l-4 border-[#4ADE80] md:-ml-8
                         w-full max-w-sm mx-auto md:max-w-[550px] md:w-auto
                         min-h-[300px] md:min-h-[363px]"
              style={{
                backgroundColor: '#163030',
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

              <h3 className="relative z-10 text-xl sm:text-2xl md:text-4xl font-semibold mb-4 md:mb-8 tracking-tight text-center">
                Valores que nos guiam
              </h3>

              <ul className="relative z-10 space-y-3 md:space-y-5 text-sm md:text-xl font-medium leading-relaxed px-4">
                <li className="flex items-center gap-2 md:gap-4">
                  <FaBullseye className="text-[#4ADE80] w-4 h-4 md:w-6 md:h-6 flex-shrink-0" />
                  Foco em inovação e qualidade técnica
                </li>
                <li className="flex items-center gap-2 md:gap-4">
                  <FaHandsHelping className="text-[#4ADE80] w-4 h-4 md:w-6 md:h-6 flex-shrink-0" />
                  Transparência e ética no atendimento
                </li>
                <li className="flex items-center gap-2 md:gap-4">
                  <FaUsers className="text-[#4ADE80] w-4 h-4 md:w-6 md:h-6 flex-shrink-0" />
                  Trabalho colaborativo e comprometido
                </li>
                <li className="flex items-center gap-2 md:gap-4">
                  <FaChartLine className="text-[#4ADE80] w-4 h-4 md:w-6 md:h-6 flex-shrink-0" />
                  Melhoria contínua e resultados reais
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSectionTwo;
