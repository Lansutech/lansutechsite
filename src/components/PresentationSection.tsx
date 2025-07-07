import React from 'react';
import { motion } from 'framer-motion';

const PresentationSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Primeira seção de apresentação */}
        <div className="mb-16" style={{ width: '1400px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              className="rounded-lg overflow-hidden"
              style={{ width: '650px', height: '363px', backgroundColor: '#163030', borderRadius: '10px' }}
              whileHover={{
                scale: 1.03, // Reduzindo um pouco a escala para menos expansão (1.05 para 1.03)
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)", // Sombra mais sutil
              }}
              transition={{
                type: "tween", // Mudei de "spring" para "tween" para controle linear/curvas
                duration: 0.4, // Aumentei a duração para deixar mais lento e suave (0.3 para 0.4)
                ease: "easeOut" // Mantive "easeOut" para uma desaceleração suave no final
              }}
            >
              <div className="flex items-center justify-center h-full text-white text-3xl font-bold">
                 Conteúdo do Projeto
              </div>
            </motion.div>
            <div>
              <h2 className="text-gray-900 mb-4" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '67.05px' }}>
                Apresentação
              </h2>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'DM Sans', fontSize: '18.26px' }}>
                Texto de apresentação da empresa seguindo o protótipo.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PresentationSection;