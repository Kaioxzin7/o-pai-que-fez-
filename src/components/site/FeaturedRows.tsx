import { useEffect, useRef } from "react";
import type { MenuItem } from "@/data/menu";
import { ProductCard } from "./ProductCard";

/** Template's signature effect: pairs of cards swing up into place on scroll. */
export function FeaturedRows({ items }: { items: MenuItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const rows: MenuItem[][] = [];
  for (let i = 0; i < items.length; i += 2) rows.push(items.slice(i, i + 2));

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!ref.current) return;
      ctx = gsap.context(() => {
        ref.current!.querySelectorAll<HTMLElement>(".feat-row").forEach((row) => {
          const cards = row.querySelectorAll(".feat-item");
          cards.forEach((c, i) => gsap.set(c, { y: 600, rotation: i === 0 ? -40 : 40 }));
          gsap.to(cards, {
            y: 0,
            rotation: 0,
            duration: 1,
            ease: "power4.out",
            stagger: 0.2,
            scrollTrigger: { trigger: row, start: "top 85%", once: true },
          });
        });
      }, ref);
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <div ref={ref} className="mx-auto flex w-full max-w-6xl flex-col gap-12 py-20">
      {rows.map((r, i) => (
        <div key={i} className="feat-row flex flex-col gap-8 md:flex-row">
          {r.map((it) => (
            <div key={it.id} className="feat-item flex-1">
              <ProductCard item={it} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
