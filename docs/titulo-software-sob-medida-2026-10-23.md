# Título com foco no serviço principal — 23/10/2026

> Ordem posteriormente alterada por preferência do usuário: **Lansutech | Desenvolvimento de Software Sob Medida**. Consulte [Título com a marca primeiro](titulo-marca-primeiro-2026-10-23.md). Este documento registra a decisão anterior.

## Pedido e decisão

Reajustar o título para uma apresentação mais enfática e orientada ao mercado geral de busca, após esclarecer que o título anterior não tinha sido escolhido por volume de buscas ou resultados de conversão.

**Novo título:** Desenvolvimento de Software Sob Medida | Lansutech

**Descrição:** Desenvolvemos software sob medida, sistemas empresariais, sites e automação de processos para sua empresa. Fale com a Lansutech sobre seu projeto.

O serviço principal passa ao início; a marca continua identificada no final. Os serviços complementares ficam na descrição, evitando transformar o título numa lista extensa. A descrição deixa de priorizar a cidade, mas a localização real permanece no contato da página. Não foi adicionada alegação de atendimento nacional ou de liderança de mercado.

## Fundamentação e limite dos dados

O [Google recomenda títulos descritivos, concisos e com identificação clara da marca](https://developers.google.com/search/docs/appearance/title-link). Essa orientação sustenta o formato; não demonstra que esta expressão tenha maior volume de buscas ou gere mais vendas que outras.

Esta é uma hipótese editorial baseada na oferta real, sem acesso ao Search Console, Planejador de palavras-chave ou métricas de conversão. O Google pode gerar outro título conforme a consulta. A comparação de desempenho depende de publicação, novo rastreamento e dados posteriores. Nenhuma classificação como “melhor título comprovado” deve ser atribuída a esta alteração.

## Código alterado

- `index.html`: atualiza `<title>`, `meta description`, `og:title`, `og:description`, `twitter:title` e `twitter:description`, mantendo as três apresentações consistentes. Nome estruturado da marca continua “Lansutech”.
- `src/components/AboutSection.tsx`: inclui “software sob medida” no texto visível para alinhar o conteúdo ao título, mantendo os serviços reais.
- `dist/index.html`: manifesto gerado pelo build de produção.

```html
<title>Desenvolvimento de Software Sob Medida | Lansutech</title>
```

As cinco notas obrigatórias do Obsidian foram consultadas. O Graphify já autorizado foi usado como contexto histórico e confrontado com o código atual. Não houve nova dependência, mudança no layout, alteração no carrossel, publicação ou commit.

## Verificação

Build de produção e conferência de consistência entre título e metadados sociais. Não foi aberta outra rodada de validação visual, respeitando a orientação anterior do usuário. Notas dos dois cofres atualizadas com este documento; o grafo técnico será atualizado pelo hook após commit.
