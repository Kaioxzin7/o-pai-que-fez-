import { useEffect, useRef, type ReactNode } from "react";

/** Discreet slide-up reveal on scroll (or on mount), powered by GSAP. */
export function Reveal({
  children,
  delay = 0,
  onScroll = true,
  className,
}: {
  children: ReactNode;
  delay?: number;
  onScroll?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!ref.current) return;
      ctx = gsap.context(() => {
        gsap.fromTo(
          ref.current!.children,
          { yPercent: 60, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            stagger: 0.1,
            delay,
            ...(onScroll ? { scrollTrigger: { trigger: ref.current, start: "top 88%", once: true } } : {}),
          },
        );
      }, ref);
    })();
    return () => ctx?.revert();
  }, [delay, onScroll]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
