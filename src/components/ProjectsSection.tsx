import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CAROUSEL_SPRING, CAPTION_VARIANTS, CAPTION_ITEM_VARIANTS, useCarousel } from '../hooks/use-carousel';
import { CarouselControls } from './SiteElements';
import tooling from '../assets/projetos/tooling.webp';
import globalvision from '../assets/projetos/globalvision.webp';

const projects = [
  { title: 'Tooling Equipamentos Óticos', description: 'E-commerce com apresentação de produtos e landing page da empresa.', image: tooling, url: 'https://www.tooling.com.br/' },
  { title: 'Global Vision Optical', description: 'E-commerce de produtos oftalmológicos, com catálogo e apresentação da empresa.', image: globalvision, url: 'https://globalvisionoptical.com.br/' },
];

export default function ProjectsSection() {
  const carousel = useCarousel(projects.length, 'projects');

  return (
    <section id="projetos" className="projects-section page-width" aria-labelledby="projects-title">
      <div className="section-heading">
        <h2 id="projects-title">Nossos <span className="hand-underline">projetos.</span></h2>
        <p>Soluções que já fazem parte da rotina<br className="desktop-break" /> de outras empresas.</p>
      </div>
      <div ref={carousel.viewportRef} className="project-stage" role="region" aria-roledescription="carrossel" aria-label="Projetos da Lansutech" tabIndex={0} onKeyDown={carousel.onKeyDown}>
        <motion.div className="project-track" {...carousel.trackProps}>
          {projects.map((project, index) => {
            const active = carousel.current === index;
            return (
              <motion.article key={project.title} className={`project-card ${active ? 'is-active' : ''}`} role="group" aria-roledescription="slide" aria-label={`${index + 1} de ${projects.length}: ${project.title}`} initial={false} style={{ width: carousel.ready ? carousel.cardWidth : undefined }} animate={{ scale: active ? 1 : 0.88, opacity: active ? 1 : 0.48 }} whileHover={!active ? { opacity: 0.72 } : undefined} transition={carousel.reducedMotion ? { duration: 0 } : CAROUSEL_SPRING}>
                <img src={project.image} alt={active ? `Página inicial do site ${project.title}` : ''} width="1901" height="1069" loading="lazy" draggable={false} />
                {!active && <button type="button" className="card-select" tabIndex={-1} aria-label={`Selecionar projeto ${project.title}`} onClick={() => carousel.select(index)} />}
                <AnimatePresence initial={false}>
                  {(active || carousel.mobile) && (
                    <motion.div key="caption" className="project-caption" variants={carousel.reducedMotion ? undefined : CAPTION_VARIANTS} initial={carousel.reducedMotion ? false : 'hidden'} animate="visible" exit="exit">
                      <div><motion.h3 variants={carousel.reducedMotion ? undefined : CAPTION_ITEM_VARIANTS}>{project.title}</motion.h3><motion.p variants={carousel.reducedMotion ? undefined : CAPTION_ITEM_VARIANTS}>{project.description}</motion.p></div>
                      <motion.a variants={carousel.reducedMotion ? undefined : CAPTION_ITEM_VARIANTS} href={project.url} target="_blank" rel="noopener noreferrer" className="pill pill--white" tabIndex={active ? 0 : -1} aria-label={`Ver projeto ${project.title} (abre em nova aba)`} onClick={(event) => { if (carousel.ignoreClick()) event.preventDefault(); }}>Ver projeto<ArrowUpRight size={19} aria-hidden="true" /></motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
      <div className="project-bottom">
        <CarouselControls count={projects.length} current={carousel.current} label="Projeto" onSelect={carousel.select} />
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">Projeto {carousel.current + 1} de {projects.length}: {projects[carousel.current].title}</p>
    </section>
  );
}
