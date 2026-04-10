import React from 'react';
import { motion, Variants } from 'framer-motion';
import linha from '../assets/elementos_graficos/linha_sobrenos.png'
import logo from '../assets/elementos_graficos/logo_sobrenos.png'

const AboutSection = () => {
  const whoWeAreText =
    'A Lansutech nasceu para simplificar processos e transformar desafios operacionais em soluções digitais eficientes. Atuamos com foco em automação, sistemas sob medida e experiência do usuário, sempre adaptando a tecnologia ao contexto real de cada cliente.';

  const missionValuesText =
    'Nossa missão é entregar valor com tecnologia prática, confiável e escalável. Trabalhamos com transparência, parceria e melhoria contínua para desenvolver produtos que reduzam retrabalho, aumentem produtividade e apoiem o crescimento sustentável dos negócios.';

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="sobre-nos"
      className="relative bg-[#EAF3F3] dark:bg-[#0d1117] transition-colors duration-300"
      style={{ fontFamily: 'DM Sans' }}
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 md:px-8 lg:px-8 py-12 sm:py-16 md:py-20">
        
        {/* Seção Title Badge */}
        <motion.div
          className="mb-8 sm:mb-12 md:mb-8 md:-mt-10 flex justify-start"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="rounded-full bg-[#ff914d]/80 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 lg:px-3 lg:py-1">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[52px] font-normal text-black  leading-none">
              Sobre nós
            </h2>
          </div>
        </motion.div>

        {/* Quem Somos Section */}
        <div className="mb-14 sm:mb-18 md:mb-22 lg:mb-20">
          <motion.h3
            className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-normal text-black dark:text-[#f0f3f3] mb-4 sm:mb-6 md:mb-8 lg:mb-1"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.04 }}
          >
            Quem somos?
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-[740px_1fr] gap-6 sm:gap-8 md:gap-10 lg:gap-14 items-start">
            <motion.div
              className="rounded-2xl bg-[#ffde59]/75 px-4 sm:px-6 md:px-8 lg:px-10 py-5 sm:py-6 md:py-8 lg:py-0 w-full min-h-[170px] md:min-h-[200px] lg:h-[190px] lg:flex lg:items-center"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.06 }}
            >
              <p
                className="mx-auto w-full max-w-[620px] text-center text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed sm:leading-[1.6] md:leading-[1.65] lg:leading-[1.6] text-black  [overflow-wrap:anywhere] [text-wrap:pretty]"
              >
                {whoWeAreText}
              </p>
            </motion.div>

            <motion.div
              className="hidden lg:flex h-[300px] w-full max-w-[420px] justify-self-end rounded-2xl items-center justify-center lg:-mt-36 lg:-mr-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.08 }}
            >
              {/* Placeholder para elemento visual/ícone - a ser preenchido com componente real */}
              <div className="text-center text-black/30 dark:text-[#8b949e]">
                <img
                src={logo}
                alt="Notebook"
                loading="lazy"
                className="h-full w-full scale-[1.08] object-contain object-left"
              />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Nossa Missão e Valores Section */}
        <div className="relative mt-4 ">
          <motion.div
            className="pointer-events-none absolute left-[-8px] top-[-88px] hidden w-[460px] lg:block xl:w-[500px] lg:-ml-6 lg:-mt-1"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.10 }}
          >
            <img
              src={linha}
              alt="Linha decorativa"
              loading="lazy"
              className="h-auto w-full scale-[0.80] object-contain object-left"
            />
          </motion.div>

          <div className="relative z-10 w-full max-w-[760px] justify-self-end lg:ml-auto">
            <motion.h3
              className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-normal text-black dark:text-[#f0f3f3] mb-4 sm:mb-6 md:mb-8 lg:mb-1 lg:-mt-6 text-right"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.08 }}
            >
              Nossa Missão e Valores
            </motion.h3>

            <motion.div
              className="rounded-2xl bg-[#ffde59]/75 px-4 sm:px-6 md:px-8 lg:px-10 py-5 sm:py-6 md:py-8 lg:py-0 w-full min-h-[170px] md:min-h-[200px] lg:h-[190px] lg:flex lg:items-center"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.12 }}
            >
              <p
                className="mx-auto w-full max-w-[620px] text-center text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-relaxed sm:leading-[1.6] md:leading-[1.65] lg:leading-[1.6] text-black  [overflow-wrap:anywhere] [text-wrap:pretty]"
              >
                {missionValuesText}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
