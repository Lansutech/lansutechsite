import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import { FaCheckCircle, FaBolt, FaUsers, FaLightbulb } from 'react-icons/fa';

const PresentationSectionFive = () => {
  return (
    <section className="bg-[#EAF3F3] pb-0">
      <div
        className="relative mx-[45px] mr-[86px]"
        style={{ maxWidth: 'calc(100vw - 45px - 86px)' }}
      >
        <div className="mb-5">
          <div className="grid grid-cols-1 lg:grid-cols-[550px_1fr] gap-x-4 items-start">

            {/* Card com texto aprimorado */}
            <RevealOnScroll type="slide" direction="up" delay={0.2} duration={0.8} threshold={0.4}>
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
                <h3 className="relative z-10 text-4xl font-semibold mb-8 tracking-tight">
                  Por que escolher a Lansutech?
                </h3>
                <ul className="relative z-10 space-y-5 text-xl font-medium leading-relaxed">
                  <li className="flex items-center gap-4">
                    <FaCheckCircle className="text-[#4ADE80] w-6 h-6 flex-shrink-0" />
                    Soluções simples e eficientes
                  </li>
                  <li className="flex items-center gap-4">
                    <FaBolt className="text-[#4ADE80] w-6 h-6 flex-shrink-0" />
                    Foco em resultados reais
                  </li>
                  <li className="flex items-center gap-4">
                    <FaUsers className="text-[#4ADE80] w-6 h-6 flex-shrink-0" />
                    Time dedicado e colaborativo
                  </li>
                  <li className="flex items-center gap-4">
                    <FaLightbulb className="text-[#4ADE80] w-6 h-6 flex-shrink-0" />
                    Tecnologia que facilita o dia a dia
                  </li>
                </ul>
              </motion.div>
            </RevealOnScroll>

            {/* Coluna de texto Quem Somos */}
            <div className="pt-[6px] pl-[19px] relative w-full">
              <RevealOnScroll type="slide" direction="up" delay={0.4} duration={0.8} threshold={0.4}>
                <h2
                  className="text-black font-semibold relative z-10"
                  style={{ fontFamily: 'DM Sans', fontSize: '67.05px', marginBottom: 7 }}
                >
                  Quem Somos?
                </h2>
              </RevealOnScroll>

              <RevealOnScroll type="slide" direction="up" delay={0.6} duration={0.8} threshold={0.4}>
                <p
                  className="text-black leading-relaxed"
                  style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '18.26px' }}
                >
                  Somos um grupo apaixonado por tecnologia e por resolver problemas de verdade.
                  Nosso foco está em criar soluções que funcionem de forma simples, eficiente e que realmente façam diferença no dia a dia de quem usa.

                  A gente faz isso porque acredita que boas ideias merecem sair do papel com qualidade. E que, com o time certo, é possível transformar até os projetos mais complexos em algo funcional, bonito e útil.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSectionFive;
