# Carrosséis mais suaves e apresentação nas buscas — 23/10/2026

> Hover posteriormente ajustado: removidos aumento de escala dos cartões e deslocamento dos botões. Foram restaurados os temas claro/escuro. Consulte [Hovers estáveis e temas](hovers-temas-claro-escuro-2026-10-23.md). O spring lento continua vigente.

> Atualização posterior: o título e a descrição foram reajustados para priorizar o serviço principal. Consulte [Título com foco em software sob medida](titulo-software-sob-medida-2026-10-23.md). Os ajustes de animação abaixo continuam vigentes.

## Pedidos e contexto

Desacelerar e suavizar os carrosséis, deixando o hover dos cartões laterais mais perceptível e discreto. Em seguida, melhorar o título mostrado na aba e a apresentação da página em resultados de pesquisa, usando palavras que descrevam os serviços.

As cinco notas de contexto do cofre empresarial foram consultadas. O Graphify já autorizado foi relido como contexto histórico; o grafo de 04/08/2026 foi confrontado com os componentes atuais. Nenhuma alteração na arquitetura ou dependências foi necessária.

O usuário testou a interação, aprovou o resultado e pediu para interromper a validação visual adicional. Essa orientação foi respeitada; os checks finais se limitaram ao build e à integridade dos arquivos.

## Movimento e hover

| Arquivo | Código alterado e propósito |
| --- | --- |
| `src/hooks/use-carousel.ts` | Spring compartilhado de deslocamento e acomodação mais lento; entrada dos textos menos rápida e saída mais suave. |
| `src/components/ProjectsSection.tsx` | `whileHover` apenas no cartão inativo: escala 0,88 → 0,91 e opacidade 0,48 → 0,72. A seleção ainda depende de clique ou arraste. |
| `src/components/ServicesSection.tsx` | Fade do título inativo passa de 150 para 240 ms. |
| `src/index.css` | Brilho, saturação e contorno amarelo discreto nos cartões inativos sob o mouse; transições de 350–500 ms. Hover CSS restrito a mouse/ponteiro fino. |

```ts
export const CAROUSEL_SPRING = {
  type: 'spring',
  stiffness: 70, // antes: 120
  damping: 22,   // antes: 28
  mass: 1.1,     // antes: 0.9
} as const;
```

A massa maior e a rigidez menor desaceleram a acomodação. O amortecimento continua acima do valor crítico, evitando oscilação. O arraste segue o ponteiro diretamente; a mudança afeta a acomodação após soltar e as seleções por clique/teclado. Por ser um spring físico, não há duração fixa em milissegundos para todos os deslocamentos.

O stagger dos textos passa de 45 para 70 ms. A saída usa 180 ms, com deslocamento vertical de 6 px. O spring de entrada dos textos passa para `stiffness: 110`, `damping: 22`, `mass: 0.8`.

Nos serviços, a imagem lateral ganha escala 1,025, brilho 1,12 e saturação 0,65. Nos projetos, saturação 0,7 e brilho 1,08. O contorno usa `#f7cb3560`, sem mudar a largura do cartão. O cartão principal não recebe o hover lateral. Movimento reduzido mantém a acomodação imediata, evita o zoom dos serviços e preserva o feedback visual de opacidade/contorno. Não foram adicionadas setas, autoplay ou dependências.

## Título e palavras-chave

**Título anterior:** Lansutech — Sistemas & automações

**Título atual:** Lansutech | Sistemas sob medida e automação de processos

**Descrição:** Desenvolvimento de sistemas sob medida, automação de processos e sites para empresas. Lansutech em Paranavaí, PR. Converse sobre seu projeto.

O título atual descreve o serviço com maior precisão. As expressões escolhidas derivam da oferta real; não foi realizado estudo de volume de buscas ou experimento de conversão. Portanto, essa escolha não constitui prova de que seja o título com melhor desempenho.

| Arquivo | Alteração |
| --- | --- |
| `index.html` | Título e descrição; alinhamento de Open Graph e Twitter Card; `og:site_name`, idioma e URL canônica de compartilhamento; dados estruturados `WebSite` para o nome Lansutech. Mantém canonical e favicon existentes. |
| `src/components/Hero.tsx` | Descrição visível inclui “sistemas sob medida” e “automação de processos”, preservando o título visual compacto do protótipo. |
| `src/components/AboutSection.tsx` | Texto visível descreve sistemas empresariais, automação de processos e sites sob medida. |
| `public/sitemap.xml` | Atualiza `lastmod` da página principal para 2026-10-23, data das mudanças reais de conteúdo. |
| `src/assets/social-preview.svg` | Fonte editável de uma prévia social com a identidade visual e o logotipo vetorial já existente. |
| `public/imgs/og-image.png` | PNG real de 1200 × 630 substitui a referência anterior a um arquivo inexistente. Gerado do SVG usando Sharp do runtime disponibilizado, sem instalar dependência no projeto. |
| `dist/index.html` | Manifesto atualizado pelo build de produção. |

Os metadados permanecem no HTML inicial. O JSON-LD define somente `WebSite`, nome, URL e idioma; não inventa avaliações, endereço completo, área atendida ou credenciais. A marca continua “Lansutech”, separada da descrição do serviço.

## Referências oficiais e limites

- [Google: títulos descritivos e concisos](https://developers.google.com/search/docs/appearance/title-link): evitar repetição artificial de palavras e representar corretamente o conteúdo.
- [Google: descrições e snippets](https://developers.google.com/search/docs/appearance/snippet): a descrição deve resumir a página e ajudar o usuário a decidir pelo clique.
- [Google: nome do site](https://developers.google.com/search/docs/appearance/site-names): `WebSite` e `og:site_name` indicam preferência pelo nome da marca.
- [Google: metatags suportadas](https://developers.google.com/search/docs/crawling-indexing/special-tags): `meta keywords` não é utilizado para indexação ou ranking, por isso não foi adicionado.

O Google pode gerar outro título ou snippet conforme a consulta. Os ajustes ainda são locais; para aparecerem nas buscas, precisam ser publicados e rastreados novamente. Não foram feitos deploy, envio de sitemap, solicitações no Search Console ou promessas de posicionamento/conversão.

## Verificação

- Aprovação visual da interação pelo próprio usuário; nenhuma bateria adicional de testes de navegador após seu pedido de interrupção.
- `npx tsc --noEmit -p tsconfig.app.json` e `npm run build`.
- Conferência local de título, descrição, consistência dos metadados, sintaxe JSON-LD e dimensões/arquivo da imagem social.
- Fonte SVG normalizada na revisão anterior ao commit, removendo espaço em linha vazia sem alterar a imagem.
- Notas humanas dos dois cofres Obsidian atualizadas com esta evidência. Sem commit ou publicação; o hook atualizará o grafo técnico após commit.
