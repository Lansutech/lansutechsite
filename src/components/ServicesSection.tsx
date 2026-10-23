import { AnimatePresence, motion } from 'framer-motion';
import { CAROUSEL_SPRING, CAPTION_VARIANTS, CAPTION_ITEM_VARIANTS, useCarousel } from '../hooks/use-carousel';
import { CarouselControls, TextLink } from './SiteElements';
import peekingMonkey from '../assets/mascots/monkey-peeking.png';

const services = [
  { title: 'Sistemas empresariais', description: 'Sistemas sob medida para integrar processos e simplificar sua operação.', image: 'sistemas-empresariais' },
  { title: 'Sistemas de gestão', description: 'Mais clareza para organizar finanças, estoque e o dia a dia da sua empresa.', image: 'sistemas-gestao' },
  { title: 'Automações de processos', description: 'Menos tarefas repetitivas. Mais tempo para o que faz seu negócio avançar.', image: 'automacoes' },
  { title: 'Raspagem de dados', description: 'Informações da web organizadas para apoiar suas análises e decisões.', image: 'dados' },
  { title: 'Bots de atendimento', description: 'Conversas mais ágeis e atendimento conectado à rotina do seu negócio.', image: 'bots' },
  { title: 'Landing pages', description: 'Páginas pensadas para apresentar sua marca e transformar visitas em oportunidades.', image: 'landing-pages' },
];

export default function ServicesSection() {
  const carousel = useCarousel(services.length, 'services');
  const transition = carousel.reducedMotion ? { duration: 0 } : CAROUSEL_SPRING;
  const mobileHeight = carousel.compact ? 320 : 325;

  return (
    <section id="servicos" className="services-section page-width" aria-labelledby="services-title">
      <div className="section-heading"><h2 id="services-title">Tecnologia para o seu <span className="hand-underline">dia a dia.</span></h2></div>
      <div className="services-shell">
        <img className="services-mascot" src={peekingMonkey} alt="" width="1536" height="1024" loading="lazy" draggable={false} />
        <div ref={carousel.viewportRef} className="service-viewport" tabIndex={0} role="region" aria-roledescription="carrossel" aria-label="Serviços da Lansutech" onKeyDown={carousel.onKeyDown}>
          <motion.div className="service-track" {...carousel.trackProps}>
            {services.map((service, index) => {
              const active = index === carousel.current;
              return (
                <motion.article key={service.image} className={`service-card ${active ? 'is-active' : ''}`} role="group" aria-roledescription="slide" aria-label={`${index + 1} de ${services.length}: ${service.title}`} initial={false} animate={carousel.ready ? { width: active ? carousel.activeWidth : carousel.smallWidth, height: carousel.mobile ? mobileHeight : active ? 350 : 310 } : undefined} transition={transition}>
                  <img src={`${import.meta.env.BASE_URL}imgs/services/${service.image}.webp`} alt="" loading="lazy" width="1000" height="750" draggable={false} />
                  <button type="button" className="card-select" tabIndex={active ? 0 : -1} aria-pressed={active} aria-label={`Selecionar serviço ${service.title}`} onClick={() => carousel.select(index)} />
                  <AnimatePresence initial={false}>
                    {active ? (
                      <motion.div key="active" className="service-caption service-caption--active" variants={carousel.reducedMotion ? undefined : CAPTION_VARIANTS} initial={carousel.reducedMotion ? false : 'hidden'} animate="visible" exit="exit">
                        <motion.h3 variants={carousel.reducedMotion ? undefined : CAPTION_ITEM_VARIANTS}>{service.title}</motion.h3>
                        <motion.p variants={carousel.reducedMotion ? undefined : CAPTION_ITEM_VARIANTS}>{service.description}</motion.p>
                      </motion.div>
                    ) : (
                      <motion.div key="inactive" className="service-caption" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: carousel.reducedMotion ? 0 : 0.24 }}><h3>{service.title}</h3></motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
        <div className="services-bottom">
          <CarouselControls count={services.length} current={carousel.current} label="Serviço" onSelect={carousel.select} />
          <TextLink href="#contato">Conversar sobre uma solução</TextLink>
        </div>
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">Serviço {carousel.current + 1} de {services.length}: {services[carousel.current].title}. {services[carousel.current].description}</p>
    </section>
  );
}
