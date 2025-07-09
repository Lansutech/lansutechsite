import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const PresentationSectionFive = () => {
  return (
    <section style={{ backgroundColor: '#EAF3F3', paddingBottom: '0' }}> {/* Removido py-16, adicionado paddingBottom: 0 */}
      <div
        className="relative"
        style={{
          maxWidth: 'calc(100vw - 45px - 86px)',
          marginLeft: '45px',
          marginRight: '86px',
        }}
      >
        {/* Removido className="mb-16" daqui */}
        <div style={{ marginBottom: '20px' }}> {/* Adicionado um mb menor para espaçamento interno se precisar, ou remova */}
          <div className="grid grid-cols-1 lg:grid-cols-[550px_1fr] gap-x-4 items-start">
            
            {/* === COLUNA DA ESQUERDA: IMAGEM/PLACEHOLDER (Card) === */}
            <RevealOnScroll type="slide" direction="left" delay={0.1} duration={0.8}>
              <motion.div
                className="rounded-lg overflow-hidden"
                style={{
                  width: '550px',
                  height: '363px',
                  backgroundColor: '#163030',
                  borderRadius: '10px',
                }}
              >
                {/* Image or placeholder content */}
              </motion.div>
            </RevealOnScroll>
            
            {/* === COLUNA DA DIREITA: TEXTO "APRESENTAÇÃO" === */}
            <div
              style={{
                paddingTop: '35px',
                paddingLeft: '19px',
              }}
            >
              <RevealOnScroll type="slide" direction="up" delay={0.3} duration={0.8}>
                <h2 className="text-gray-900" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '67.05px', marginBottom: '7px', color: 'black' }}>
                  Apresentação
                </h2>
              </RevealOnScroll>
              
              <RevealOnScroll type="slide" direction="up" delay={0.5} duration={0.9}>
                <p className="leading-relaxed" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '18.26px', color: 'black' }}>
                  Na Lansutech, somos apaixonados por transformar ideias em realidade digital. Somos uma equipe dedicada de especialistas em tecnologia, design e estratégia, comprometidos em criar soluções inovadoras que impulsionam o sucesso de nossos clientes.
                  Com foco em excelência e uma abordagem colaborativa, trabalhamos lado a lado com você para entender suas necessidades, superar desafios e entregar resultados que realmente fazem a diferença. Acreditamos que a tecnologia, quando bem aplicada, tem o poder de otimizar processos, conectar pessoas e abrir novas portas para o crescimento. Juntos, podemos construir o futuro digital do seu negócio.
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