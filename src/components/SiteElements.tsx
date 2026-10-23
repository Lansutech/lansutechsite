import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

export function Brand() {
  return (
    <a href="#inicio" className="brand" aria-label="Lansutech — início">
      <img className="brand-symbol theme-logo--light" src={`${import.meta.env.BASE_URL}imgs/logolansutech.svg`} alt="" width="48" height="48" />
      <img className="brand-symbol theme-logo--dark" src={`${import.meta.env.BASE_URL}imgs/logolansutech-white.svg`} alt="" width="48" height="48" />
      <img className="brand-wordmark theme-logo--light" src={`${import.meta.env.BASE_URL}imgs/lansutechlogotitulo.svg`} alt="" width="154" height="24" />
      <img className="brand-wordmark theme-logo--dark" src={`${import.meta.env.BASE_URL}imgs/lansutechlogotitulo-white.svg`} alt="" width="154" height="24" />
    </a>
  );
}

export function ColorOrbits({ className = '' }: { className?: string }) {
  return <div className={`color-orbits ${className}`} aria-hidden="true"><span /><span /><span /></div>;
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className="text-link" href={href}>{children}<ArrowRight size={18} aria-hidden="true" /></a>;
}

interface CarouselControlsProps {
  count: number;
  current: number;
  label: string;
  onSelect: (index: number) => void;
}

export function CarouselControls({ count, current, label, onSelect }: CarouselControlsProps) {
  return (
    <div className="carousel-controls">
      <div className="carousel-dots" role="group" aria-label={`Selecionar ${label.toLowerCase()}`}>
        {Array.from({ length: count }, (_, index) => (
          <button key={index} type="button" className={`carousel-dot ${current === index ? 'is-active' : ''}`} aria-label={`${label} ${index + 1} de ${count}`} aria-current={current === index ? 'true' : undefined} onClick={() => onSelect(index)}><span /></button>
        ))}
      </div>
    </div>
  );
}
