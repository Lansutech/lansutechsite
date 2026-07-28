# Ajustes de interação e animação mobile

## Objetivo

Eliminar o arraste instável do carrossel de serviços e tornar a abertura e o fechamento do menu hambúrguer mais fluídos, sem modificar estrutura, cores ou layout dos componentes.

## Carrossel de serviços

Em `src/components/Footer.tsx`, a interação de arrastar foi removida. O carrossel continua centralizando o card ativo e pode ser navegado pelos botões anterior/próximo ou pelo toque em um card visível.

Um `ResizeObserver` local também atualiza o posicionamento quando a largura útil do carrossel muda, por exemplo na rotação do aparelho. Isso mantém o card ativo centralizado sem criar um listener global de `resize`.

### Correção da troca entre desktop e mobile

Na validação em `370 × 681 px`, foi identificado que o Framer Motion mantinha valores de `width` e `height` que haviam sido animados no primeiro render desktop. Como a versão mobile usa largura via classe CSS, esses valores residuais podiam reduzir o card seguinte para `48 px` e posicionar seu texto fora da área visível.

Cada modo do carrossel agora possui uma chave própria, forçando a remontagem apenas quando o breakpoint muda:

```tsx
<div key="services-mobile-carousel" ref={carouselRef} className="w-full overflow-hidden">
  {/* cards mobile */}
</div>

<div key="services-desktop-carousel" className="flex items-end mb-10 relative overflow-hidden">
  {/* cards desktop */}
</div>
```

Assim, propriedades animadas do layout desktop não atravessam para o mobile e vice-versa.

Código removido:

```tsx
drag="x"
dragConstraints={carouselRef}
dragElastic={0.2}
style={{ x: dragX }}
onDragEnd={handleDragEnd}
```

Código utilizado para o movimento controlado:

```tsx
<motion.div
  ref={mobileCarouselContentRef}
  className="flex gap-4"
  animate={{ x: getMobileCarouselTargetX() }}
  transition={carouselTransition}
>
```

## Dropdown do menu mobile

Em `src/components/Header.tsx`, o painel abre com `opacity`, deslocamento curto e escala sutil. Os links entram em sequência com `staggerChildren`, enquanto a saída usa a mesma ordem invertida. Essa composição evita a sensação de um painel estático e mantém a animação curta para não atrasar a navegação.

Código introduzido:

```ts
const mobileNavItemVariants: Variants = {
  hidden: { y: -8, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    y: -6,
    opacity: 0,
    transition: { duration: 0.12, ease: [0.4, 0, 1, 1] },
  },
};
```

O botão do menu também passou a indicar seu estado e seu destino para leitores de tela por meio de `aria-expanded`, `aria-controls` e `aria-label`.
