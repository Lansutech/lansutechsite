# Refinamento dos carrosséis sem setas — 23/10/2026

> Ajuste posterior: o spring foi desacelerado e o hover lateral reforçado de forma discreta. Os valores vigentes e a revisão de metadados estão em [Carrosséis suaves e SEO](carrosseis-suaves-seo-2026-10-23.md).

> Atualização posterior: o cartão mobile passou a separar imagem e conteúdo, e a linha decorativa recebeu interrupções com fade fora dos cartões. Consulte [Cartão mobile e linha com fade](ajuste-mobile-projetos-linha-fade-2026-10-23.md).

## Pedido e análise

O usuário solicitou remover as etiquetas numeradas das seções, retirar o link “Explore este projeto” que duplicava “Ver projeto” e recuperar uma navegação mais fluida por clique nos cartões e arraste no celular, sem setas.

Foram lidas as cinco notas obrigatórias do cofre empresarial e o relatório Graphify, cuja consulta já havia sido autorizada nesta conversa. Como o grafo antecede a refatoração ainda não commitada, as relações foram conferidas nos componentes atuais. A animação original foi consultada com `git show HEAD:src/components/ColoredCardsSection.tsx` e `git show HEAD:src/components/Footer.tsx`, além da documentação histórica de animações.

A implementação anterior à refatoração movia e redimensionava cartões com spring. A primeira refatoração apenas remontava o projeto selecionado com fade, deixando as prévias estáticas. Nos serviços, larguras mudavam instantaneamente enquanto a faixa se deslocava em CSS. Esses comportamentos explicavam a perda da continuidade visual apontada pelo usuário.

## Alterações

| Arquivo | Código e comportamento introduzidos |
| --- | --- |
| `src/components/AboutSection.tsx` | Remove a etiqueta `01 — Sobre a Lansutech`. |
| `src/components/ContactSection.tsx` | Remove a etiqueta `04 — Contato`. |
| `src/components/ProjectsSection.tsx` | Remove `02 — Projetos`, setas e link externo duplicado. Renderiza os dois projetos reais com chaves estáveis numa faixa animada. O cartão lateral é selecionável; o ativo mantém somente “Ver projeto” como saída externa. |
| `src/components/ServicesSection.tsx` | Remove `03 — Serviços` e setas. Mantém somente os seis serviços reais, sem cópias decorativas. Largura, altura, posição e texto passam a transicionar em conjunto. |
| `src/components/SiteElements.tsx` | Simplifica os controles compartilhados para indicadores clicáveis com nomes acessíveis e `aria-current`. Remove propriedades e ícones de setas. |
| `src/hooks/use-carousel.ts` | Substitui a simples detecção do toque ao soltar por arraste contínuo com `useMotionValue`, `motion` e spring. Centraliza medidas, limites, teclado, seleção e bloqueio de cliques gerados por arraste. |
| `src/index.css` | Remove regras obsoletas de setas, prévias duplicadas, fade de remontagem e deslocamento em CSS. Define faixas flexíveis, áreas selecionáveis e mantém a linha amarela junto do título de serviços após retirar a etiqueta. |
| `dist/index.html` | Atualizado pelo build já usado neste repositório. |

Nenhuma dependência foi adicionada. O Framer Motion já fazia parte do projeto e da animação original.

## Animação e interação

O movimento usa o mesmo valor `x` durante o arraste e a acomodação. Os elementos não são substituídos a cada seleção:

```tsx
const x = useMotionValue(0);
const CAROUSEL_SPRING = {
  type: 'spring',
  stiffness: 120,
  damping: 28,
  mass: 0.9,
};

animation.current = animate(x, targetFor(index), CAROUSEL_SPRING);
```

A faixa recebe estas propriedades do hook:

```tsx
{
  style: { x },
  drag: 'x',
  dragDirectionLock: true,
  dragMomentum: false,
  dragElastic: 0.12,
  dragConstraints: { left: targetFor(count - 1), right: origin },
  onDragStart,
  onDragEnd,
}
```

- Projetos: o selecionado ocupa o centro; o adjacente se desloca junto da faixa e muda de escala e opacidade. Clicar na parte visível do cartão lateral o seleciona.
- Serviços: o selecionado cresce, os demais diminuem e a faixa se acomoda. O limite final considera a largura total para evitar um grande espaço vazio após o último serviço.
- Texto: título, descrição e CTA entram com deslocamento curto e opacidade, começando imediatamente, com intervalo de 45 ms entre os elementos.
- Arraste: o cartão acompanha o ponteiro. Ao soltar, deslocamento e velocidade determinam a seleção; movimentos curtos retornam à posição atual. A navegação tem início e fim, sem teletransportar do último para o primeiro.
- Clique após arraste: um bloqueio de 160 ms, junto do controle do Framer Motion, impede que soltar o gesto sobre um cartão ou link gere uma ação acidental.
- Rolagem: `touch-action: pan-y` mantém o gesto vertical disponível ao navegador.
- Teclado: `ArrowLeft`, `ArrowRight`, `Home` e `End` operam a região focada; os indicadores permanecem acessíveis.
- Responsividade: `ResizeObserver` mede a área útil; os breakpoints de 760 e 480 px recalculam dimensões e limites sem reutilizar larguras antigas.
- Movimento reduzido: `useReducedMotion` elimina a animação de acomodação e o redimensionamento animado quando solicitado pelo sistema.

## Verificações

- `npx tsc --noEmit -p tsconfig.app.json`: aprovado.
- `npm run build`: aprovado. Apenas o aviso preexistente de Browserslist desatualizado.
- `git diff --check`: aprovado.
- Busca no código: nenhuma etiqueta numerada de seção, `Explore este projeto`, `.project-arrow` ou `.carousel-arrows` restante.
- Chrome desktop: clique na prévia lateral selecionou Global Vision; arraste retornou para Tooling.
- Cliques rápidos alternando os indicadores durante o movimento: a seleção final e o indicador permaneceram em Global Vision, conforme o último clique.
- Chrome com viewport de 390 px: arraste horizontal trocou o projeto; arraste sobre a área selecionável dos serviços mudou Landing pages para Bots de atendimento.
- Indicador do sexto serviço e tecla `Home`: seleção e retorno ao primeiro conferidos.
- Proteção de link: arraste iniciado sobre “Ver projeto” no último cartão manteve a seleção no limite e não abriu nenhuma aba externa.
- Viewport de 320 px: largura rolável de 305 px igual à largura útil de 305 px, sem rolagem lateral. A diferença de 15 px corresponde à barra de rolagem do navegador de teste.
- Retorno ao desktop: cartão ativo de serviço com aproximadamente 650,83 × 350 px numa janela interna de 1228 px, correspondente aos 53% previstos; nenhuma largura residual de celular.
- DOM: exatamente dois cartões de projeto e seis de serviço; zero controles de seta e zero etiquetas numeradas.
- Console: nenhum erro capturado.
- As verificações de arraste foram feitas por ponteiro no Chrome em dimensões de celular; não houve teste em aparelho físico.
- Captura: `C:/Users/Guilherme-PC/.codex/visualizations/2026/10/23/01a16889-61b5-7612-acec-d41d6a446b16/lansutech-carrossel-refinado-desktop.jpg`.

Entrega local, sem commit ou publicação. O formulário e a exclusão dos macacos decorativos permanecem conforme a entrega anterior. O mapa técnico será atualizado pelo hook após um futuro commit. As notas humanas recebem esta documentação como evidência.
