# Sombras dos cards textuais

Este ajuste foi aplicado nos cards textuais do `Hero.tsx` e do `AboutSection.tsx`, mantendo tamanho, conteudo, cores e arredondamento.

## O que foi adicionado

- `border border-white/35`: cria uma borda clara e discreta para separar o card do fundo.
- `shadow-[...]`: adiciona duas sombras em camadas, uma escura para profundidade e outra alaranjada para acompanhar a paleta do card.
- `ring-1 ring-black/5`: cria uma linha muito sutil no modo claro.
- `dark:border`, `dark:shadow` e `dark:ring`: ajustam a profundidade no modo escuro sem clarear demais o card.

## Cards de Sobre nos

Os dois cards textuais de `AboutSection.tsx` usam a constante `textCardClass`.

- Mantem `bg-[#ffde59]/75`, o mesmo amarelo original da secao.
- Adiciona `border border-white/35` para separar o card do fundo.
- Usa `shadow-[...]` com uma camada escura e uma camada amarela suave.
- Usa `dark:shadow` e `dark:ring` para manter a leitura no modo escuro.

## Chevron de descida

O `ChevronDown` abaixo do card foi transformado em um `motion.button`.

- `mt-3 md:mt-4`: aproxima o icone do card textual.
- `animate={{ y: [0, 8, 0] }}`: cria um movimento sutil orientado para baixo.
- `onClick`: rola suavemente para a secao `sobre-nos`.
- `aria-label`: mantem o botao compreensivel para tecnologias assistivas.

## Como ajustar

Para uma sombra mais discreta, reduza a opacidade dos `rgba(...)`, por exemplo de `0.16` para `0.10`.

Para uma sensacao mais flutuante, aumente levemente o deslocamento vertical da primeira sombra, por exemplo de `0_18px_42px` para `0_22px_50px`.
