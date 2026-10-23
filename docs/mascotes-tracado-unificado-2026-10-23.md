# Mascotes fornecidos e traçado unificado — 23/10/2026

## Pedido e base

Integrar os dois macacos enviados pelo usuário nas posições do protótipo inicial: sentado nos círculos da abertura e apoiado acima dos serviços. Corrigir os pequenos vãos e diferenças nas curvas amarelas, preservando o fade solicitado na área dos cartões.

Este pedido substitui a orientação anterior de excluir os mascotes. As artes fornecidas já possuem transparência; os PNGs originais foram copiados sem redesenho, recorte ou geração. As cinco notas obrigatórias do Obsidian e o Graphify autorizado foram consultados durante esta sequência de trabalho; o grafo de 04/08/2026 foi conferido contra o código atual, ainda sem commit.

## Arquivos e código introduzido

| Arquivo | Alteração |
| --- | --- |
| `src/assets/mascots/monkey-seated.png` | Primeiro PNG fornecido: 1320 × 1192, com transparência. |
| `src/assets/mascots/monkey-peeking.png` | Segundo PNG fornecido: 1536 × 1024, com transparência e detalhes amarelos originais. |
| `src/components/Hero.tsx` | Importa e exibe o macaco sentado como elemento decorativo, junto aos círculos. Remove o SVG isolado antigo. |
| `src/components/ServicesSection.tsx` | Importa e posiciona o macaco com as mãos sobre o limite superior da moldura. Carregamento tardio da imagem. |
| `src/components/SiteRoute.tsx` | Centraliza os trajetos num único SVG, com medidas reais das seções e conexões compartilhadas. |
| `src/components/AboutSection.tsx` | Remove o SVG isolado antigo da seção. |
| `src/pages/Index.tsx` | Adiciona `SiteRoute` dentro de `main` e a classe que estabelece sua camada. |
| `src/index.css` | Remove as bordas e pseudoelementos de traçado antigos; define raios compartilhados, tamanhos e apoios dos mascotes, espaço móvel abaixo do CTA e encaixe dos círculos. |
| `dist/index.html` | Manifesto atualizado pelo build de produção. |

## Encaixe das artes

- Abertura: o macaco fica sobre os círculos à esquerda. O início da linha acompanha proporcionalmente a posição da mão direita da imagem.
- Serviços: a imagem acompanha a moldura por `bottom: calc(100% - ...)`. As mãos passam ligeiramente para baixo da linha, criando o apoio previsto na referência.
- Os tamanhos variam entre desktop, tablet e celular. O cabeçalho dos serviços reserva espaço para o desenho; no celular estreito, ele ocupa a faixa entre o título e os cartões.
- A abertura móvel usa espaço inferior vinculado ao conteúdo, deixando o mascote abaixo do botão mesmo quando a descrição quebra em mais linhas.
- As imagens usam `alt=""`, dimensões intrínsecas, `draggable={false}` e `pointer-events: none`. A marca existente no cabeçalho e rodapé continua independente dessas ilustrações.

## Um sistema de coordenadas para a linha

Antes, SVGs com escalas diferentes e bordas CSS calculavam as pontas de forma independente. Essa mistura produzia desencaixes nas mudanças de largura.

`SiteRoute` usa `useLayoutEffect`, `ResizeObserver` e `getBoundingClientRect` para medir as seções em relação a `main`. O SVG desenha em pixels reais, sem esticar um `viewBox` entre proporções diferentes:

```tsx
const origin = root.getBoundingClientRect();
const radius = parseFloat(getComputedStyle(root).getPropertyValue('--route-radius'));
const left = about.left;
const anchor = left + radius;
```

O raio é 38 px no desktop e 26 px até 760 px. A curva do sobre mantém o percurso do protótipo no desktop; no mobile, vira um trecho vertical para deixar a coluna de texto livre. A transição inferior de projetos usa duas curvas suaves. A entrada dos serviços e o início da moldura compartilham `anchor` e `shell.top`; a continuação para o contato parte exatamente da curva direita da mesma moldura.

Todos os trajetos usam amarelo único, espessura de 2 px e pontas/uniões arredondadas. A abertura conserva seu ramal visual próprio, como no protótipo. As conexões entre sobre, projetos, serviços e contato compartilham a mesma camada e as mesmas coordenadas.

```tsx
<g stroke="var(--yellow)" strokeWidth="2"
   strokeLinecap="round" strokeLinejoin="round"
   mask={`url(#${id}-mask)`}>
  <path d={layout.hero} />
  <path d={layout.journey} />
  <path d={layout.frame} />
  <path d={layout.contact} />
</g>
```

## Fade e preservação das interações

A máscara SVG usa gradientes em coordenadas da página: desaparece antes dos projetos e reaparece depois dos cartões. Nos serviços, mantém o topo visível para apoiar as mãos e suaviza as laterais na altura dos cartões. As máscaras afetam exclusivamente o SVG decorativo, posicionado atrás do conteúdo; ele não recebe eventos nem foco. O observador é desconectado ao desmontar.

O cartão mobile com imagem de 261 px e painel de 319 px, os carrosséis por spring/arraste, os indicadores e o link único “Ver projeto” continuam funcionando. Nenhuma dependência foi adicionada.

## Validação

- Build de produção e TypeScript aprovados; aviso preexistente de base Browserslist desatualizada.
- Revisão visual no Chrome em 1440 px, 768 px, 390 px e verificação de geometria em 320 px.
- Em 320 px: largura útil e rolável de 305 px; nenhum overflow horizontal. O início da imagem do macaco fica cerca de 16,5 px abaixo do fim do CTA; o mascote de serviços também fica abaixo do título.
- Em 320 px: projeto com 580 px de altura, imagem de 261 px e painel de 319 px, sem sobreposição. Os dois PNGs carregaram com suas dimensões originais.
- Quatro trajetos SVG válidos; raio e pontos de conexão recalculados após mudanças de viewport.
- União entre a entrada dos serviços e sua moldura: diferença de coordenadas igual a 0 px na inspeção do SVG. Camada com `pointer-events: none`; conteúdo e janela dos serviços sem máscara.
- Clique nos indicadores alternou projetos e serviços; `Home` retornou ao primeiro cartão. Arraste por ponteiro no viewport de celular alternou Tooling para Global Vision. Console sem erros capturados; teste sem aparelho físico.

Capturas de revisão ficam fora do repositório em `C:/Users/Guilherme-PC/.codex/visualizations/2026/10/23/01a16889-61b5-7612-acec-d41d6a446b16/`.

- `lansutech-mascotes-desktop-abertura.jpg`
- `lansutech-mascotes-desktop-servicos.jpg`
- `lansutech-mascotes-mobile-abertura.jpg`
- `lansutech-mascotes-mobile-servicos.jpg`
- `lansutech-projeto-mobile-final.jpg`

Sem commit ou publicação. As notas humanas dos dois cofres Obsidian recebem esta evidência; o hook atualizará o grafo técnico quando houver commit.
