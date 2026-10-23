# Instagram na seção de contato — 23/10/2026

Adicionado o link `@lansutech` junto ao e-mail e WhatsApp, com a URL fornecida pelo usuário: `https://www.instagram.com/lansutech/`.

- `src/components/ContactSection.tsx`: importa o ícone `Instagram` do Lucide já instalado e adiciona uma âncora com ícone e nome de usuário. Abre em nova aba com `rel="noopener noreferrer"` e nome acessível que informa o destino. Ícone decorativo usa `aria-hidden`.
- `src/index.css`: `.contact-social` alinha ícone e texto com espaço de 10 px; evita encolhimento do ícone. Usa as cores e o hover existentes para ambos os temas.
- `dist/index.html`: manifesto atualizado pelo build de produção.

```tsx
<a className="contact-social"
   href="https://www.instagram.com/lansutech/"
   target="_blank" rel="noopener noreferrer"
   aria-label="Instagram da Lansutech: @lansutech (abre em nova aba)">
  <Instagram size={19} aria-hidden="true" />
  <span>@lansutech</span>
</a>
```

Build de produção executado. Alteração pontual de apresentação; sem nova dependência, acesso à conta, publicação ou validação visual adicional. Não houve consulta ao conteúdo do Instagram, pois o destino foi fornecido explicitamente pelo usuário. Notas humanas atualizadas com esta evidência.
