import React from 'react';
import { motion, Variants, Transition } from 'framer-motion';

// ... (containerVariants e itemVariants permanecem inalterados) ...
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    } as Transition,
  },
};

const itemVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    } as Transition,
  },
};
// ... (fim das variantes) ...

const Header = () => {
  return (
    <header className="py-4 bg-[#EAF3F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative z-10">

          {/* Logo e Texto "Lansutech" - PERMANECEM ESTÁTICOS */}
          <div className="flex items-center flex-shrink-0">
            <div className="w-29 h-28">
              <img src="/imgs/lansutechlogo.png" alt="Lansutech" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Container da Navegação e Linha - ANIMADO */}
          <motion.div
            className="hidden md:flex flex-grow flex-col items-center justify-center"
            style={{ flexBasis: '50%' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Navegação centralizada (Botões) */}
            <nav className="flex items-center justify-center space-x-8 w-full">
              {/* Botão "Sobre nós" com estilo selecionado inicial - CORRIGIDO AQUI */}
              <motion.button
                variants={itemVariants}
                // REMOVIDO "text-gray-700" daqui para garantir que "text-white" funcione
                className="text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-black hover:text-white flex items-center justify-center bg-black text-white"
                style={{
                  fontFamily: 'DM Sans',
                  width: '103px',
                  height: '31px',
                  borderRadius: '20px'
                }}
              >
                Sobre nós
              </motion.button>
              {/* Os outros botões permanecem inalterados */}
              <motion.button
                variants={itemVariants}
                className="text-gray-700 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-black hover:text-white flex items-center justify-center"
                style={{
                  fontFamily: 'DM Sans',
                  width: '103px',
                  height: '31px',
                  borderRadius: '20px'
                }}
              >
                Serviços
              </motion.button>
              <motion.button
                variants={itemVariants}
                className="text-gray-700 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-black hover:text-white flex items-center justify-center"
                style={{
                  fontFamily: 'DM Sans',
                  width: '103px',
                  height: '31px',
                  borderRadius: '20px'
                }}
              >
                Contato
              </motion.button>
              <motion.button
                variants={itemVariants}
                className="text-gray-700 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-black hover:text-white flex items-center justify-center"
                style={{
                  fontFamily: 'DM Sans',
                  width: '103px',
                  height: '31px',
                  borderRadius: '20px'
                }}
              >
                Projetos
              </motion.button>
            </nav>

            {/* Linha abaixo da navegação - ANIMADA */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center mt-2 w-full"
            >
              <div
                style={{
                  width: 'calc(4 * 103px + 3 * 35px + 84px)',
                  height: '1px',
                  backgroundColor: '#000000',
                }}
              ></div>
            </motion.div>
          </motion.div>

          {/* Botão de contato no canto direito - ESTÁTICO */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <button
              className="text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-800 flex items-center justify-center"
              style={{
                backgroundColor: '#000000',
                fontFamily: 'DM Sans',
                width: '103px',
                height: '31px',
                borderRadius: '20px'
              }}
            >
              Sobre nós
            </button>
          </div>

          {/* Botão de menu hamburguer para telas pequenas */}
          <div className="md:hidden">
            <button className="text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;