import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { menu } from "@/data/menu";
import { brand } from "@/lib/brand";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { PillButton } from "@/components/site/PillButton";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/cardapio")({
  head: () => ({
    meta: [
      { title: "Cardápio – O Pai Que Fez" },
      { name: "description", content: "Hambúrgueres, combos, porções e bebidas d'O Pai Que Fez. Peça online com delivery em Ibirité – MG." },
      { property: "og:title", content: "Cardápio – O Pai Que Fez" },
      { property: "og:description", content: "Confira os hambúrgueres, combos e porções d'O Pai Que Fez." },
    ],
  }),
  component: Cardapio,
});

const cats = [
  { id: "all", label: "Tudo" },
  { id: "hamburgueres", label: "Hambúrgueres" },
  { id: "combos", label: "Combos individuais" },
  { id: "combos-do-pai", label: "Combos do Pai" },
  { id: "porcoes", label: "Porções" },
  { id: "bebidas", label: "Bebidas" },
];

function Cardapio() {
  const [cat, setCat] = useState("all");
  const items = menu.filter((m) => m.cat !== "oferta" && (cat === "all" || m.cat === cat));
  return (
    <section className="section-paper min-h-svh px-4 pb-28 pt-36 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal onScroll={false} className="text-center">
          <h1 className="display-xl">Cardápio</h1>
        </Reveal>
        <Reveal onScroll={false} delay={0.2} className="mx-auto mt-6 max-w-xl text-center">
          <p className="text-xl">Escolha o seu e finalize o pedido na loja oficial. Preços conforme a loja; podem mudar sem aviso.</p>
        </Reveal>
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={cn(
                "min-h-11 rounded-full border border-paper-foreground px-5 font-display text-lg font-bold uppercase transition-colors",
                cat === c.id ? "bg-background text-foreground" : "hover:bg-paper-foreground/10",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <ProductCard key={it.id} item={it} />
          ))}
        </div>
        <div className="mt-20 flex justify-center">
          <PillButton href={brand.store} variant="dark">Fazer meu pedido</PillButton>
        </div>
      </div>
    </section>
  );
}
