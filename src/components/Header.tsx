import React from 'react';
import { motion, Variants, Transition } from 'framer-motion';
import { MoveRight } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07, // Pequeno atraso entre os botões para um efeito de "sequência"
      delayChildren: 0.3,   // Atraso inicial para a animação começar
    } as Transition,
  },
};

// Variantes para os botões (deslizam da esquerda e aparecem)
const buttonItemVariants: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8, // Duração da animação para os botões
      ease: "easeOut",
    } as Transition,
  },
};

// Variantes para a linha (cresce da esquerda e aparece)
const lineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0, x: -100, transformOrigin: 'left' }, // Começa invisível, largura zero, e da esquerda
  visible: {
    scaleX: 1, // Cresce para largura total
    opacity: 1, // Torna-se visível
    x: 0, // Desliza para a posição final
    transition: {
      duration: 0.8, // Duração da animação para a linha (mesma dos botões)
      ease: "easeOut",
    } as Transition,
  },
};

const Header = () => {
  return (
    <header className="bg-[#EAF3F3] overflow-hidden">
      <div className="max-w-full mx-auto" style={{ position: 'relative', height: '174px' }}>
        <div className="flex items-center justify-between z-10" style={{ height: '100%' }}>

          {/* Logo e Texto "Lansutech" */}
          <div
            className="absolute"
            style={{
              top: '25px', // Mantendo o logo onde está, se ele precisar de mais espaço vertical
              left: '25px',
              width: '122px',
              height: '124px',
              zIndex: 20,
            }}
          >
            <img src="/imgs/lansutechlogo.png" alt="Lansutech" className="w-full h-full object-contain" />
          </div>

          {/* Container da Navegação e Linha - ANIMADO */}
          <motion.div
            className="hidden md:flex flex-grow flex-col items-center justify-center absolute"
            style={{
              flexBasis: '50%',
              flexGrow: 1,
              marginLeft: 'auto',
              marginRight: 'auto',
              top: '52.5px', // Mantido o top para alinhar com o "Contate-nos"
              left: '50%',
              transform: 'translateX(-50%)',
              paddingTop: '0px',
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Navegação centralizada (Botões) */}
            <nav className="flex items-center justify-center space-x-8 w-full">
              {/* Botão "Sobre nós" com estilo selecionado inicial */}
              <motion.button
                variants={buttonItemVariants}
                className="font-medium rounded-full transition-all duration-200 flex items-center justify-center bg-black text-white"
                style={{
                  fontFamily: 'DM Sans',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: 'normal',
                  width: '103px',
                  height: '31px',
                  borderRadius: '20px',
                  paddingTop: '7.5px',
                  paddingBottom: '7.5px',
                  paddingLeft: 'unset',
                  paddingRight: 'unset',
                }}
              >
                Sobre nós
              </motion.button>
              {/* Os outros botões permanecem com as mesmas classes de padding px-4 py-2 */}
              <motion.button
                variants={buttonItemVariants}
                className="text-gray-700 font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-black hover:text-white flex items-center justify-center"
                style={{
                  fontFamily: 'DM Sans',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: 'normal',
                  width: '103px',
                  height: '31px',
                  borderRadius: '20px'
                }}
              >
                Serviços
              </motion.button>
              <motion.button
                variants={buttonItemVariants}
                className="text-gray-700 font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-black hover:text-white flex items-center justify-center"
                style={{
                  fontFamily: 'DM Sans',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: 'normal',
                  width: '103px',
                  height: '31px',
                  borderRadius: '20px'
                }}
              >
                Contato
              </motion.button>
              <motion.button
                variants={buttonItemVariants}
                className="text-gray-700 font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-black hover:text-white flex items-center justify-center"
                style={{
                  fontFamily: 'DM Sans',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: 'normal',
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
              variants={lineVariants}
              className="flex justify-center w-full"
              style={{ marginTop: '7px' }}
            >
              <div
                style={{
                  width: '1058px',
                  height: '1.08px',
                  backgroundColor: '#000000',
                }}
              ></div>
            </motion.div>
          </motion.div>

          {/* Botão de contato no canto direito */}
          <div
            className="hidden md:flex items-center absolute"
            style={{
              top: '52.33px', // Mantido o top para alinhar com a navegação
              right: '25px',
              zIndex: 20,
            }}
          >
            <button
              // REMOVIDO px-4 py-2 pois width/height fixos já determinam o tamanho
              // ALTERADO hover:bg-black para hover:bg-[#1A437C] (azul escuro)
              // Adicionado 'text-white' para garantir que o texto seja branco no hover
              className="text-white rounded-full font-medium transition-all duration-200 flex items-center justify-center bg-black hover:bg-[#1A437C]"
              style={{
                // backgroundColor: '#000000', // Já está no className 'bg-black'
                fontFamily: 'DM Sans',
                width: '120px',
                height: '35px',
                borderRadius: '20px', // Definido para 20px para um "rectangle arredondado"
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: 'normal',
                // Adicionado padding vertical para centralizar o texto dentro de 35px de altura
                paddingTop: '9.5px', // (35 - 16) / 2 = 9.5
                paddingBottom: '9.5px',
                paddingLeft: 'unset', // Para garantir que a largura seja apenas 120px
                paddingRight: 'unset',
              }}
            >
              Contate-nos
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