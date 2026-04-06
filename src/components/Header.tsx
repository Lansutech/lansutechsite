import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Ícones para menu mobile

const navItems = [
  { name: 'Projetos', id: 'projetos' },
  { name: 'Serviços', id: 'servicos' },
  { name: 'Sobre nós', id: 'sobre-nos' },
];

const mobileNavItems = [
  ...navItems,
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
      <div className="relative mx-auto w-full max-w-[1240px] px-4 md:px-6 lg:px-8">
        <div className="flex h-[76px] md:h-[82px] items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection('hero')}
            aria-label="Ir para o topo"
            className="flex items-center gap-2 md:gap-2.5"
          >
            <img
              src={'./imgs/logolansutech.svg'}
              alt="Lansutech"
              className="h-[34px] w-[34px] md:h-[62px] md:w-[62px] object-contain"
            />
            <img
              src={'./imgs/lansutechlogotitulo.svg'}
              alt="Lansutech logotipo"
              className="h-[15px] w-auto md:h-[18px] object-contain"
            />
          </button>

          <motion.nav
            className="hidden md:flex items-center gap-5 lg:gap-7"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                className="text-black hover:bg-black hover:text-white rounded-full transition-all duration-200 flex items-center justify-center"
                style={{
                  fontFamily: 'DM Sans',
                  fontWeight: 400,
                  fontSize: '18px',
                  width: '116px',
                  height: '33px',
                  letterSpacing: '0.5px'
                }}
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </button>
            ))}
          </motion.nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contato')}
              className="rounded-full bg-black px-7 py-2.5 text-[18px] leading-none text-[#EAF3F3] transition-all duration-200 hover:bg-black/85 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: 400,
                letterSpacing: '0.2px'
              }}
            >
              Entrar em Contato
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-gray-700 z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <motion.div
          className="hidden md:block bg-black h-[1px] w-full"
          initial="hidden"
          animate="visible"
          variants={lineVariants}
        />

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="md:hidden absolute top-[80px] left-4 right-4 bg-[#EAF3F3] p-4 text-center shadow-md z-40 rounded-b-xl"
              variants={mobileNavVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {mobileNavItems.map((item) => (
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
