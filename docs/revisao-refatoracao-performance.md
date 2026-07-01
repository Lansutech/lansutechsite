# Revisao e refatoracao de performance

Esta revisao focou em otimizar o codigo atual sem alterar a aparencia das animacoes da landing page. As duracoes, curvas, tamanhos dos cards e comportamento visual foram mantidos.

## Pontos encontrados

- `Hero.tsx` e `AboutSection.tsx` repetiam a mesma animacao `fadeUp`.
- `ColoredCardsSection.tsx` e `Footer.tsx` criavam listeners manuais de `resize`, mesmo ja existindo o hook `useIsMobile`.
- Alguns valores fixos de carrossel estavam dentro de `useMemo`, embora nao dependessem do estado do componente.
- `ContactSection.tsx` importava Framer Motion e tema, mas nao aplicava animacoes nem usava os valores do tema.
- `components/ui/toaster.tsx` apontava para arquivos de toast que nao existem mais, bloqueando a checagem TypeScript.
- Alguns componentes de UI tinham exports auxiliares nao usados que geravam avisos no Fast Refresh.

## O que foi refatorado

- A animacao `fadeUp` foi movida para `src/lib/animations.ts`.
- O hook `useIsMobile` passou a respeitar o mesmo breakpoint anterior dos carrosseis: `<= 768px`.
- Os carrosseis de projetos e servicos agora usam `useIsMobile` em vez de criar listeners proprios de `resize`.
- Constantes fixas de dimensao e transicao foram movidas para o escopo do modulo.
- A secao de contato deixou de usar wrappers `motion.div` sem animacao configurada.
- O toaster legado agora reexporta o `Toaster` ativo de `sonner`.
- `button.tsx` e `sonner.tsx` passaram a exportar apenas componentes usados pela aplicacao.

## Por que isso melhora

- Menos listeners globais deixam o resize mais leve.
- Menos objetos estaticos recriados dentro do render reduzem trabalho desnecessario.
- Variantes compartilhadas evitam divergencia futura entre animacoes iguais.
- Imports removidos deixam os componentes mais claros e ajudam o lint.
- A checagem TypeScript volta a validar o projeto inteiro.
- O lint fica sem erros e sem avisos relacionados aos arquivos revisados.

## O que nao mudou

- Timing das animacoes.
- Tipo de transicao dos carrosseis.
- Tamanhos, espacamentos e classes visuais dos cards.
- Conteudo exibido para o usuario.
