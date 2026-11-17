import type { MenuItem } from "@/data/menu";
import { brand, brl } from "@/lib/brand";

export function ProductCard({ item }: { item: MenuItem }) {
  const price = item.promo ?? item.price;
  return (
    <a href={brand.store} target="_blank" rel="noopener noreferrer" className="product-card group flex flex-col gap-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
        <img src={item.img} alt={item.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-lg bg-background px-2 pb-1 pt-1.5 font-display text-xl font-black uppercase leading-none text-foreground">
          {item.name}
        </span>
        {item.promo && (
          <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 font-display text-lg font-black text-primary-foreground">
            -{Math.round((1 - item.promo / item.price) * 100)}%
          </span>
        )}
      </div>
      <div className="flex items-start justify-between gap-4">
        <p className="line-clamp-2 text-sm opacity-75">{item.desc}</p>
        {price > 0 && (
          <div className="shrink-0 text-right">
            {item.promo && <s className="block text-xs opacity-60">{brl(item.price)}</s>}
            <span className="font-display text-2xl font-black">{brl(price)}</span>
          </div>
        )}
      </div>
    </a>
  );
}
