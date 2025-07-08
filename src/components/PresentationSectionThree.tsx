import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react'; // Ícone do GitHub do Lucide

// === NOVOS IMPORTS DE ÍCONES DE TECNOLOGIAS DO REACT-ICONS ===
// Importe os ícones específicos de tecnologias que você deseja usar
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaNodeJs, FaJava, FaPhp, FaDatabase } from 'react-icons/fa'; // FaDatabase para ícone de banco de dados genérico
import {
  SiTailwindcss, SiTypescript, SiJavascript, SiPostgresql, SiMongodb, SiFlask, // SiFlask para Flask
  SiDocker, SiKubernetes, SiGooglecloud, SiFigma
} from 'react-icons/si';
// =============================================================

// Função auxiliar para mapear nomes de tecnologia para ícones específicos
const getTechnologyIcon = (techName: string) => {
  const IconSize = 24; // Tamanho dos ícones (ajuste conforme necessário)
  const IconColor = "#cccccc"; // Cor padrão dos ícones (um cinza claro)

  const lowerCaseTech = techName.toLowerCase();

  switch (lowerCaseTech) {
    case 'html': return <FaHtml5 size={IconSize} color="#E34F26" />; // HTML5
    case 'css': return <FaCss3Alt size={IconSize} color="#1572B6" />; // CSS3
    case 'tailwindcss': return <SiTailwindcss size={IconSize} color="#06B6D4" />; // Tailwind CSS
    case 'react': return <FaReact size={IconSize} color="#61DAFB" />; // React
    case 'javascript': return <SiJavascript size={IconSize} color="#F7DF1E" />; // JavaScript
    case 'typescript': return <SiTypescript size={IconSize} color="#3178C6" />; // TypeScript
    case 'node.js': return <FaNodeJs size={IconSize} color="#339933" />; // Node.js
    case 'python': return <FaPython size={IconSize} color="#3776AB" />; // Python
    case 'flask': return <SiFlask size={IconSize} color="#E26000" />; // Flask (logo é preta)
    case 'django': return <FaPython size={IconSize} color="#092E20" />; // Usando Python para Django
    case 'java': return <FaJava size={IconSize} color="#007396" />; // Java
    case 'php': return <FaPhp size={IconSize} color="#777BB4" />; // PHP
    case 'postgresql': return <SiPostgresql size={IconSize} color="#336791" />; // PostgreSQL
    case 'mongodb': return <SiMongodb size={IconSize} color="#47A248" />; // MongoDB
    case 'database': return <FaDatabase size={IconSize} color="#666666" />; // Ícone genérico de banco de dados
    case 'docker': return <SiDocker size={IconSize} color="#2496ED" />; // Docker
    case 'kubernetes': return <SiKubernetes size={IconSize} color="#326CE5" />; // Kubernetes
    case 'google cloud': return <SiGooglecloud size={IconSize} color="#4285F4" />; // Google Cloud
    case 'figma': return <SiFigma size={IconSize} color="#F24E1E" />; // Figma
    // Adicione mais casos conforme as tecnologias que você usa
    default: return <FaReact size={IconSize} color={IconColor} />; // Fallback
  }
};


// Dados para os três projetos (com imagem, link GitHub e tecnologias)
const projectData = [
  {
    id: 1,
    imageSrc: '/imgs/project-placeholder-1.jpg', // Path to your image for card 1
    githubUrl: 'https://github.com/your-user/project-alpha', // GitHub link for card 1
    title: 'Sistema Full Stack',
    description: 'Um projeto completo que demonstra a integração de tecnologias modernas para uma aplicação robusta.',
    technologies: ['Flask', 'Python', 'React', 'TailwindCSS', 'Docker', 'Database'], // Tecnologias desejadas
  },
  {
    id: 2,
    imageSrc: '/imgs/project-placeholder-2.jpg', // Path to your image for card 2
    githubUrl: 'https://github.com/your-user/project-beta', // GitHub link for card 2
    title: 'Desenvolvimento Ágil',
    description: 'Apresentamos um case de sucesso de desenvolvimento ágil, focado em entrega contínua e feedback.',
    technologies: ['Python', 'Django', 'MongoDB', 'Docker', 'AWS'],
  },
  {
    id: 3,
    imageSrc: '/imgs/project-placeholder-3.jpg', // Path to your image for card 3
    githubUrl: 'https://github.com/your-user/project-gamma', // GitHub link for card 3
    title: 'Inovação em Design',
    description: 'Descubra a arte por trás da interface intuitiva e a experiência de usuário impecável neste projeto.',
    technologies: ['Figma', 'React', 'TypeScript', 'Firebase', 'Mobile'],
  },
];

const PresentationSectionThree = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-gray-900 mb-8 text-center" style={{ fontFamily: 'DM Sans', fontWeight: 600, fontSize: '67.05px' }}>
          Mais Projetos Recentes
        </h2>

        {/* Terceira seção - três cartões com conteúdo de projeto */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
            {projectData.map((project) => (
              <motion.div
                key={project.id}
                className="rounded-lg overflow-hidden flex flex-col bg-white shadow-lg"
                style={{
                  width: '100%',
                  height: '480px', // Altura ajustada
                  borderRadius: '10px',
                  backgroundColor: '#163030',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                }}
                transition={{
                  type: "tween",
                  duration: 0.3,
                  ease: "easeOut"
                }}
              >
                {/* Project Image */}
                <div className="w-full h-3/5 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.imageSrc}
                    alt={`Imagem do ${project.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Title, Description, Technologies and GitHub Button */}
                <div className="p-4 text-white flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'DM Sans' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm mb-3" style={{ fontFamily: 'DM Sans', opacity: 0.8 }}>
                      {project.description}
                    </p>

                    {/* Tecnologias Usadas - AGORA COM ÍCONES ESPECÍFICOS */}
                    <div className="flex flex-wrap gap-x-3 gap-y-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center text-gray-400" title={tech}>
                          {getTechnologyIcon(tech)}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Button - Centered at the bottom */}
                  <div className="mt-4 flex justify-center">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-2 bg-white text-gray-900 rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-200"
                      style={{ fontFamily: 'DM Sans' }}
                    >
                      <Github className="w-4 h-4 mr-2" /> Ver no GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSectionThree;