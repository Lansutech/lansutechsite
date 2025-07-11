// src/components/Header.tsx

import React from 'react';
import { motion, Variants, cubicBezier } from 'framer-motion';

// --- Variantes para Animação Sincronizada e Contínua ---

// Transição compartilhada para garantir movimento idêntico.
const sharedTransition = {
  duration: 0.8, // Duração da animação (um pouco mais longa para ser mais perceptível)
  ease: cubicBezier(0.25, 0.1, 0.25, 1.0), // Use cubicBezier() aqui
};

// Posição inicial fora da tela à esquerda para todos os elementos que se movem para a direita
const initialXLeft = -200; // Ou um valor que garanta que está completamente fora da tela
// Posição inicial fora da tela à direita para o botão que se move para a esquerda
const initialXRight = 200; // Ou um valor que garanta que está completamente fora da tela

// Variante para os itens que se movem (logo, botões de navegação, botão de contato)
// REMOVIDO opacity AQUI, POIS SERÁ DEFINIDO DIRETAMENTE NO initial/animate PARA CADA ITEM
// O `itemFlyInVariants` agora servirá mais como um marcador para o `variants` base.
const itemFlyInVariants: Variants = {
  // Não precisamos mais de 'hidden' e 'visible' aqui diretamente,
  // pois estamos compondo os objetos `initial` e `animate` inline.
  // Manteremos como um objeto vazio ou com propriedades comuns se houver.
  // Para este caso, podemos até simplificar para não ter Variants explícitas para este,
  // mas vamos manter a estrutura se você planeja ter outros estados nomeados futuramente.
};

// Variante para a linha que cresce.
const lineGrowVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0, transformOrigin: 'left' },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { ...sharedTransition, delay: 0.1 }, // Mesma transição e delay inicial dos itens
  },
};

const Header = () => {
  return (
    <header className="bg-[#EAF3F3] overflow-hidden">
      <div className="max-w-full mx-auto" style={{ position: 'relative', height: '174px' }}>
        <div className="flex items-center justify-between z-10" style={{ height: '100%' }}>

          {/* Logo */}
          <motion.div
            className="absolute"
            // REMOVIDO: variants={itemFlyInVariants}
            initial={{ x: initialXLeft, opacity: 0 }} // Definindo initial diretamente
            animate={{ x: 0, opacity: 1, transition: { ...sharedTransition, delay: 0.1 } }} // Definindo animate diretamente
            style={{
              top: '25px', left: '25px', width: '122px',
              height: '124px', zIndex: 20,
            }}
          >
            <img src="/imgs/lansutechlogo.png" alt="Lansutech" className="w-full h-full object-contain" />
          </motion.div>

          {/* Container da Navegação e Linha - Este é o container central, não animado diretamente */}
          <div
            className="hidden md:flex flex-grow flex-col items-center justify-center absolute"
            style={{
              top: '52.5px', left: '50%', transform: 'translateX(-50%)',
            }}
          >
            {/* Navegação - Os botões se movem de X */}
            <nav className="flex items-center justify-center space-x-8 w-full">
              {/* Botões: cada um será um motion.button com sua própria animação de X */}
              {['Sobre nós', 'Serviços', 'Contato', 'Projetos'].map((text, index) => (
                <motion.button
                  key={index}
                  // REMOVIDO: variants={itemFlyInVariants}
                  initial={{ x: initialXLeft, opacity: 0 }} // Definindo initial diretamente
                  animate={{ x: 0, opacity: 1, transition: { ...sharedTransition, delay: 0.1 } }} // Definindo animate diretamente
                  className={`${index === 0 ? 'bg-black text-white' : 'text-gray-700 hover:bg-black hover:text-white'} font-medium rounded-full transition-all duration-200 flex items-center justify-center`}
                  style={{
                    fontFamily: 'DM Sans', fontWeight: 500, fontSize: '16px',
                    width: '103px', height: '31px', borderRadius: '20px',
                  }}
                >
                  {text}
                </motion.button>
              ))}
            </nav>

            {/* Linha abaixo da navegação */}
            <div className="flex justify-center w-full" style={{ marginTop: '7px' }}>
              <motion.div
                variants={lineGrowVariants}
                initial="hidden"
                animate="visible"
                style={{
                  width: '1058px',
                  height: '1.08px',
                  backgroundColor: '#000000',
                }}
              />
            </div>
          </div>

          {/* Botão de contato no canto direito */}
          <motion.div
            className="hidden md:flex items-center absolute"
            // REMOVIDO: variants={itemFlyInVariants}
            initial={{ x: initialXRight, opacity: 0 }} // Definindo initial diretamente
            animate={{ x: 0, opacity: 1, transition: { ...sharedTransition, delay: 0.1 } }} // Definindo animate diretamente
            style={{ top: '52.33px', right: '25px', zIndex: 20 }}
          >
            <button
              className="text-white rounded-full font-medium transition-all duration-200 flex items-center justify-center bg-black hover:bg-[#1A437C]"
              style={{
                fontFamily: 'DM Sans', width: '120px', height: '35px', borderRadius: '20px',
                fontWeight: 500, fontSize: '16px',
              }}
            >
              Contate-nos
            </button>
          </motion.div>

          {/* Botão de menu hamburguer para telas pequenas */}
          <div className="md:hidden p-4">
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