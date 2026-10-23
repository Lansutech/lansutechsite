import { Brand } from './SiteElements';

export default function Footer() {
  return (
    <footer className="site-footer page-width">
      <Brand />
      <nav aria-label="Links do rodapé"><a href="#projetos">Projetos</a><a href="#servicos">Serviços</a><a href="#contato">Contato</a></nav>
      <p>© {new Date().getFullYear()} Lansutech. Todos os direitos reservados.</p>
    </footer>
  );
}
