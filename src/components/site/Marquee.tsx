import type { MenuItem } from "@/data/menu";

/** Spotlight strip: endless scrolling row of real product photos. */
export function Marquee({ items }: { items: MenuItem[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-6">
      <div className="flex w-max animate-[marquee_45s_linear_infinite] gap-4 hover:[animation-play-state:paused]">
        {doubled.map((it, i) => (
          <figure key={i} className="w-64 shrink-0 md:w-80">
            <img src={it.img} alt={it.name} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
            <figcaption className="mt-2 font-display text-xl font-bold uppercase">{it.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
