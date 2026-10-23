import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return <main className="not-found"><p className="eyebrow">Erro 404</p><h1>Esse caminho<br />ainda não existe.</h1><p>Vamos voltar para onde as ideias acontecem.</p><a className="pill pill--gradient" href="/">Voltar ao início<ArrowRight size={19} aria-hidden="true" /></a></main>;
}
