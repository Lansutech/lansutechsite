import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';

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
      duration: 0.8,
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
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1],
      delay: 0,
    },
  },
};

const mobileNavVariants: Variants = {
  hidden: { y: -12, opacity: 0, scale: 0.985 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.24,
      ease: [0.22, 1, 0.36, 1],
      delayChildren: 0.06,
      staggerChildren: 0.055,
    },
  },
  exit: {
    y: -8,
    opacity: 0,
    scale: 0.985,
    transition: {
      duration: 0.16,
      ease: [0.4, 0, 1, 1],
      staggerChildren: 0.025,
      staggerDirection: -1,
    },
  },
};

const mobileNavItemVariants: Variants = {
  hidden: { y: -8, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    y: -6,
    opacity: 0,
    transition: { duration: 0.12, ease: [0.4, 0, 1, 1] },
  },
};

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed md:static top-0 left-0 right-0 z-50 md:z-auto bg-[#EAF3F3] dark:bg-[#0d1117] shadow-lg md:shadow-none">
      <div className="relative mx-auto w-full max-w-[1240px] px-4 md:px-6 lg:px-8">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          className="fixed right-14 top-6 md:right-6 md:top-5 z-[70] inline-flex h-6 w-6 items-center justify-center rounded-full text-[#24292f] transition-all duration-300 hover:scale-110 dark:text-[#ffd700]"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="flex h-[76px] md:h-[82px] items-center justify-between gap-4">
          <button onClick={() => scrollToSection('hero')} aria-label="Ir para o topo" className="flex items-center gap-2 md:gap-2.5">
            <span className="relative h-[34px] w-[34px] shrink-0 md:h-[62px] md:w-[62px]">
              <img
                src={'./imgs/logolansutech.svg'}
                alt="Lansutech"
                loading="eager"
                className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
              />
              <img
                src={'./imgs/logolansutech-white.svg'}
                alt="Lansutech branco"
                loading="eager"
                className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
              />
            </span>

            <span className="relative inline-block h-[15px] shrink-0 md:h-[18px]">
              <img
                src={'./imgs/lansutechlogotitulo.svg'}
                alt="Lansutech logotipo"
                loading="eager"
                className="h-[15px] w-auto md:h-[18px] object-contain opacity-0 pointer-events-none"
                aria-hidden="true"
              />
              <img
                src={'./imgs/lansutechlogotitulo.svg'}
                alt="Lansutech logotipo"
                loading="eager"
                className={`absolute inset-0 h-[15px] w-auto md:h-[18px] object-contain transition-opacity duration-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
              />
              <img
                src={'./imgs/lansutechlogotitulo-white.svg'}
                alt="Lansutech logotipo branco"
                loading="eager"
                className={`absolute inset-0 h-[15px] w-auto md:h-[18px] object-contain transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
              />
            </span>
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
                className="text-black dark:text-[#e2e5e9] hover:bg-black hover:text-white dark:hover:bg-[#e0e2e6] dark:hover:text-[#000000] rounded-full transition-all duration-200 flex items-center justify-center"
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
              className="rounded-full bg-black dark:bg-[#ebf0ec] px-7 py-2.5 text-[18px] leading-none text-[#EAF3F3] dark:text-[#161616] transition-all duration-200 hover:text-black hover:bg-white/65 dark:hover:bg-[#000000] dark:hover:text-[#f0f6fc] hover:shadow-lg"
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
            <button
              type="button"
              className="text-gray-700 dark:text-[#8b949e] z-50"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-controls="mobile-navigation"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <motion.div
          className="hidden md:block bg-black dark:bg-white h-[1px] w-full"
          initial="hidden"
          animate="visible"
          variants={lineVariants}
        />

        <AnimatePresence initial={false}>
          {isMobileMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              className="md:hidden absolute top-[80px] left-4 right-4 bg-[#EAF3F3] dark:bg-[#161b22] p-4 text-center shadow-md z-40 rounded-b-xl border border-transparent dark:border-[#30363d]"
              variants={mobileNavVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ willChange: 'transform, opacity' }}
            >
              {mobileNavItems.map((item) => (
                <motion.button
                  key={item.id}
                  variants={mobileNavItemVariants}
                  className="block w-full py-2 my-2 text-black dark:text-[#c9d1d9] hover:bg-black hover:text-white dark:hover:bg-[#21262d] dark:hover:text-[#f0f6fc] rounded-md transition-colors duration-200"
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
