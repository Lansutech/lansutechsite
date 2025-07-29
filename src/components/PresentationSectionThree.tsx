import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

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
    <section className="py-16 bg-[#EAF3F3]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8" style={{marginTop: '85px'}}>
        {/* Container principal dos cards */}
        {/* Removido 'place-items-center' e adicionado 'items-start' para alinhamento superior */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projectData.map((project) => (
            <RevealOnScroll key={project.id}>
              {/* O card individual terá largura total na coluna da grade, limitada pelo max-w */}
              <div className="flex flex-col items-center w-full max-w-[510px]">
                {/* Card */}
                <motion.div
                  className="rounded-xl shadow-lg p-6 flex items-center justify-center"
                  style={{
                    width: "100%", // Ocupa 100% da largura da coluna da grade
                    height: "330px", // Altura fixa do card visual
                    background: 'linear-gradient(135deg, #163030, #224444)',
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 20, duration: 0.9 }}
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
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresentationSectionThree;