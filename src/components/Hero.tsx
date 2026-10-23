import { ArrowRight } from 'lucide-react';
import { ColorOrbits } from './SiteElements';
import seatedMonkey from '../assets/mascots/monkey-seated.png';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Sistemas <span>&</span><br />automações.</h1>
        <p>Sistemas sob medida e automação de processos<br className="desktop-break" /> para simplificar o dia a dia da sua empresa.</p>
        <a href="#contato" className="pill pill--gradient">Vamos conversar<ArrowRight size={19} aria-hidden="true" /></a>
      </div>
      <ColorOrbits className="hero-orbits" />
      <img className="hero-mascot" src={seatedMonkey} alt="" width="1320" height="1192" draggable={false} />
      <p className="hero-signature">Feito para a sua rotina.<br /><strong>Pensado para evoluir.</strong></p>
    </section>
  );
}
