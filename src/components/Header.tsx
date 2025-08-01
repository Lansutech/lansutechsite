// src/components/Header.tsx
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const navItems = [
  { name: 'Sobre nós', id: 'sobre-nos' },
  { name: 'Serviços', id: 'servicos' },
  { name: 'Contato', id: 'contato' },
  { name: 'Projetos', id: 'projetos' }
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

const Header: React.FC = () => {
  // Lógica para rolar até a seção com animação suave
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-[#EAF3F3] overflow-hidden">
      <div className="relative h-[174px] max-w-full mx-auto">

        {/* Logo */}
        <div className="absolute top-6 left-6 w-[122px] h-[124px] z-20">
           <img src={import.meta.env.BASE_URL + 'imgs/lansutechlogo.png'} alt="Lansutech" className="w-full h-full object-contain" />
        </div>

        {/* Navegação central + linha */}
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

        {/* Botão direito com ícone WhatsApp profissional */}
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

        {/* Mobile menu */}
        <div className="md:hidden p-4">
          <button className="text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;