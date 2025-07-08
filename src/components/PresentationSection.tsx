import React from 'react';
import { motion } from 'framer-motion'; // Manter motion caso queira alguma animação na imagem
import RevealOnScroll from '../components/RevealOnScroll';

const PresentationSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Primeira seção de apresentação - Layout de "Sobre Nós" */}
        <div className="mb-16" style={{ width: '1400px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* === COLUNA DA ESQUERDA: IMAGEM/GIF === */}
            <motion.div
              className="flex items-center justify-center rounded-lg overflow-hidden"
              style={{
                width: '650px', // Mesma largura do card anterior para manter alinhamento
                height: '363px', // Mesma altura do card anterior
                backgroundColor: 'transparent', // Fundo transparente ou cor suave
                borderRadius: '10px'
              }}
              // Você pode adicionar animações aqui se quiser, por exemplo:
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img
                src="/imgs/lansutechsobrenos.png" // >>> CRIE ESTA IMAGEM/GIF NA PASTA PUBLIC/IMG <<<
                                               // Ex: /imgs/quem-somos-animacao.gif
                alt="Gráfico de Quem Somos"
                className="w-full h-full object-contain" // object-contain para manter proporção e não cortar
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }} // Adiciona uma leve sombra para "flutuar"
              />
            </motion.div>

            {/* === COLUNA DA DIREITA: TEXTO "SOBRE NÓS" === */}
            <div>
              <h2 className="text-gray-900 mb-4" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '67.05px' }}>
                Quem somos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'DM Sans', fontSize: '18.26px' }}>
                Na Lansutech, somos apaixonados por transformar ideias em realidade digital. Somos uma equipe dedicada de especialistas em tecnologia, design e estratégia, comprometidos em criar soluções inovadoras que impulsionam o sucesso de nossos clientes.
              </p>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'DM Sans', fontSize: '18.26px' }}>
                Com foco em excelência e uma abordagem colaborativa, trabalhamos lado a lado com você para entender suas necessidades, superar desafios e entregar resultados que realmente fazem a diferença. Acreditamos que a tecnologia, quando bem aplicada, tem o poder de otimizar processos, conectar pessoas e abrir novas portas para o crescimento. Juntos, podemos construir o futuro digital do seu negócio.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PresentationSection;