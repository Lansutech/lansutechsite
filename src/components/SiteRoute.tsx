import { useId, useLayoutEffect, useRef, useState } from 'react';

type Fade = { from: number; to: number };
type RouteLayout = {
  width: number;
  height: number;
  hero: string;
  journey: string;
  frame: string;
  contact: string;
  fades: Fade[];
};

/** One coordinate system keeps the decorative wire joined across responsive sections. */
export default function SiteRoute() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [layout, setLayout] = useState<RouteLayout>();
  const id = useId().replace(/:/g, '');

  useLayoutEffect(() => {
    const root = svgRef.current?.parentElement;
    if (!root) return;

    const selectors = ['.hero', '.hero-mascot', '.about-section', '.about-intro', '.mission', '.projects-section', '.project-stage', '.services-shell', '.service-viewport', '.contact-inner'];
    const elements = selectors.map(selector => root.querySelector<HTMLElement>(selector));
    if (elements.some(element => !element)) return;
    const nodes = elements as HTMLElement[];

    const measure = () => {
      const origin = root.getBoundingClientRect();
      const [hero, monkey, about, intro, mission, projects, stage, shell, viewport, contact] = nodes.map(element => {
        const box = element.getBoundingClientRect();
        return { left: box.left - origin.left, right: box.right - origin.left, top: box.top - origin.top, bottom: box.bottom - origin.top, width: box.width, height: box.height };
      });
      const styles = getComputedStyle(root);
      const radius = parseFloat(styles.getPropertyValue('--route-radius'));
      const mobile = matchMedia('(max-width: 760px)').matches;
      const left = about.left;
      const anchor = left + radius;
      const half = radius / 2;
      const handX = monkey.left + monkey.width * 0.86;
      const handY = monkey.top + monkey.height * 0.70;
      const heroY = hero.bottom - (mobile ? 27 : 43);
      const bendX = handX + radius + 12;

      // Mobile leaves the narrow text column clear; desktop follows the prototype's loop.
      const aboutPath = mobile
        ? `M ${left} ${about.top} V ${stage.top}`
        : `M ${anchor} ${about.top} V ${intro.bottom - radius}
           Q ${anchor} ${intro.bottom} ${anchor + radius} ${intro.bottom}
           H ${mission.left - radius * 2}
           Q ${mission.left - radius} ${intro.bottom} ${mission.left - radius} ${intro.bottom + radius}
           V ${projects.top - radius}
           Q ${mission.left - radius} ${projects.top} ${mission.left - radius * 2} ${projects.top}
           H ${anchor} Q ${left} ${projects.top} ${left} ${projects.top + radius}
           V ${stage.top}`;

      setLayout({
        width: origin.width,
        height: origin.height,
        hero: `M ${handX} ${handY} H ${handX + 12}
               Q ${bendX} ${handY} ${bendX} ${handY + radius}
               V ${heroY - radius} Q ${bendX} ${heroY} ${bendX + radius} ${heroY}
               H ${about.right}`,
        journey: `${aboutPath} V ${projects.bottom - half}
                  Q ${left} ${projects.bottom} ${left + half} ${projects.bottom}
                  Q ${anchor} ${projects.bottom} ${anchor} ${projects.bottom + half}
                  V ${shell.top}`,
        frame: `M ${anchor} ${shell.top} H ${shell.right - radius}
                Q ${shell.right} ${shell.top} ${shell.right} ${shell.top + radius}
                V ${shell.bottom - radius} Q ${shell.right} ${shell.bottom} ${shell.right - radius} ${shell.bottom}
                H ${anchor} Q ${left} ${shell.bottom} ${left} ${shell.bottom - radius}
                V ${shell.top + radius} Q ${left} ${shell.top} ${anchor} ${shell.top} Z`,
        contact: `M ${shell.right} ${shell.bottom - radius} V ${contact.top - radius}
                  Q ${shell.right} ${contact.top} ${shell.right - radius} ${contact.top}
                  H ${contact.left + radius} Q ${contact.left} ${contact.top} ${contact.left} ${contact.top + radius}
                  V ${contact.bottom}`,
        fades: [
          { from: stage.top - 52, to: stage.bottom + 52 },
          { from: viewport.top - 8, to: viewport.bottom + 8 },
        ],
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    [root, ...nodes].forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <svg ref={svgRef} className="site-route" width={layout?.width} height={layout?.height} fill="none" aria-hidden="true" focusable="false">
      {layout && <>
        <defs>
          {layout.fades.map((fade, index) => (
            <linearGradient key={index} id={`${id}-fade-${index}`} x1="0" y1={fade.from} x2="0" y2={fade.to} gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset={40 / (fade.to - fade.from)} stopColor="black" />
              <stop offset={1 - 40 / (fade.to - fade.from)} stopColor="black" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          ))}
          <mask id={`${id}-mask`} maskUnits="userSpaceOnUse" x="0" y="0" width={layout.width} height={layout.height} style={{ maskType: 'luminance' }}>
            <rect width={layout.width} height={layout.height} fill="white" />
            {layout.fades.map((fade, index) => <rect key={index} x="0" y={fade.from} width={layout.width} height={fade.to - fade.from} fill={`url(#${id}-fade-${index})`} />)}
          </mask>
        </defs>
        <g stroke="var(--route-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" mask={`url(#${id}-mask)`}>
          <path d={layout.hero} />
          <path d={layout.journey} />
          <path d={layout.frame} />
          <path d={layout.contact} />
        </g>
      </>}
    </svg>
  );
}
