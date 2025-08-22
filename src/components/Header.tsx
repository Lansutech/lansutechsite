import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
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

const mobileNavVariants: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.1
    }
  },
  exit: { y: -50, opacity: 0 },
};

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed md:static top-0 left-0 right-0 z-50 md:z-auto bg-[#EAF3F3] shadow-lg md:shadow-none">
      <div className="relative h-[80px] md:h-[174px] max-w-full mx-auto">

        {/* Logo - Tamanho ajustado para mobile */}
        <div className="absolute top-4 md:top-6 left-4 md:left-6 w-auto h-12 md:w-[122px] md:h-[124px] z-20">
          <img 
            // AJUSTADO: Usando caminho relativo direto para resolver erro de compilação
            src={'./imgs/lansutechlogo.png'} 
            alt="Lansutech"
            className="w-full h-full object-contain" 
          />
        </div>

        {/* Navegação central + linha (Desktop) */}
        <div className="hidden md:flex flex-col items-center justify-center absolute left-1/2 top-[52.5px] -translate-x-1/2 w-full max-w-[1058px]">
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
            className="mt-[7px] bg-black h-[1.08px] w-full"
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
              flex items-center justify-center w-11 h-11"
          >
            {/* Ícone de WhatsApp em SVG inline */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.557-3.842-1.557-5.881 0-5.421 4.417-9.837 9.837-9.837 2.651 0 5.106 1.039 6.981 2.914 1.875 1.876 2.914 4.329 2.914 6.98 0 5.422-4.417 9.838-9.838 9.838l-6.201 1.666zm6.558-4.832l-.466-.276c-1.428-.837-2.476-2.222-2.87-3.953l-.117-.552 1.62-.058c.249-.002.668-.076 1.042.277.375.352.887 1.011 1.011 1.205.124.194.209.288.423.504.214.215.457.291.706.195.249-.096.969-.356 1.841-.989.873-.633 1.459-1.41 1.62-1.666.161-.257.34-.492.518-.621.177-.129.356-.169.518-.088.162.081.821.393 1.011.553.19.16.38.288.541.423.161.135.291.264.423.447.132.182.264.38.356.492.092.112.182.288.182.472 0 .193-.058.423-.088.471-.03.049-.33.224-.621.516-.291.292-.582.551-.937.838-.356.287-.72.536-1.109.721-.389.184-.814.275-1.296.275-.482 0-.964-.075-1.428-.275-.464-.199-.955-.542-1.841-.955z"/>
            </svg>
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
              className="md:hidden absolute top-[80px] left-4 right-4 bg-[#EAF3F3] p-4 text-center shadow-md z-40 rounded-b-xl"
              variants={mobileNavVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
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
