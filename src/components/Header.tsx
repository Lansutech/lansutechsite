import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Menu, X } from 'lucide-react'; // Ícones para menu mobile

const navItems = [
  { name: 'Sobre nós', id: 'sobre-nos' },
  { name: 'Projetos', id: 'projetos' },
  { name: 'Serviços', id: 'servicos' },
  { name: 'Contato', id: 'contato' },
];

const lineVariants: Variants = {
  hidden: { scaleX: 0.05, transformOrigin: 'left' },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.4,
      ease: [0.25, 0.8, 0.25, 1],
      delay: 0,
    },
  },
};

const buttonVariants: Variants = {
  hidden: { x: -300 },
  visible: {
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.8, 0.25, 1],
      delay: 0,
    },
  },
};

// Variantes para o container do menu mobile
const mobileNavVariants: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.1 // Stagger para animar os filhos um a um
    }
  },
  exit: { y: -50, opacity: 0 },
};

// Variantes para cada item de navegação individual
const mobileNavItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 }
};

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Fecha o menu ao clicar em um item
    }
  };

  return (
    // AJUSTADO: Header é fixo apenas em telas pequenas, e estático em telas maiores
    <header className="fixed md:static top-0 left-0 right-0 z-50 md:z-auto bg-[#EAF3F3] shadow-lg md:shadow-none">
      <div className="relative h-[80px] md:h-[174px] max-w-full mx-auto">

        {/* Logo - Tamanho ajustado para mobile */}
        <div className="absolute top-4 md:top-6 left-4 md:left-6 w-auto h-12 md:w-[122px] md:h-[124px] z-20">
          <img src={import.meta.env.BASE_URL + 'imgs/lansutechlogo.png'} alt="Lansutech" className="w-full h-full object-contain" />
        </div>

        {/* Navegação central + linha (Desktop) */}
        <div className="hidden md:flex flex-col items-center justify-center absolute left-1/2 top-[52.5px] -translate-x-1/2">
          {/* Botões */}
          <motion.div
            className="flex space-x-8"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                className="text-black hover:bg-black hover:text-white font-medium rounded-full transition-all duration-200 flex items-center justify-center"
                style={{
                  fontFamily: 'DM Sans',
                  fontWeight: 400,
                  fontSize: '18px',
                  width: '116px',
                  height: '33px',
                  borderRadius: '21px',
                  letterSpacing: '0.8px'
                }}
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </button>
            ))}
          </motion.div>

          {/* Linha */}
          <motion.div
            className="mt-[7px] bg-black h-[1.08px] w-[1058px]"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          />
        </div>

        {/* Botão do WhatsApp (Desktop) */}
        <div className="hidden md:flex items-center absolute top-[52.33px] right-6 z-20">
          <a
            href="https://wa.me/55SEUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="bg-[#25D366] text-white rounded-full p-3 shadow-md transition
              hover:bg-[#1ebe57] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]
              flex items-center justify-center"
            style={{ width: 44, height: 44 }}
          >
            <FaWhatsapp size={24} />
          </a>
        </div>

        {/* Menu Mobile - Botão e Painel de Navegação */}
        <div className="md:hidden flex justify-end items-center p-4">
          <button className="text-gray-700 z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              // AJUSTADO: Adicionado padding, arredondamento e sombra suave para um visual mais limpo
              className="md:hidden absolute top-[80px] left-4 right-4 bg-[#EAF3F3] p-4 text-center shadow-md z-40 rounded-b-xl"
              variants={mobileNavVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  // AJUSTADO: Usando a variante para cada item individual
                  variants={mobileNavItemVariants}
                  className="block w-full py-2 my-2 text-black hover:bg-black hover:text-white rounded-md transition-colors"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
