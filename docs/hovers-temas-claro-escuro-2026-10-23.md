# Hovers estáveis e retorno dos temas claro/escuro — 23/10/2026

> Ajuste posterior do usuário: as linhas e os detalhes gráficos voltaram ao amarelo original também no claro; o botão de tema passou a ser fixo no canto superior direito. Consulte [Amarelo original e controle fixo](amarelo-original-tema-fixo-2026-10-23.md). Os valores de contraste e o dourado das linhas descritos nesta primeira etapa são históricos.

## Pedido e base consultada

Remover o hover que sobe, inverter fundo e texto do botão “Entrar em contato”, melhorar o hover dos botões com gradiente e recuperar a alternância preto/branco do site original, adaptada ao layout atual.

O `Header` e os estilos da versão em `HEAD` confirmam que o original tinha botão de sol/lua, logotipos claros/escuros e preferência persistida em `lansutech-theme`. O fundo claro original era `#EAF3F3`. As cinco notas obrigatórias do Obsidian foram consultadas; o relatório Graphify, cuja leitura já estava autorizada, foi usado como contexto histórico e conferido contra os componentes atuais.

## Hovers sem deslocamento

- Removido `translateY(-2px)` de `.pill:hover` e a transição de `transform` dos botões.
- Removido o aumento de escala no hover dos projetos. O cartão lateral passa somente de opacidade 0,48 para 0,72; brilho e contorno continuam indicando que ele pode ser selecionado.
- Removido o zoom das imagens de serviços no hover. Permanecem apenas brilho, saturação e contorno.
- O spring e a escala durante a troca do cartão selecionado continuam vigentes: são a animação de navegação já aprovada, não um efeito ao passar o mouse.

### Contato e botões claros

No tema escuro, “Entrar em contato” começa com fundo branco suave e texto escuro; no hover/foco, fundo escuro e texto branco. No tema claro, começa escuro com texto branco e inverte para claro com texto escuro. A borda mantém o limite do botão visível. O contato do menu móvel recebe o mesmo tratamento.

```css
.contact-action {
  background: var(--contrast-bg);
  color: var(--contrast-text);
  border-color: var(--contrast-bg);
}

.contact-action:is(:hover, :focus-visible) {
  background: var(--contrast-text);
  color: var(--contrast-bg);
  border-color: var(--contrast-bg);
}
```

Os links “Ver projeto” também usam inversão de cores, com borda reservada desde o estado inicial para evitar mudança de tamanho.

### Gradientes

Os CTAs da abertura, envio e página 404 mantêm amarelo/laranja. A transição move somente o fundo dentro do botão, de amarelo→laranja para laranja→amarelo, em 650 ms. O brilho externo é discreto e não possui deslocamento vertical.

```css
.pill--gradient {
  background: linear-gradient(105deg,
    #ffd33d 0%, #f7bf35 22%, #f57d38 50%,
    #f7bf35 76%, #ffd33d 100%);
  background-size: 200% 100%;
  background-position: 0% 50%;
}

.pill--gradient:not(:disabled):is(:hover, :focus-visible) {
  background-position: 100% 50%;
  box-shadow: 0 0 24px #f57d3830, inset 0 0 0 1px #09121714;
}
```

As regras de movimento reduzido continuam anulando a duração das transições. O hover não muda posição nem escala dos elementos.

## Retorno do modo claro/escuro

O controle sol/lua voltou ao cabeçalho, disponível também ao lado do menu no celular. A base clara usa `#eaf3f3` e texto escuro; a escura preserva `#091217` e texto branco. Amarelo, laranja e mascotes continuam como identidade visual nos dois modos.

Foram separados os tokens fixos da marca (`--ink`, `--paper`, amarelo e laranja) dos tokens de interface (`--page-bg`, `--text`, `--contrast-bg`, campos, erros etc.). Isso evita texto branco sobre amarelo ou texto escuro sobre os painéis pretos dos projetos.

No claro, os destaques usam `#896100` e as linhas `#a47708`, preservando a família dourada com mais contraste. No escuro, ambos usam o amarelo atual. Os painéis de projetos e as legendas sobre fotos permanecem escuros com texto claro, nos dois temas.

### Estado compartilhado e persistência

O pacote `next-themes`, já instalado e já utilizado pelo componente de notificações, passa a ter um único provider em `App`:

```tsx
<ThemeProvider
  attribute="class"
  storageKey="lansutech-theme"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
  {/* aplicação e notificações */}
</ThemeProvider>
```

A chave original foi mantida para recuperar a preferência existente. Sem escolha salva, o tema acompanha a preferência do sistema; o botão salva uma escolha explícita. `use-theme.ts` preserva a API `theme`/`toggleTheme`, agora ligada ao provider compartilhado, e atualiza a cor de interface do navegador.

Um script curto no `head` aplica a preferência antes da renderização da aplicação. O acesso ao armazenamento tem `try/catch`: se estiver indisponível, a preferência do sistema continua funcionando. A troca de tema não anima todas as cores da página simultaneamente. Não há novo pacote nem timer manual de transição.

## Arquivos alterados

| Arquivo | Responsabilidade |
| --- | --- |
| `src/App.tsx` | Provider compartilhado, incluindo notificações e rotas. |
| `src/hooks/use-theme.ts` | Adaptador para o estado compartilhado e atualização de `theme-color`. |
| `src/components/Header.tsx` | Botão sol/lua com nome acessível; agrupamento responsivo das ações; contato do menu móvel com inversão. |
| `src/components/SiteElements.tsx` | Variantes oficiais preta/branca da marca, exibidas conforme o tema. O link mantém seu nome acessível. |
| `src/components/ProjectsSection.tsx` | Hover lateral só com opacidade, sem escala adicional. |
| `src/components/SiteRoute.tsx` | Cor da linha via `--route-color`, sem mudar geometria ou conexões. |
| `src/index.css` | Tokens claro/escuro, legibilidade de campos e legendas, hovers, gradientes e controles. |
| `index.html` | Aplicação inicial da preferência antes da renderização. Título e SEO preservados. |
| `dist/index.html` | Manifesto gerado pelo build. |

## Verificações e limites

- `npx tsc --noEmit -p tsconfig.app.json`: aprovado.
- `npm run build`: aprovado; somente o aviso preexistente de Browserslist.
- Bootstrap do HTML de produção executado em cinco cenários isolados: escolha escura, escolha clara, sistema escuro, sistema claro e armazenamento bloqueado. Classe, `color-scheme` e `theme-color` corretos nos cinco casos.
- Parsing do CSS com PostCSS: nenhuma regra de hover define `transform`, `translate` ou `scale`. Hover do projeto conferido como alteração exclusiva de opacidade.
- Contraste calculado dos tokens principais: texto claro 14,48:1, texto secundário claro 7,03:1, destaque claro 4,93:1, texto escuro/contato 17,60:1 e linha sobre fundo claro 3,57:1. Estes cálculos se referem às cores sólidas especificadas; não representam auditoria completa da página.
- Não houve validação visual adicional nem servidor de preview, respeitando o pedido anterior do usuário. Persistência/interação em navegador não foram exercitadas nesta etapa.

Notas humanas dos dois cofres Obsidian atualizadas com esta evidência. Sem commit ou publicação; o hook atualizará o mapa técnico após commit.
