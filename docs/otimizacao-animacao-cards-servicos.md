# Otimização da animação dos cards de serviços

## Objetivo

Fazer o texto do card selecionado começar a aparecer no mesmo instante em que o card é selecionado, sem alterar o estilo visual existente: continuação do fade com deslocamento vertical e apresentação sequencial de título e descrição.

## Alterações em `src/components/Footer.tsx`

- Na entrada, o contêiner de conteúdo não possui mais uma animação visual própria. Antes ele concluía um spring antes de liberar os filhos por causa de `when: "beforeChildren"`, criando a espera percebida. A saída continua com fade e deslocamento para cima.
- `delayChildren: 0` inicia a entrada do título imediatamente.
- O intervalo entre título e descrição passou de `0.08s` para `0.045s`, preservando a sequência, mas deixando-a mais ágil.
- A animação de cada bloco continua sendo `opacity` + `y`, agora com um spring mais curto e estável.
- `AnimatePresence` deixa de usar `mode="wait"`, evitando uma fila desnecessária entre saída e entrada.
- `willChange: 'transform, opacity'` informa ao navegador as duas propriedades animadas, reduzindo o trabalho de pintura durante a transição.

## Código introduzido

```ts
const textContentContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.045,
    },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.12 } },
};

const individualTextElementVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 220, damping: 26, mass: 0.55 },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.12 } },
};
```

O resultado mantém a mesma linguagem de movimento, mas remove a pausa entre a seleção do card e o início das letras.
