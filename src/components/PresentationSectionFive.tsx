import React from 'react';
import { motion } from 'framer-motion'; // Mantido, mas não estritamente necessário se RevealOnScroll já cobrir tudo
import RevealOnScroll from './RevealOnScroll'; // Importe o componente RevealOnScroll (ajuste o caminho se necessário)

const PresentationSectionFive = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quinta seção de apresentação - invertida */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* === COLUNA DA DIREITA (para imagem/placeholder) === */}
            {/* lg:order-2 faz esta coluna ir para a direita em telas grandes */}
            <div className="lg:order-2">
              {/* Envolve o placeholder/imagem com RevealOnScroll */}
              {/* Animação: surgindo da direita */}
              <RevealOnScroll type="slide" direction="right" delay={0.1} duration={0.8}>
                {/* Aqui você pode colocar sua imagem real se tiver, ou o placeholder colorido */}
                {/* Por exemplo, se fosse uma imagem:
                <img
                  src="/imgs/sua-imagem-aqui.png"
                  alt="Apresentação Visual"
                  className="w-full h-full object-cover rounded-lg"
                  style={{ borderRadius: '10px' }}
                />
                */}
                <motion.div // Mantido motion.div para consistência, mas poderia ser uma div simples
                  className="rounded-lg"
                  style={{
                    width: '550px',
                    height: '363px',
                    backgroundColor: '#6FAFB0', // Cor do placeholder
                    borderRadius: '10px'
                  }}
                ></motion.div>
              </RevealOnScroll>
            </div>
            
            {/* === COLUNA DA ESQUERDA (para texto) === */}
            {/* lg:order-1 faz esta coluna ir para a esquerda em telas grandes */}
            <div className="lg:order-1">
              {/* Envolve o título com RevealOnScroll */}
              {/* Animação: surgindo de baixo para cima */}
              <RevealOnScroll type="slide" direction="up" delay={0.3} duration={0.8}>
                <h2 className="text-gray-900 mb-4" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '67.05px' }}>
                  Apresentação
                </h2>
              </RevealOnScroll>
              
              {/* Envolve o parágrafo com RevealOnScroll */}
              {/* Animação: surgindo de baixo para cima, com um delay ligeiramente maior */}
              <RevealOnScroll type="slide" direction="up" delay={0.5} duration={0.9}>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'DM Sans', fontSize: '18.26px' }}>
                  Texto de apresentação da empresa seguindo o protótipo.
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