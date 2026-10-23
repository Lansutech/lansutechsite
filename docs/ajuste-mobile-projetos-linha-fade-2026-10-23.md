# Cartão mobile de projetos e linha com fade — 23/10/2026

> Atualização posterior: o cartão mobile desta etapa foi preservado. Os trechos em pseudoelementos foram substituídos por um SVG unificado, e os macacos enviados pelo usuário foram integrados. Consulte [Mascotes e traçado unificado](mascotes-tracado-unificado-2026-10-23.md) para o código vigente da linha.

## Pedido e contexto

Adotar no celular o segundo modelo visual enviado pelo usuário: imagem acima e título, descrição e botão numa área independente abaixo. A linha amarela deve desaparecer gradualmente antes dos cartões e reaparecer em uma área livre, tanto no desktop quanto no mobile.

As cinco notas obrigatórias do cofre empresarial foram consultadas antes da edição. O Graphify, cuja leitura já estava autorizada, continua anterior à refatoração sem commit; os componentes e estilos atuais foram usados para confirmar o comportamento real.

## Alterações e código introduzido

| Arquivo | Alteração |
| --- | --- |
| `src/components/ProjectsSection.tsx` | No mobile, mantém a legenda renderizada também no cartão adjacente, para que o conteúdo já exista durante o arraste. O link do cartão inativo recebe `tabIndex={-1}`; o botão de seleção continua cobrindo o cartão inativo. |
| `src/hooks/use-carousel.ts` | A largura dos projetos no mobile passa a 96% da janela do carrossel. O cálculo da centralização, o deslocamento, o arraste e os limites usam essa mesma medida. Desktop preserva 84%. |
| `src/index.css` | Separa imagem e conteúdo no mobile; substitui a linha contínua de projetos por trechos com fade na entrada e na saída; aplica o mesmo cuidado ao traçado e à borda decorativa dos serviços. |
| `dist/index.html` | Atualizado pelo build de produção já utilizado pelo repositório. |

O cartão mobile tem 580 px de altura: 45% de imagem (261 px) e 55% de conteúdo (319 px). A legenda deixa de ocupar uma camada sobre a imagem:

```css
@media (max-width: 760px) {
  .project-card {
    display: flex;
    flex-direction: column;
    width: 96%;
  }

  .project-card > img {
    flex: 0 0 45%;
    height: 45%;
  }

  .project-caption {
    position: relative;
    inset: auto;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background: #030709;
  }
}
```

A janela do carrossel usa a largura útil da tela no mobile, compensando as margens da seção. O cartão fica com uma margem pequena, próxima à referência. Título e descrição ficam no topo do painel escuro, e “Ver projeto” se alinha à parte inferior. A identidade visual atual, o spring, o arraste e a proteção contra cliques acidentais foram mantidos.

## Linha amarela

A antiga borda em `.projects-section::before`, que atravessava toda a seção e podia aparecer sobre cartões laterais, foi removida. Agora:

1. O trecho de entrada pertence ao cabeçalho da seção e desaparece antes do começo do carrossel.
2. Não há traçado decorativo na faixa vertical ocupada pelos cartões de projetos.
3. O trecho de saída pertence a `.project-bottom` e reaparece gradualmente depois do fim dos cartões.
4. Nos serviços, o traçado do cabeçalho termina em fade. A borda decorativa reaparece junto dos controles abaixo dos cartões.

Exemplos das máscaras, aplicadas exclusivamente aos pseudoelementos decorativos:

```css
/* Entrada: o traçado desaparece antes dos cartões. */
mask-image: linear-gradient(
  to bottom,
  #000 calc(100% - 48px),
  transparent calc(100% - 6px)
);

/* Saída: reaparece no espaço abaixo dos cartões. */
mask-image: linear-gradient(to bottom, transparent 6px, #000 36px);
```

As regras incluem a versão `-webkit-mask-image`. As máscaras não são aplicadas ao cartão, à imagem, ao conteúdo ou à janela de arraste. Todos os pseudoelementos permanecem com `pointer-events: none`.

## Verificações

- `npm run build`: aprovado; apenas o aviso preexistente de Browserslist.
- `npx tsc --noEmit -p tsconfig.app.json`: aprovado.
- Chrome em 390 px: cartão de 360 × 580 px numa largura útil de 375 px, imagem de 261 px e painel de 319 px. O fim da imagem coincide com o início do painel, sem sobreposição.
- Chrome em 320 px: cartão de aproximadamente 292,8 px; imagem e conteúdo continuam separados, o botão fica dentro do painel e a página não apresenta rolagem horizontal (305 px úteis e 305 px roláveis).
- Arraste no viewport de celular: Tooling alternou para Global Vision com o novo formato.
- Teclado: `Home` retornou ao primeiro projeto.
- Desktop: legenda continua sobre a imagem, com `position: absolute`. A entrada da linha termina antes do carrossel e a saída começa depois dele; o pseudoelemento contínuo antigo não existe mais.
- Serviços: máscara somente no pseudoelemento da borda; conteúdo e janela com `mask-image: none`, seis cartões e altura de 350 px no desktop.
- Console da aba de revisão: nenhum erro capturado. A verificação móvel foi realizada por ponteiro em viewport de celular, sem aparelho físico.

Capturas fora do repositório, em `C:/Users/Guilherme-PC/.codex/visualizations/2026/10/23/01a16889-61b5-7612-acec-d41d6a446b16/`:

- `lansutech-mobile-imagem-conteudo.jpg`
- `lansutech-desktop-linha-fade.jpg`
- `lansutech-servicos-linha-fade.jpg`

Sem novas dependências, commit ou publicação. Notas dos dois cofres Obsidian atualizadas com esta evidência. O hook atualizará o mapa técnico quando houver commit.
