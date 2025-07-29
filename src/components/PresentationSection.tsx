import React from 'react';
import { motion } from 'framer-motion'; // Manter motion para o hover e para a máscara se necessário
import RevealOnScroll from './RevealOnScroll'; // Importar o componente RevealOnScroll

const PresentationSectionFive = () => {

  // A animação de hover do card será mantida aqui, pois é uma interação específica.
  // A animação de "máscara" do título é um efeito mais complexo e específico.
  // Podemos mantê-la como uma motion.div customizada, ou tentar simplificar.
  // Para fins de padronização, vamos remover a máscara por enquanto e focar
  // em um "slide-in" para o título e o parágrafo, usando RevealOnScroll.
  // Se a máscara for essencial, ela precisaria de uma lógica customizada.

  return (
    <section className="bg-[#EAF3F3] pb-0">
      <div
        className="relative mx-[45px] mr-[86px]"
        style={{ maxWidth: 'calc(100vw - 45px - 86px)' }}
      >
        <div className="mb-5">
          <div className="grid grid-cols-1 lg:grid-cols-[550px_1fr] gap-x-4 items-start">

            {/* Card animado com RevealOnScroll */}
            <RevealOnScroll type="slide" direction="up" delay={0.2} duration={0.8} threshold={0.4}>
              <motion.div
                className="rounded-lg overflow-hidden shadow-md cursor-pointer"
                style={{
                  width: '550px',
                  height: '363px',
                  backgroundColor: '#163030',
                  borderRadius: '10px'
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 180,
                  damping: 22
                }}
              />
            </RevealOnScroll>

            {/* COLUNA DE TEXTO */}
            <div className="pt-[6px] pl-[19px] relative w-full">
              {/* Título revelado com RevealOnScroll */}
              {/* Removendo a animação de máscara para padronizar com RevealOnScroll */}
              <RevealOnScroll type="slide" direction="up" delay={0.4} duration={0.8} threshold={0.4}>
                <h2
                  className="text-black font-semibold relative z-10"
                  style={{ fontFamily: 'DM Sans', fontSize: '67.05px', marginBottom: 7 }}
                >
                  Apresentação
                </h2>
              </RevealOnScroll>

              {/* Subtexto revelado com RevealOnScroll */}
              <RevealOnScroll type="slide" direction="up" delay={0.6} duration={0.8} threshold={0.4}>
                <p
                  className="text-black leading-relaxed"
                  style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '18.26px' }}
                >
                  Na Lansutech, somos apaixonados por transformar ideias em realidade digital. Somos uma equipe dedicada de especialistas em tecnologia, design e estratégia, comprometidos em criar soluções inovadoras que impulsionam o sucesso de nossos clientes.
                  <br /><br />
                  Com foco em excelência e abordagem colaborativa, trabalhamos lado a lado para entender necessidades, superar desafios e entregar resultados que fazem a diferença.
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