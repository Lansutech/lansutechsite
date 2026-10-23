import { useEffect, useRef, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Brand } from './SiteElements';
import { useTheme } from '../hooks/use-theme';

const links = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre nós', href: '#sobre-nos' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const dismissOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 761px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener('keydown', dismiss);
    document.addEventListener('pointerdown', dismissOutside);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', dismiss);
      document.removeEventListener('pointerdown', dismissOutside);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="site-header page-width" ref={headerRef}>
      <Brand />
      <nav aria-label="Navegação principal" className="desktop-nav">
        {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>
      <div className="header-actions">
        <a className="pill pill--white header-contact contact-action" href="#contato">Entrar em contato</a>
        <button ref={toggleRef} type="button" className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <span className="theme-control">
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}>
            {theme === 'dark' ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
          </button>
        </span>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação móvel">
          {[...links, { label: 'Entrar em contato', href: '#contato' }].map((link) => (
            <a key={link.href} href={link.href} className={link.href === '#contato' ? 'pill pill--white contact-action' : undefined} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
