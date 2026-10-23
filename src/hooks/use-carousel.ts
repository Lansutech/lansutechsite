import { useCallback, useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react';
import { animate, useMotionValue, useReducedMotion, type PanInfo } from 'framer-motion';

export const CAROUSEL_SPRING = { type: 'spring', stiffness: 70, damping: 22, mass: 1.1 } as const;
export const CAPTION_VARIANTS = {
  hidden: {},
  visible: { transition: { delayChildren: 0, staggerChildren: 0.07 } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.18 } },
};
export const CAPTION_ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 110, damping: 22, mass: 0.8 } },
} as const;

/** The same motion value follows the pointer and settles into the selected card. */
export function useCarousel(count: number, kind: 'projects' | 'services') {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({ width: 0, mobile: false, compact: false });
  const [current, setCurrent] = useState(0);
  const x = useMotionValue(0);
  const reducedMotion = Boolean(useReducedMotion());
  const animation = useRef<ReturnType<typeof animate> | null>(null);
  const dragging = useRef(false);
  const dragEndedAt = useRef(-Infinity);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const mobile = window.matchMedia('(max-width: 760px)');
    const compact = window.matchMedia('(max-width: 480px)');
    const measure = () => setLayout({ width: viewport.clientWidth, mobile: mobile.matches, compact: compact.matches });
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    mobile.addEventListener('change', measure);
    compact.addEventListener('change', measure);
    measure();
    return () => {
      observer.disconnect();
      mobile.removeEventListener('change', measure);
      compact.removeEventListener('change', measure);
    };
  }, []);

  const gap = layout.mobile ? (kind === 'projects' ? 12 : 15) : (kind === 'projects' ? 24 : 22);
  const cardWidth = layout.width * (layout.mobile ? 0.96 : 0.84);
  const smallWidth = layout.width * (layout.mobile ? (layout.compact ? 0.92 : 0.84) : 0.29);
  const activeWidth = layout.mobile ? smallWidth : layout.width * 0.53;
  const step = (kind === 'projects' ? cardWidth : smallWidth) + gap;
  const origin = kind === 'projects' ? (layout.width - cardWidth) / 2 : 0;
  const maxScroll = Math.max(0, (count - 1) * (smallWidth + gap) + activeWidth - layout.width);
  const clampIndex = useCallback((index: number) => Math.max(0, Math.min(count - 1, index)), [count]);
  const targetFor = useCallback((index: number) => kind === 'projects' ? origin - index * step : -Math.min(index * step, maxScroll), [kind, origin, step, maxScroll]);

  const settle = useCallback((index: number) => {
    animation.current?.stop();
    animation.current = animate(x, targetFor(index), reducedMotion ? { duration: 0 } : CAROUSEL_SPRING);
  }, [x, targetFor, reducedMotion]);

  useEffect(() => {
    if (!layout.width) return;
    // A resize must also cancel an interrupted drag and restore the selected card.
    dragging.current = false;
    settle(current);
    return () => animation.current?.stop();
  }, [current, layout.width, settle]);

  const ignoreClick = useCallback(() => dragging.current || performance.now() - dragEndedAt.current < 160, []);
  const select = (index: number) => {
    if (ignoreClick()) return;
    const selected = clampIndex(index);
    if (selected === current) settle(selected);
    else setCurrent(selected);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = event.key === 'ArrowRight' ? current + 1
      : event.key === 'ArrowLeft' ? current - 1
      : event.key === 'Home' ? 0
      : event.key === 'End' ? count - 1 : null;
    if (index === null) return;
    event.preventDefault();
    select(index);
  };

  const onDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    dragging.current = false;
    dragEndedAt.current = performance.now();
    const projected = info.offset.x + info.velocity.x * 0.12;
    const threshold = Math.min(80, step * 0.2);
    const distance = Math.abs(projected) > threshold ? Math.max(1, Math.round(Math.abs(projected) / step)) : 0;
    const selected = clampIndex(current + (projected < 0 ? distance : -distance));
    if (selected === current) settle(current);
    else setCurrent(selected);
  };

  return {
    current, select, ignoreClick, viewportRef, onKeyDown, cardWidth, smallWidth, activeWidth,
    mobile: layout.mobile, compact: layout.compact, ready: layout.width > 0, reducedMotion,
    trackProps: {
      style: { x },
      drag: 'x' as const,
      dragDirectionLock: true,
      dragMomentum: false,
      dragElastic: reducedMotion ? 0 : 0.12,
      dragConstraints: { left: targetFor(count - 1), right: origin },
      onDragStart: () => { animation.current?.stop(); dragging.current = true; },
      onDragEnd,
      onPointerCancel: () => { dragging.current = false; settle(current); },
    },
  };
}
