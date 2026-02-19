// src/components/PresentationSectionThree.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

// Dados da equipe foram mantidos como estão.
const teamData = [
  {
    id: 1,
    name: 'Tiago Sversut',
    role: 'Back-end Developer',
    area: 'Focado em APIs REST, automações e desenvolvimento de Bots. Experiência com Python, SQL, PHP e Java, e bancos de dados relacionais.',
    technologies: ['Python', 'Flask', 'Django', 'SQL', 'PHP', 'Laravel', 'Java', 'Spring Boot', 'PostgreSQL', 'MySQL', 'Oracle DB'],
    githubUrl: 'https://github.com/Suttiago',
    linkedinUrl: 'https://www.linkedin.com/in/tiago-sversut',
  },
  {
    id: 2,
    name: 'Guilherme X. Hojak',
    role: 'Front-end Developer',
    area: 'Focado no Design e Criação de Sites e Apps da Lansutech, com boas práticas de UI responsiva.',
    technologies: ['Angular','React', 'TailwindCSS', 'JavaScript', 'TypeScript', 'C', 'C++', 'Java'],
    githubUrl: 'https://github.com/guihojak',
    linkedinUrl: 'https://www.linkedin.com/in/guilherme-xavier-hojak-694b79300/',
  },
];

// 🎨 Componente separado para o card de cada membro
const TeamMemberCard = ({ member }) => (
  <div className="flex flex-col items-center w-full max-w-sm">
    <motion.div
      className="rounded-xl shadow-lg p-6 flex flex-col justify-between border-l-4 border-[#4ADE80] flex-grow w-full"
      style={{
        minHeight: '330px',
        backgroundColor: '#163030',
        color: '#E0F2F1',
        fontFamily: 'DM Sans',
        textShadow: '0 1px 2px rgba(0,0,0,0.5)',
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)' }}
    >
      <div
        className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full"
        style={{ backgroundColor: 'rgba(74, 222, 128, 0.15)', zIndex: 0 }}
      />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 leading-tight">
          {member.name}
        </h3>
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#4ADE80] mb-4">
          {member.role}
        </p>
        <p className="text-sm sm:text-base text-gray-200 mb-4 px-2">
          {member.area}
        </p>
        
        <div className="flex flex-wrap gap-2 justify-center mt-2 mb-4">
          {member.technologies.map(tech => (
            <span key={tech} className="bg-gray-700/60 text-white text-xs px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 flex justify-center gap-4 mt-auto">
        {member.githubUrl && (
          <a
            href={member.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-700/80 hover:bg-gray-600 rounded-full transition-colors flex items-center justify-center text-white"
            aria-label={`GitHub de ${member.name}`}
          >
            <Github size={20} />
          </a>
        )}
        {member.linkedinUrl && (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-blue-700/80 hover:bg-blue-600 rounded-full transition-colors flex items-center justify-center text-white"
            aria-label={`LinkedIn de ${member.name}`}
          >
            <Linkedin size={20} />
          </a>
        )}
      </div>
    </motion.div>
  </div>
);

// 🚀 Componente principal
const PresentationSectionThree = () => {
  return (
    <section className="py-16 bg-[#EAF3F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-[85px]">
        <div className="flex flex-wrap gap-8 items-stretch justify-center">
          {teamData.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresentationSectionThree;