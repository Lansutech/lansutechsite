import React from 'react';
import { motion } from 'framer-motion'; // Manter motion para o whileHover no card visual
import RevealOnScroll from './RevealOnScroll'; // Importar o componente RevealOnScroll

const projectData = [
  {
    id: 1,
    title: 'Rhavi Carneiro',
    description: (
      <>
        <p><strong>UI/UX Designer</strong> 🎨</p>
        <p>Focado em acessibilidade, responsividade e identidade visual.</p>
        <p>Especialista em <strong>Figma</strong> e experiências interativas que conectam produto e usuário.</p>
        <div className="flex gap-2 mt-2 justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="w-6 h-6" title="Figma" />
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: 'Thiago Sversut',
    description: (
      <>
        <p><strong>Desenvolvedor Back-end</strong> 🛠️</p>
        <p>Focado em APIs REST, segurança e escalabilidade.</p>
        <p>Experiência com <strong>Python</strong> e bancos de dados relacionais.</p>
        <div className="flex gap-2 mt-2 justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-6 h-6" title="Python" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-6 h-6" title="MySQL" />
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: 'Guilherme Xavier Hojak',
    description: (
      <>
        <p><strong>Front-end Developer</strong> ⚛️</p>
        <p>Estudante de Engenharia de Software e entusiasta em IA.</p>
        <p>Focado em <strong>React</strong>, <strong>Tailwind</strong> e boas práticas de UI responsiva.</p>
        <div className="flex gap-2 mt-2 justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-6 h-6" title="React" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="w-6 h-6" title="Tailwind" />
        </div>
      </>
    ),
  },
];

const PresentationSectionThree = () => {
  return (
    // A seção inteira pode ter uma animação de entrada (opcional, ou se for a primeira seção visível)
    // Para esta seção, vamos aplicar o RevealOnScroll no container dos cards para usar staggerChildren.
    <section className="py-16 bg-[#EAF3F3]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: '85px' }}>
        
        {/* Usamos RevealOnScroll como CONTAINER para os cards, ativando o staggerChildren */}
        {/* O 'delay' aqui é o atraso para o container começar a aparecer. */}
        {/* 'staggerChildren' é o atraso entre CADA card filho. */}
        {/* 'staggerDelay' é um atraso ADICIONAL antes que os filhos comecem a animar, depois que o container já está visível. */}
        <RevealOnScroll type="fade" delay={0.2} staggerChildren={0.15} staggerDelay={0.1} threshold={0.3}>
          {/* Container principal dos cards (agora é um motion.div devido ao RevealOnScroll pai) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {projectData.map((project) => (
              // Cada item do mapa DEVE ser um motion.div com suas próprias variantes
              // para que o `staggerChildren` funcione no pai `RevealOnScroll`.
              // As variantes `hidden` e `visible` vêm do padrão do `RevealOnScroll`
              // ou são definidas aqui se quisermos algo diferente para cada item.
              // Como já estamos usando o RevealOnScroll para gerenciar o staggerChildren no pai,
              // o child *precisa* ser uma motion.div com as variantes default para herdar o stagger.
              // O `RevealOnScroll` filho é simplificado, usando apenas o `key`.
              <motion.div 
                key={project.id}
                // As variantes do item (hidden/visible) são necessárias para o stagger funcionar
                // Elas serão as variantes default do RevealOnScroll: { opacity: 0, y: 75 } -> { opacity: 1, y: 0 }
                // Ou você pode definir customizadas aqui:
                variants={{ 
                    hidden: { opacity: 0, y: 50 }, 
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } 
                }}
                className="flex flex-col items-center w-full max-w-[510px]"
              >
                {/* Card visual com efeito de hover (mantido como motion.div) */}
                <motion.div
                  className="rounded-xl shadow-lg p-6 flex items-center justify-center"
                  style={{
                    width: "100%", // Ocupa 100% da largura da coluna da grade
                    height: "330px", // Altura fixa do card visual
                    background: 'linear-gradient(135deg, #163030, #224444)',
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 20, duration: 0.9 }} // Duração para o hover
                />

                {/* Texto */}
                <div className="mt-4 text-center w-full">
                  <h3
                    className="text-gray-900"
                    style={{
                      fontFamily: 'DM Sans',
                      fontWeight: 600,
                      fontSize: '30px',
                      lineHeight: '100%',
                    }}
                  >
                    {project.title}
                  </h3>
                  <div
                    className="text-gray-600 mt-2"
                    style={{
                      fontFamily: 'DM Sans',
                      fontWeight: 500,
                      fontSize: '18.26px',
                      lineHeight: '120%',
                      overflowWrap: 'break-word',
                    }}
                  >
                    {project.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default PresentationSectionThree;