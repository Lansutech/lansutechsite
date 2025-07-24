// src/components/PresentationSectionTwo.tsx
import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const PresentationSectionTwo = () => {
  return (
    <section style={{ backgroundColor: '#EAF3F3', paddingTop: '0' }}> {/* Removido py-16, adicionado paddingTop: 0 */}
      <div
        className="relative"
        style={{
          marginLeft: '86px',
          marginRight: '45px',
          maxWidth: 'calc(100vw - 86px - 45px)',
        }}
      >
        {/* Removido className="mb-16" daqui */}
        <div style={{ marginTop: '0' }}> {/* Removido mb-16, e garantido que não há margem superior indesejada */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_550px] gap-x-4 items-start">
            
            {/* === COLUNA DA ESQUERDA: TEXTO "APRESENTAÇÃO" === */}
            <RevealOnScroll type="slide" direction="right" delay={0.1} duration={0.8}>
              <div
                className="text-right"
                style={{
                  paddingTop: '35px',
                  paddingRight: '19px',
                }}
              >
                <h2 className="text-gray-900" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '67.05px', marginBottom: '7px', color: 'black' }}>
                  Apresentação
                </h2>
                
                <p className="leading-relaxed" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '18.26px', color: 'black' }}>
                  Na Lansutech, somos apaixonados por transformar ideias em realidade digital. Somos uma equipe dedicada de especialistas em tecnologia, design e estratégia, comprometidos em criar soluções inovadoras que impulsionam o sucesso de nossos clientes.
                  Com foco em excelência e uma abordagem colaborativa, trabalhamos lado a lado com você para entender suas necessidades, superar desafios e entregar resultados que realmente fazem a diferença. Acreditamos que a tecnologia, quando bem aplicada, tem o poder de otimizar processos, conectar pessoas e abrir novas portas para o crescimento. Juntos, podemos construir o futuro digital do seu negócio.
                </p>
              </div>
            </RevealOnScroll>
            
            {/* === COLUNA DA DIREITA: IMAGEM/PLACEHOLDER (Card) === */}
            <RevealOnScroll type="slide" direction="left" delay={0.1} duration={0.8}>
              <motion.div
                className="rounded-lg overflow-hidden"
                style={{
                  marginTop: '35px',
                  width: '550px',
                  height: '363px',
                  backgroundColor: '#163030',
                  borderRadius: '10px',
                }} whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 150, damping: 20, duration: 0.9}}
              >
                {/* Image or placeholder content */}
              </motion.div>
            </RevealOnScroll>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSectionTwo;