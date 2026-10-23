# Refatoração visual da Lansutech — 23/10/2026

> Estado mais recente: o usuário forneceu as artes definitivas dos macacos, que foram integradas à abertura e aos serviços. A orientação histórica de exclusão registrada abaixo foi substituída. Consulte [Mascotes e traçado unificado](mascotes-tracado-unificado-2026-10-23.md).

> Atualização posterior: as etiquetas numeradas, setas e o link externo duplicado foram removidos; os carrosséis passaram a usar spring e arraste contínuo. As decisões e os testes mais recentes estão em [Refinamento dos carrosséis sem setas](refinamento-carrosseis-sem-setas-2026-10-23.md). As descrições abaixo registram a primeira etapa da refatoração.

## Base analisada antes da implementação

- Referência visual fornecida pelo usuário: página escura, abertura centralizada, macacos monocromáticos, círculos amarelos e laranja, linha amarela com curvas conectando seções, portfólio em destaque, carrossel de serviços e formulário sem caixas pesadas.
- Notas lidas no cofre empresarial: `Projeto - lansutechsite.md`, `Handoff-Codex.md`, `Estado-Atual.md`, `Decisoes.md` e `Historico-de-Implementacoes.md`.
- Graphify consultado com autorização: `graphify-out/GRAPH_REPORT.md` e relações em `graphify-out/graph.json`. O relatório é de 04/08/2026; as relações foram conferidas no código atual.
- Relações relevantes: `Index → Header/Hero/AboutSection/ColoredCardsSection/Footer/ContactSection`; o antigo `Footer` contém serviços, e não um rodapé. `ContactSection → useContactForm → sendContactForm` mantém a integração existente do EmailJS.
- Stack preservada: React 18, TypeScript e Vite. Projetos existentes: Tooling Equipamentos Óticos e Global Vision Optical. Não serão inventados clientes ou indicadores adicionais.
- Alterações locais preexistentes em `.gitignore`, `.githooks`, `.graphifyignore`, `AGENTS.md` e documentação de Obsidian serão preservadas.

## Padrões consolidados

1. Fundo azul quase preto; branco suave no texto; amarelo e laranja apenas nos destaques.
2. DM Sans, títulos grandes e compactos, textos curtos, respiro e divisórias discretas.
3. Ordem: cabeçalho → abertura → sobre → projetos → serviços → contato → rodapé.
4. Curvas e círculos em CSS/SVG decorativos. Por instrução posterior do usuário, os macacos decorativos foram excluídos do escopo; nenhuma geração foi copiada para o repositório e não há dependências ou espaços reservados para mascotes.
5. Interações por botões, teclado e gesto de deslizar no toque; navegação por âncoras; menu móvel acessível.
6. Formulário mantém validação e envio existentes, com campos lineares e feedback de estado.
7. Layout adaptável sem reduzir a referência inteira a uma imagem nem depender de larguras fixas.

## O que foi implementado

| Arquivo | Alteração e propósito |
| --- | --- |
| `src/pages/Index.tsx` | Composição semântica com `main`, link de pular conteúdo e sequência da referência. A âncora `inicio` engloba o cabeçalho para o logo voltar ao topo completo. |
| `src/components/Header.tsx` | Marca original branca, navegação por âncoras e contato em botão claro. Menu móvel fecha por seleção, Escape, clique fora ou mudança para desktop. |
| `src/components/Hero.tsx` | Título em duas linhas, `&` amarelo, CTA em degradê, assinatura à direita, círculos em CSS e curva em SVG. Sem mascote. |
| `src/components/AboutSection.tsx` | Texto em duas colunas no desktop, missão separada e trajeto amarelo que chega aos projetos. |
| `src/components/ProjectsSection.tsx` | Substitui `ColoredCardsSection.tsx`. Tooling inicia em destaque; Global Vision permanece disponível. Laterais mostram o projeto adjacente; indicadores representam somente os dois projetos reais. |
| `src/components/ServicesSection.tsx` | Extrai os serviços do antigo `Footer`. Seis soluções com foto, cartão ativo maior no desktop e navegação manual. Duas cópias decorativas no final mantêm prévias ao selecionar o último serviço; não criam serviços adicionais e ficam ocultas da árvore acessível. |
| `src/components/ContactSection.tsx` | Campos lineares, labels, autocompletar, erros associados por `aria-describedby`, estado de envio e resultado persistente. Preserva `useContactForm`, Zod e EmailJS. |
| `src/components/Footer.tsx` | Agora contém o rodapé real: marca, navegação e copyright. |
| `src/components/SiteElements.tsx` | Compartilha marca, círculos decorativos, links com seta, controles e indicadores de carrossel. |
| `src/hooks/use-carousel.ts` | Compartilha seleção circular, setas, teclado e gesto horizontal de toque sem bloquear a rolagem vertical. |
| `src/index.css` | Novo sistema visual escuro, tipografia, curvas, cartões, formulário e adaptações em 1100, 760 e 480 px. Respeita `prefers-reduced-motion`. |
| `src/pages/NotFound.tsx` | Página 404 em português, com o mesmo sistema visual. |
| `index.html` | Título e descrições alinhados ao novo posicionamento, cor do navegador, pesos da DM Sans e fechamento explícito de `head`. |
| `public/imgs/services/*.webp` | Seis fotos que já eram usadas pelo projeto, agora locais, em WebP. Aproximadamente 509 KiB no total. |
| `src/assets/elementos_graficos/logo_sobrenos.png` | Ilustração decorativa antiga do macaco removida, conforme a orientação posterior do usuário. Os arquivos oficiais do logo foram preservados. |
| `dist/index.html` | Manifesto de produção já rastreado no repositório, atualizado pelo build. Os demais arquivos de build continuam sujeitos ao `.gitignore` existente. |

## Código introduzido

Composição principal:

```tsx
<div id="inicio" className="site">
  <Header />
  <main id="conteudo">
    <Hero />
    <AboutSection />
    <ProjectsSection />
    <ServicesSection />
    <ContactSection />
  </main>
  <Footer />
</div>
```

Navegação circular compartilhada, sem temporizadores ou rotação automática:

```tsx
const next = () => setCurrent((index) => (index + 1) % count);
const previous = () => setCurrent((index) => (index - 1 + count) % count);
```

O gesto só troca de item quando ultrapassa 48 px e o deslocamento horizontal é maior que o vertical multiplicado por 1,3. `ArrowLeft` e `ArrowRight` funcionam ao focar a região do carrossel. Os indicadores têm nomes acessíveis e `aria-current`; as mudanças são anunciadas por uma região `aria-live`.

Base visual reutilizada nas seções:

```css
--ink: #091217;
--paper: #f7f7f2;
--yellow: #f7cb35;
--orange: #f57d38;
--gutter: clamp(22px, 5vw, 72px);
```

Os campos usam os nomes e regras originais (`nome`, `email`, `assunto`, `mensagem`). `aria-invalid`, `aria-describedby`, `aria-busy` e `disabled` conectam o layout aos estados existentes do formulário. Nenhuma dependência foi adicionada; animações dos novos componentes usam CSS.

## Imagens e exclusão dos macacos

O usuário decidiu produzir os macacos externamente. As gerações experimentais ficaram fora do repositório, em armazenamento do Codex; não foram importadas, copiadas para `public`, referenciadas em componentes ou usadas como placeholders. Nenhuma geração de imagem é necessária para executar o site.

As fotos de serviço vêm das mesmas seis imagens do Unsplash antes referenciadas no antigo componente de serviços. IDs preservados: `photo-1560461396-ec0ef7bb29dd`, `photo-1707157281599-d155d1da5b4c`, `photo-1460925895917-afdab827c52f`, `photo-1461749280684-dccba630e2f6`, `photo-1676573408178-a5f280c3a320` e `photo-1637502875124-eb4a9843a2fa`. Os screenshots de Tooling e Global Vision são os arquivos originais do repositório.

## Evidências de validação

- `npm run build`: aprovado após a implementação e os ajustes finais.
- `npx tsc --noEmit -p tsconfig.app.json`: aprovado.
- `git diff --check`: verificado ao encerrar a entrega.
- Prévia local: HTTP 200; as seis fotos locais retornaram HTTP 200 e `image/webp`.
- Chrome: revisão visual em desktop, 768 px, 390 px e 320 px. A largura rolável foi igual à largura útil nas verificações finais, inclusive 305 px úteis dentro do viewport de 320 px com barra de rolagem de 15 px.
- Menu móvel: abertura, fechamento por Escape e fechamento ao selecionar Projetos aprovados.
- Projetos: botão Próximo alternou para Global Vision com o link correto; `ArrowLeft` retornou para Tooling.
- Serviços: seleção do sexto item, mudança por teclado e avanço do último para o primeiro conferidos. O cartão selecionado alinha com o início da janela; controles cabem em 320 px.
- Formulário vazio: quatro mensagens de validação e quatro campos com `aria-invalid="true"`, sem envio externo.
- Console do navegador: nenhum erro capturado na revisão final.
- Capturas de revisão salvas fora do repositório em `C:/Users/Guilherme-PC/.codex/visualizations/2026/10/23/01a16889-61b5-7612-acec-d41d6a446b16/`: `lansutech-desktop.jpg` e `lansutech-mobile-390.jpg`.

## Limites e continuidade

- A integração existente do EmailJS foi preservada. Entrega real de e-mail, limites e disponibilidade do serviço não foram testados; nenhum e-mail de teste foi enviado.
- A fonte continua carregada do Google Fonts; imagens de serviços passaram a ser servidas localmente.
- O build mostra o aviso preexistente sobre a idade da base Browserslist; ele não impede a compilação. As dependências não foram alteradas para resolver um aviso fora do escopo visual.
- Trabalho local, sem commit ou publicação. O hook pós-commit não foi executado; o mapa Graphify consultado continua sendo a versão anterior até o próximo commit.
- As notas humanas dos cofres empresarial e pessoal receberam o resumo da entrega e a referência deste documento.
