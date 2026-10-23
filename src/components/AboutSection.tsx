import { TextLink } from './SiteElements';

export default function AboutSection() {
  return (
    <section id="sobre-nos" className="about-section page-width" aria-labelledby="about-title">
      <div className="about-intro">
        <div>
          <h2 id="about-title">A tecnologia se adapta.<br />Sua empresa avança.</h2>
        </div>
        <div className="about-description">
          <p>Desenvolvemos software sob medida, sistemas empresariais e sites com automação de processos para resolver os desafios reais do seu negócio.</p>
          <TextLink href="#nossa-missao">Conheça a Lansutech</TextLink>
        </div>
      </div>
      <div className="mission" id="nossa-missao">
        <h3>Nossa missão</h3>
        <p>Tecnologia prática, confiável e escalável,<br className="desktop-break" /> com transparência, parceria e melhoria contínua.</p>
      </div>
    </section>
  );
}
